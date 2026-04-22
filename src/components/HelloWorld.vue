<script setup>
import { ref } from 'vue'
import heroPhotoPlaceholder from '../assets/vue.svg'
import aboutPhotoPlaceholder from '../assets/vite.svg'

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
      <a class="brand" href="#hero">Артюхов Дмитрий - Здоровый Организм</a>
      <nav class="menu">
        <a href="#signup">Все услуги</a>
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
        <div class="hero-layout">
          <div class="hero-content">
            <h1>Трансофрмация тела за 3 месяца</h1>
            <p class="hero-subtitle">Олимпийская система подготовки</p>
            <p class="hero-highlight">
              Системная работа с телом, тренировки и восстановление организма под контролем
              профессионального спортсмена и Участника Олимпйиских игр
            </p>
            <p class="lead">
              Персональное сопровождение в зале с фокусом на быстрый, безопасный и заметный
              результат.
            </p>
            <a class="button" href="#quiz">Пройти бесплатное тестирование</a>
            <div class="hero-note">
              <p>Большиство людей тренироуется, но не понимает что происходит с организмом.</p>
              <p>Отсюда - отсутствие результата, усталость и откаты.</p>
              <p>
                Моя задача - выстриоть ситсему, в которой тело начинает работать правильно.
              </p>
            </div>
          </div>
          <div class="hero-photo-wrap">
            <img
              class="hero-photo"
              :src="heroPhotoPlaceholder"
              alt="Тренер в костюме с фруктом в руках"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="about-layout">
          <article class="about-card">
            <p class="eyebrow">Обо мне</p>
            <p class="about-role">Профессиональный спортсмен</p>
            <ul class="about-list">
              <li>Мастер спорта международного класса</li>
              <li>Участник олимпийских игр</li>
              <li>Чемпион россии и европы</li>
              <li>Член сборной команды России</li>
            </ul>
            <p class="about-text">
              Я работаю с людьми которые хотят не просто "тренироваться", а понять свой организм,
              выстроить систему, которая дает результат: энергию, форму и здоровье
            </p>
            <p class="about-text about-text-accent">
              Опыт профессиональнгоо спорта я перенес в работу с клиентами - чтобы результат был
              предсказуемым и контролируемым
            </p>
            <p class="about-text about-text-accent">Без догадок и эксперементов над организмом</p>
          </article>
          <div class="about-photo-wrap">
            <img
              class="about-photo"
              :src="aboutPhotoPlaceholder"
              alt="Профессиональный спортсмен с оголенным торсом и гантелей в руках"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="pain-solution" class="section">
      <div class="container">
        <article class="pain-card">
          <p class="pain-subtitle">С чем ко мне приходят:</p>
          <ul class="pain-list">
            <li>Нет энергии</li>
            <li>Вес не меняется или возвращается</li>
            <li>Постоянная усталовсть</li>
            <li>Тренировки есть, результата нет</li>
          </ul>
          <p class="pain-result">
            Я провожу <strong>БЕСПЛАТНЫЙ аудит</strong>, определяю причины и выстраиваю систему,
            которая дает результат
          </p>
        </article>
      </div>
    </section>

    <section id="healthy-organism" class="section">
      <div class="container">
        <article class="offer-card">
          <h2>Здоровый организм</h2>
          <p class="offer-subtitle">Комплексный чекап организма и стратегия восстановления</p>
          <p class="offer-lead">
            Это полное понимание состояния вашего организма и четкий план действий
          </p>
          <p class="offer-includes">Что входит:</p>
          <ul class="offer-list">
            <li>
              Бесплатный персональный чек-ап организма (60+ анализов) с расшифровкой от
              спортивного врача-эндокринолога рядом с вашим домом
            </li>
            <li>Индивидуальный тренинг-план с видеоконтролем техники</li>
            <li>
              Персональная нутрициология, интегрированная в ваш стиль жизни (рестораны,
              командировки, любимые продукты) без подсчета калорий
            </li>
            <li>
              Контроль динамики прогресса по фото, замерам и самочувствию - первый результат уже
              ЧЕРЕЗ 2 НЕДЕЛИ
            </li>
            <li>
              Глубокий анализ здоровья с подбором БАДов для ускорения метаболизма и рельефа тела
            </li>
          </ul>
          <a class="button offer-details-button" href="#services">Подробнее</a>
        </article>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <div class="services-head">
          <h2>ТРАНСФОРМАЦИЯ ТЕЛА ПОД КОНТРОЛЕМ ЧЕМПИОНА</h2>
          <p class="services-subtitle">
            Система работы на 3 месяца: диагностика -> стратегия -> сопровождение -> результат
          </p>
        </div>

        <div class="packages-grid">
          <article class="package-card">
            <p class="package-title">ОНЛАЙН ТРАНСФОРМАЦИЯ</p>
            <p class="package-for">Для тех, кто хочет результат из любого города</p>
            <ul>
              <li>Индивидуальная программа тренировок</li>
              <li>Сопровождение через приложение</li>
              <li>Контроль прогресса</li>
              <li>Разбор техники</li>
              <li>Медицинский чек-up</li>
              <li>Рекомендации по питанию и калориям</li>
            </ul>
            <p class="package-meta">Формат: Онлайн сопровождение 24/7</p>
            <p class="package-price">от 15 000 ₽ / мес</p>
            <a class="button" href="#signup">Записаться</a>
          </article>

          <article class="package-card">
            <p class="package-title">ОФЛАЙН ТРЕНИРОВКИ</p>
            <p class="package-for">Для тех, кто хочет максимум контроля и быстрый результат</p>
            <ul>
              <li>Персональные тренировки в зале</li>
              <li>Индивидуальная программа</li>
              <li>Контроль техники</li>
              <li>Коррекция питания</li>
              <li>Чек-up + эндокринолог</li>
            </ul>
            <p class="package-meta">Формат: 1 на 1 в зале</p>
            <p class="package-price">от 25 000 ₽ / мес</p>
            <a class="button" href="#signup">Записаться</a>
          </article>

          <article class="package-card">
            <p class="package-title">CHECK-UP + СТРАТЕГИЯ</p>
            <p class="package-for">Для тех, кто застрял и не понимает причину</p>
            <ul>
              <li>Медицинское обследование</li>
              <li>Заключение врача-эндокринолога</li>
              <li>Разбор тела и метаболизма</li>
              <li>План тренировок</li>
              <li>План питания</li>
            </ul>
            <p class="package-meta">Формат: Разовая диагностика</p>
            <p class="package-price">10 000 ₽</p>
            <a class="button" href="#quiz">Пройти диагностику</a>
          </article>

          <article class="package-card">
            <p class="package-title">КОНСУЛЬТАЦИЯ 60 МИН</p>
            <p class="package-for">Для быстрого разбора ситуации</p>
            <ul>
              <li>Анализ питания и тренировок</li>
              <li>Разбор ошибок</li>
              <li>Персональные рекомендации</li>
              <li>Четкий план действий</li>
            </ul>
            <p class="package-meta">Формат: Онлайн / офлайн</p>
            <p class="package-price">5 000 ₽</p>
            <a class="button" href="#signup">Записаться</a>
          </article>
        </div>

        <div class="services-offer">
          <p class="offer-line-top">Ты не покупаешь тренировки.</p>
          <p class="offer-line-main">
            Ты входишь в систему изменения тела под контролем профессионального спортсмена сборной
            России.
          </p>
        </div>

        <div class="services-columns">
          <article class="services-info-card">
            <h3>ЧТО ТЫ ПОЛУЧАЕШЬ</h3>
            <ul>
              <li>Диагностику твоего тела и реального состояния</li>
              <li>Персональную стратегию под твой организм</li>
              <li>Контроль питания и тренировок</li>
              <li>Системную работу, а не хаотичные попытки</li>
              <li>Результат, который можно удерживать</li>
            </ul>
          </article>

          <article class="services-info-card">
            <h3>КОМУ НЕ ПОДОЙДЕТ</h3>
            <ul>
              <li>Тем, кто ищет "быстро и без усилий"</li>
              <li>Тем, кто не готов соблюдать рекомендации</li>
              <li>Тем, кто хочет просто "попробовать"</li>
            </ul>
          </article>
        </div>

        <div class="services-cta">
          <p>
            Выбирай формат работы и оставляй заявку — я свяжусь с тобой лично и подберу
            оптимальный вариант.
          </p>
          <a class="button" href="#signup">ЗАПИСАТЬСЯ НА РАБОТУ</a>
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
