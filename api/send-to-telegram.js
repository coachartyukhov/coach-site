export default async function sendToTelegram(req, res) {
    // Только POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Только POST запросы разрешены' })
    }

    const data = req.body

    // Формируем сообщение с защитой от undefined
    const message = `📋 *Новая заявка с сайта*

🧑 Пол: ${data.gender === 'male' ? 'Мужской' : data.gender === 'female' ? 'Женский' : '-'}
📊 Стартовая точка: ${data.startPoint || '-'}
🎯 Цель: ${data.targetPoint || '-'}

🏆 Приоритеты (Цели):
${(data.goals || []).map(g => `• ${g}`).join('\n') || '• не указаны'}

⚠️ Беспокоит:
${(data.concerns || []).map(c => `• ${c}`).join('\n') || '• не указано'}

⏱ Желаемый срок: ${data.timeline || '-'}

📞 Контакт для связи: ${data.contact || '-'}
`.trim()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
        console.error('Не установлены переменные окружения для Telegram')
        return res.status(500).json({ error: 'Не установлены переменные окружения для Telegram' })
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        })

        const results = await response.json()

        if (!results.ok) {
            console.error('Ошибка при отправке сообщения в Telegram:', results.description)
            return res.status(500).json({ error: 'Ошибка при отправке сообщения в Telegram' })
        }

        return res.status(200).json({ success: true, message: 'Сообщение успешно отправлено в Telegram' })

    } catch (error) {
        console.error('Ошибка при отправке сообщения в Telegram:', error)
        return res.status(500).json({ error: 'Ошибка при отправке сообщения в Telegram' })
    }
}