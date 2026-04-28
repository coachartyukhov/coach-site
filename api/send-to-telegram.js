export default async function sendToTelegram(req, res) {
    if(method !== 'POST') {
        res.status(405).json({ error: 'Только POST запросы разрешены' })
        return;
    }

    const data = req.body

    const message = ` Новая заявка с сайта:
        Пол: ${data.gender === 'male' ? 'Мужской' : 'Женский'}
        Стартовая точка: ${data.startPoint}
        Цель: ${data.targetPoint}
        
        Преоритеты (Цели): 
        ${data.priorities.map(priority => `- ${priority}`).join('\n')}

        Беспокоит:
        ${data.concerns.map(concern => `- ${concern}`).join('\n')}

        Желаемый срок: ${data.timeLine}
        
        Контакт для связи: ${data.contact}

        Выбранная услуга: ${data.selectedProduct}
    `.trim()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if(!botToken || !chatId) {
        console.error('Не установлены переменные окружения для Telegram')
        res.status(500).json({ error: 'Не установлены переменные окружения для Telegram' })
        return
    }

    try {

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown'
                }),
            },
        )

        const results = await response.json()

        if(!results.ok) {
            console.error('Ошибка при отправке сообщения в Telegram:', results.description)
            res.status(500).json({ error: 'Ошибка при отправке сообщения в Telegram' })
            return
        }

        res.status(200).json({ message: 'Сообщение успешно отправлено в Telegram' })

    } catch(error) {
        console.error('Ошибка при отправке сообщения в Telegram:', error)
        res.status(500).json({ error: 'Ошибка при отправке сообщения в Telegram' })
    }

}