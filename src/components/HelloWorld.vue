<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  goal: '',
  level: 'Начинающий'
})
const formStatus = ref('')
const isSubmitting = ref(false)

const sendToTelegram = async () => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    throw new Error('Telegram credentials are not configured')
  }

  const message = [
    'Новая заявка с сайта:',
    `Имя: ${formData.value.name}`,
    `Телефон: ${formData.value.phone}`,
    `Цель: ${formData.value.goal}`,
    `Уровень: ${formData.value.level}`
  ].join('\n')

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }
}

const onSubmit = async () => {
  formStatus.value = ''
  isSubmitting.value = true

  try {
    await sendToTelegram()
    formStatus.value = 'Спасибо! Ваша заявка отправлена, я скоро свяжусь с вами.'
    formData.value = {
      name: '',
      phone: '',
      goal: '',
      level: 'Начинающий'
    }
  } catch (error) {
    formStatus.value =
      'Не удалось отправить заявку. Проверьте Telegram настройки и повторите попытку.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <header class="header">
    <div class="container nav">
      <a class="brand" href="#hero">CoachFit</a>
      <nav class="menu">
        <a href="#hero">Курс</a>
        <a href="#results">Результаты</a>
        <a href="#trust">Почему я</a>
        <a href="#quiz">Диагностика</a>
        <a href="#signup">Записаться</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <p class="eyebrow">Персональный тренинг в зале</p>
        <h1>Актуальный курс: Сильное тело за 12 недель</h1>
        <p class="lead">
          Индивидуальная программа, контроль техники и поддержка 24/7, чтобы вы вышли на новый
          уровень формы без травм и срывов.
        </p>
        <a class="button" href="#signup">Записаться на курс</a>
      </div>
    </section>

    <section id="results" class="section">
      <div class="container">
        <h2>Средние результаты клиентов</h2>
        <div class="cards">
          <article class="card">
            <p class="metric">-6.5 кг</p>
            <p>в среднем за 8 недель</p>
          </article>
          <article class="card">
            <p class="metric">+32%</p>
            <p>рост силовых показателей</p>
          </article>
          <article class="card">
            <p class="metric">94%</p>
            <p>доходят до цели по плану</p>
          </article>
        </div>
      </div>
    </section>

    <section id="trust" class="section">
      <div class="container">
        <div class="trust-header">
          <p class="eyebrow">Ваш результат и безопасность - приоритет</p>
          <h2>Почему мне доверяют клиенты</h2>
        </div>
        <div class="trust-grid">
          <article class="trust-card">
            <div class="trust-icon" aria-hidden="true">01</div>
            <h3>Профессиональная квалификация</h3>
            <p>
              Сертифицированный тренер с практическим опытом более 7 лет и специализацией по
              безопасной технике.
            </p>
          </article>
          <article class="trust-card">
            <div class="trust-icon" aria-hidden="true">02</div>
            <h3>Персональный план под вашу жизнь</h3>
            <p>
              Подбираю тренировки и питание под график, уровень подготовки и ограничения по
              здоровью.
            </p>
          </article>
          <article class="trust-card">
            <div class="trust-icon" aria-hidden="true">03</div>
            <h3>Измеримый и прозрачный прогресс</h3>
            <p>
              Еженедельные отчеты по параметрам тела, нагрузке и самочувствию с корректировкой
              программы.
            </p>
          </article>
        </div>
        <aside class="trust-proof">
          <p class="proof-title">Социальное доказательство</p>
          <p>
            Более <strong>120 клиентов</strong> уже улучшили форму со мной: от снижения веса до
            уверенного возвращения в тренировки после долгого перерыва.
          </p>
        </aside>
      </div>
    </section>

    <section id="quiz" class="section">
      <div class="container">
        <h2>Бесплатная диагностика</h2>
        <p class="lead">
          Ответьте на 4 вопроса, и я подберу вам стартовый план. Заявка отправляется в Telegram.
        </p>
        <form class="quiz" @submit.prevent="onSubmit">
          <label>
            Имя
            <input v-model.trim="formData.name" type="text" required placeholder="Ваше имя" />
          </label>
          <label>
            Телефон
            <input v-model.trim="formData.phone" type="tel" required placeholder="+7 (___) ___-__-__" />
          </label>
          <label>
            Ваша цель
            <textarea
              v-model.trim="formData.goal"
              required
              rows="3"
              placeholder="Похудеть, набрать мышечную массу, улучшить выносливость..."
            ></textarea>
          </label>
          <label>
            Текущий уровень
            <select v-model="formData.level">
              <option>Начинающий</option>
              <option>Средний</option>
              <option>Продвинутый</option>
            </select>
          </label>
          <button class="button" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Отправка...' : 'Получить диагностику' }}
          </button>
          <p v-if="formStatus" class="status">{{ formStatus }}</p>
        </form>
      </div>
    </section>

    <section id="signup" class="section">
      <div class="container cta">
        <h2>Записаться</h2>
        <p>Оставьте заявку на бесплатную консультацию, и мы вместе составим маршрут к вашей цели.</p>
        <a class="button" href="#quiz">Оставить заявку</a>
      </div>
    </section>
  </main>
</template>
