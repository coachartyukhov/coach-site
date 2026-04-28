<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import heroAuthorPhoto from '../assets/hero-author-photo.png'
import aboutBgPhoto from '../assets/about-bg-no-bg.png'
import caseTemplatePhoto from '../assets/case-template.png'
import case1Photo from '../assets/case-1.png'
import case2Photo from '../assets/case-2.png'
import case3Photo from '../assets/case-3.png'
import case4Photo from '../assets/case-4.png'
import case5Photo from '../assets/case-5.png'
import case6Photo from '../assets/case-6.png'
import case7Photo from '../assets/case-7.png'
import case8Photo from '../assets/case-8.png'
import case9Photo from '../assets/case-9.png'
import case10Photo from '../assets/case-10.png'
import case11Photo from '../assets/case-11.png'
import maleStartPhoto from '../assets/male-start-points.png'
import maleTargetPhoto from '../assets/male-target-points.png'
import femaleStartPhoto from '../assets/female-start-points.png'
import femaleTargetPhoto from '../assets/female-target-points.png'

const cases = [
  {
    id: 1,
    name: 'Алексей',
    age: 42,
    beforePhotos: [case3Photo],
    afterPhotos: [],
    beforeLabel: '',
    achievements: [
      '-15кг жира',
      '-17см в талии',
      '+7кг мышечной массы',
      'Убрали живот, повысили энергию и продуктивность',
      'Пожали 100 кг от груди за 3 месяца'
    ]
  },
  {
    id: 2,
    name: 'Диана',
    age: 32,
    beforePhotos: [case1Photo],
    afterPhotos: [case2Photo],
    achievements: [
      'Сделали эстетичное тело',
      'Улучшение показателей здоровья до 100%',
      'Повышение выносливости'
    ]
  },
  {
    id: 3,
    name: 'Виктория',
    age: 39,
    beforePhotos: [case4Photo],
    afterPhotos: [case5Photo],
    achievements: [
      'Тотальная рекомпозиция за 12 месяцев',
      'Привили любовь к правильному питанию',
      'Улучшили качество тела и кожи',
      'Стабилизировали гормональный фон'
    ]
  },
  {
    id: 4,
    name: 'Даниил',
    age: 22,
    beforePhotos: [case11Photo],
    afterPhotos: [case10Photo],
    achievements: [
      '+6кг мышц за 2 месяца',
      'Увеличили силовые в 2 раза',
      'Развили выносливость и подняли уровень энергии для работы'
    ]
  },
  {
    id: 5,
    name: 'Виктория',
    age: 36,
    beforePhotos: [case7Photo],
    afterPhotos: [case6Photo],
    achievements: [
      '-18 см в талии за 4 месяца',
      'Перестроили пищевое поведение',
      'Тренировались в домашних условиях',
      'Полностью убрала живот при полном графике'
    ]
  },
  {
    id: 6,
    name: 'Евгений',
    age: 39,
    beforePhotos: [caseTemplatePhoto],
    afterPhotos: [caseTemplatePhoto],
    achievements: [
      'Снизили процент жира',
      'Убрали отеки',
      'Нормализовали восстановление через сон и режим нагрузок'
    ]
  },
  {
    id: 7,
    name: 'Анна',
    age: 44,
    beforePhotos: [case8Photo],
    afterPhotos: [case9Photo],
    achievements: ['-10см в талии', '-5кг жирового компонента']
  },
  {
    id: 8,
    name: 'Роман',
    age: 30,
    beforePhotos: [caseTemplatePhoto],
    afterPhotos: [caseTemplatePhoto],
    achievements: ['Минус объем в талии', 'Плюс выносливость и тонус всего тела']
  },
  {
    id: 9,
    name: 'Артем',
    age: 37,
    beforePhotos: [caseTemplatePhoto],
    afterPhotos: [caseTemplatePhoto],
    achievements: ['Собрали стратегию питания в командировках', 'Стабилизировали вес без откатов']
  },
  {
    id: 10,
    name: 'Владислав',
    age: 29,
    beforePhotos: [caseTemplatePhoto],
    afterPhotos: [caseTemplatePhoto],
    achievements: ['Перевели хаотичные тренировки в систему', 'Сделали прогресс визуально заметным']
  }
]

const currentCaseIndex = ref(0)
const currentCase = computed(() => cases[currentCaseIndex.value])

const showPrevCase = () => {
  currentCaseIndex.value = (currentCaseIndex.value - 1 + cases.length) % cases.length
}

const showNextCase = () => {
  currentCaseIndex.value = (currentCaseIndex.value + 1) % cases.length
}

const touchStartX = ref(0)
const onCaseTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0]?.clientX ?? 0
}
const onCaseTouchEnd = (event) => {
  const endX = event.changedTouches[0]?.clientX ?? 0
  const delta = endX - touchStartX.value
  if (Math.abs(delta) < 45) return
  if (delta < 0) showNextCase()
  else showPrevCase()
}

const maleStartOptions = ['40%+', '23-35%', '15-20%', '8-10%']
const maleTargetOptions = ['5%', '6-10%', '12-14%', '15%+']
const femaleStartOptions = ['24-26%', '27-29%', '36-40%', '50%+']
const femaleTargetOptions = ['10-12%', '15-17%', '21-23%', '24-26%']

const goalOptions = [
  'Избавиться от жира',
  'Нарастить мышечную массу',
  'Похудеть не важно как, главное цифры на весах',
  'Увеличить силовые показатели (БОЛЬШЕ пожать/присесть/подтянуться)',
  'Избавиться от боли в суставах',
  'Заняться растяжкой, улучшить мобильность организма',
  'Реабилитация после травм/операций',
  'Подготовиться к соревнованиям/триатлону/боевые искусства',
  'Нужна помощь в похудении к соревнованиям с сохранением кондиций организма'
]

const concernOptions = [
  'Лишний вес',
  'Отсутствие энергии',
  'Плохое самочувствие',
  'Низкое качество тела',
  'Слабый иммунитет',
  'Нет времени',
  'Нет мотивации',
  'Болят суставы',
  'Был неудачный опыт'
]
const timelineOptions = ['1-2 месяца', '3-6 месяцев', 'Не важно, главное достичь']

const quizForm = ref({
  gender: '',
  startPoint: '',
  targetPoint: '',
  goals: [],
  concerns: [],
  timeline: '',
  contact: '',
  selectedProduct: '',
  consent: false
})

const toggleMultiSelect = (fieldName, option) => {
  const selected = quizForm.value[fieldName]
  if (selected.includes(option)) {
    quizForm.value[fieldName] = selected.filter((item) => item !== option)
    return
  }
  quizForm.value[fieldName] = [...selected, option]
}

const resetQuiz = () => {
  quizForm.value = {
    gender: '',
    startPoint: '',
    targetPoint: '',
    goals: [],
    concerns: [],
    timeline: '',
    contact: '',
    selectedProduct: '',
    consent: false
  }
  quizStep.value = 1
}

const quizStep = ref(1)
const totalQuizSteps = 8

const startOptions = computed(() =>
  quizForm.value.gender === 'female' ? femaleStartOptions : maleStartOptions
)
const targetOptions = computed(() =>
  quizForm.value.gender === 'female' ? femaleTargetOptions : maleTargetOptions
)

const isCurrentStepValid = computed(() => {
  switch (quizStep.value) {
    case 1:
      return Boolean(quizForm.value.gender)
    case 2:
      return Boolean(quizForm.value.startPoint)
    case 3:
      return Boolean(quizForm.value.targetPoint)
    case 4:
      return quizForm.value.goals.length > 0
    case 5:
      return quizForm.value.concerns.length > 0
    case 6:
      return Boolean(quizForm.value.timeline)
    case 7:
      return quizForm.value.contact.trim().length > 0
    case 8:
      return quizForm.value.consent
    default:
      return false
  }
})

const isSubmitting = ref(false)

const goNextStep = async () => {
  if (!isCurrentStepValid.value) return

  if (quizStep.value < totalQuizSteps) {
    quizStep.value += 1
    return
  }
  if(isSubmitting.value) return
  isSubmitting.value = true

    try {
  const response = await fetch('/api/send-to-telegram', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizForm.value)
  })

  // Сначала проверяем, есть ли тело ответа
  const text = await response.text()
  console.log('Raw response:', text)  // Посмотрите в консоли, что приходит

  let result
  try {
    result = JSON.parse(text)
  } catch (e) {
    console.error('Не удалось распарсить JSON:', text)
    throw new Error('Сервер вернул некорректный ответ')
  }

  if (response.ok && result.success) {
    quizStep.value = totalQuizSteps + 1
  } else {
    alert('Ошибка: ' + (result.error || 'Попробуйте позже'))
  }
} catch (error) {
  console.error('Network error: ', error)
  alert('Не удалось отправить форму. Попробуйте позже или проверьте соединение')
} finally {
  isSubmitting.value = false
}
}

const goPrevStep = () => {
  if (quizStep.value > 1 && quizStep.value <= totalQuizSteps) {
    quizStep.value -= 1
  }
}

const chooseProduct = (productName) => {
  quizForm.value.selectedProduct = productName
}

const openServiceInfo = ref('')
const toggleServiceInfo = (serviceKey) => {
  openServiceInfo.value = openServiceInfo.value === serviceKey ? '' : serviceKey
}

const fatLossGoalKeywords = ['Избавиться от жира', 'Похудеть не важно как, главное цифры на весах']
const muscleGoalKeyword = 'Нарастить мышечную массу'

const parsePercentValue = (label) => {
  const normalized = label.replace('%', '').trim()
  if (normalized.includes('+')) {
    return Number.parseFloat(normalized.replace('+', ''))
  }
  if (normalized.includes('-')) {
    const [from, to] = normalized.split('-').map((part) => Number.parseFloat(part))
    return (from + to) / 2
  }
  return Number.parseFloat(normalized)
}

const personalPlan = computed(() => {
  const start = parsePercentValue(quizForm.value.startPoint || '0')
  const target = parsePercentValue(quizForm.value.targetPoint || '0')
  const delta = start - target

  const wantsFatLoss = quizForm.value.goals.some((goal) => fatLossGoalKeywords.includes(goal))
  const wantsMuscleGain = quizForm.value.goals.includes(muscleGoalKeyword)

  let focus = 'рекомпозиция тела'
  if (delta > 0.7 || wantsFatLoss) focus = 'снижение жира'
  if (delta < -0.7 && wantsMuscleGain) focus = 'набор мышечной массы'

  const title =
    focus === 'снижение жира'
      ? 'Твоя цель: снизить процент жира и сохранить мышцы'
      : focus === 'набор мышечной массы'
        ? 'Твоя цель: нарастить мышечную массу без перегруза'
        : 'Твоя цель: улучшить качество тела через рекомпозицию'

  const recommendation =
    focus === 'снижение жира'
      ? 'Оптимальный путь: умеренный дефицит калорий + силовые тренировки 3-4 раза в неделю + контроль восстановления.'
      : focus === 'набор мышечной массы'
        ? 'Оптимальный путь: небольшой профицит калорий + прогрессирующие силовые тренировки + достаточное восстановление.'
        : 'Оптимальный путь: настройка питания под вашу активность + силовые тренировки + стабильный режим сна и восстановления.'

  const firstResultText =
    focus === 'набор мышечной массы'
      ? 'Первый результат по набору мышц обычно заметен через 3-4 недели при соблюдении плана.'
      : focus === 'снижение жира'
        ? 'Первый результат по снижению жира обычно заметен через 3-4 недели при соблюдении плана.'
        : 'Первый заметный результат обычно появляется через 3-4 недели при соблюдении плана.'

  const timelineText = quizForm.value.timeline
    ? `Реалистичный горизонт под ваш запрос: ${quizForm.value.timeline}.`
    : 'Реалистичный горизонт уточним после финальной проверки анкеты.'

  return {
    title,
    recommendation,
    firstResultText,
    timelineText,
    metrics: `Старт: ${quizForm.value.startPoint || '—'} -> Цель: ${quizForm.value.targetPoint || '—'}.`
  }



})
</script>

<template>
  <header class="header">
    <div class="container nav">
      <a class="brand" href="#hero">Артюхов Дмитрий - Здоровый Организм</a>
      <nav class="menu">
        <a href="#products">Все услуги</a>
        <a href="#hero">Курс</a>
        <a href="#cases">Результаты</a>
        <RouterLink to="/about">Об авторе</RouterLink>
        <a href="#quiz">Диагностика</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <h1>Подтянутое тело с мышцами за 90 дней</h1>
            <p class="hero-highlight">
              Персональная работа с питанием, тренировками и восстановлением под руководством
              Учсатника Олимпийских игр, Магистра КГУФКСТ, Мастера Спорта Международного Класса с
              фокусом на безопасный и заметный результат
            </p>
            <p class="lead">
              Пройди диагностику и получи план под свою цель.
            </p>
            <a class="button button-cta" href="#quiz">Пройти диагностику</a>
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
              :src="heroAuthorPhoto"
              alt="Тренер в костюме с фруктом в руках"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="pain-solution" class="section">
      <div class="container">
        <article class="pain-card">
          <p class="pain-subtitle">Ты узнаешь себя?</p>
          <ul class="pain-list">
            <li>Нет энергии</li>
            <li>Вес не меняется или возвращается</li>
            <li>Постоянная усталовсть</li>
            <li>Тренировки есть, результата нет</li>
            <li>Среывы на сладкое</li>
            <li>Боли / дискомофт</li>
          </ul>
          <p class="pain-result">
            Я провожу <strong>БЕСПЛАТНЫЙ аудит</strong>, определяю причины и выстраиваю систему,
            которая дает результат
          </p>
          <a class="button pain-cta-button" href="#quiz">Хочу разобраться с телом</a>
        </article>
      </div>
    </section>

    <section id="problem" class="section">
      <div class="container">
        <article class="problem-card">
          <p class="eyebrow">ПРОБЛЕМА НЕ В ТЕБЕ</p>
          <h2>Ты просто не выстроил систему работы с телом</h2>
          <div class="problem-points">
            <p>1. Хаотичные тренировки</p>
            <p>2. Питание без контроля</p>
            <p>3. Отсутсвтие системы</p>
          </div>
          <p class="problem-note">Поэтому результат либо временный, либо его нет.</p>
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
            <li>Вебинары по работе с питанием и пищевыми привычками</li>
            <li>Лайфаки по закаливанию тела</li>
            <li>Видео с техникой выполнения упражнений</li>
          </ul>
          <a class="button offer-details-button" href="#products">Подробнее</a>
        </article>
      </div>
    </section>

    <section id="cases" class="section">
      <div class="container">
        <div class="cases-head">
          <p class="eyebrow">Реальные трансформации</p>
          <h2>Кейсы клиентов</h2>
          <p class="lead">10 шаблонов кейсов в формате: фото до, фото после, имя, возраст и результат.</p>
        </div>

        <div class="cases-slider">
          <button class="case-nav" type="button" @click="showPrevCase" aria-label="Предыдущий отзыв">
            <img width="20" height="20" src="../assets/icons/left-arrow.png" alt="left-arrow-cases"/>
          </button>

          <article class="case-card" @touchstart="onCaseTouchStart" @touchend="onCaseTouchEnd">
            <div class="case-photos" :class="{ 'single-photo': !currentCase.afterPhotos.length }">
              <figure class="case-photo-block">
                <img class="case-photo" :src="currentCase.beforePhotos[0]" :alt="`Кейс ${currentCase.name}: до`" />
                <figcaption v-if="currentCase.beforeLabel ?? true">{{ currentCase.beforeLabel || 'До' }}</figcaption>
              </figure>
              <figure v-if="currentCase.afterPhotos.length" class="case-photo-block">
                <img class="case-photo" :src="currentCase.afterPhotos[0]" :alt="`Кейс ${currentCase.name}: после`" />
                <figcaption>После</figcaption>
              </figure>
            </div>

            <div class="case-content">
              <p class="case-person">{{ currentCase.name }}, {{ currentCase.age }} лет</p>
              <ul class="case-results-list">
                <li v-for="(item, idx) in currentCase.achievements" :key="`${currentCase.id}-${idx}`">
                  <span>{{ item }}</span>
                  <span class="case-check">✓</span>
                </li>
              </ul>
              <p class="case-counter">{{ currentCaseIndex + 1 }} / {{ cases.length }}</p>
            </div>
          </article>

          <button class="case-nav" type="button" @click="showNextCase" aria-label="Следующий отзыв">
            <img width="20" height="20" src="../assets/icons/right-arrow.png" alt="right-arrow-cases"/>
          </button>
        </div>
      </div>
    </section>

    <section id="workflow" class="section">
      <div class="container">
        <div class="workflow-head">
          <p class="eyebrow">Пошаговый процесс</p>
          <h2>Как проходит работа</h2>
        </div>

        <div class="workflow-steps">
          <article class="workflow-step">
            <div class="workflow-step-number">01</div>
            <p>Проходите короткий опросник по состоянию вашего здоровья.</p>
          </article>
          <div class="workflow-arrow" aria-hidden="true">→</div>

          <article class="workflow-step">
            <div class="workflow-step-number">02</div>
            <p>Я провожу вам аудит длительностью 30-60 минут.</p>
          </article>
          <div class="workflow-arrow" aria-hidden="true">→</div>

          <article class="workflow-step">
            <div class="workflow-step-number">03</div>
            <p>Сдаете необходимые анализы в клинике рядом с вашим домом.</p>
          </article>
          <div class="workflow-arrow" aria-hidden="true">→</div>

          <article class="workflow-step">
            <div class="workflow-step-number">04</div>
            <p>Получаете заключение врача-эндокринолога.</p>
          </article>
          <div class="workflow-arrow" aria-hidden="true">→</div>

          <article class="workflow-step">
            <div class="workflow-step-number">05</div>
            <p>Начинаем работу.</p>
          </article>
        </div>

      </div>
    </section>

    <section id="products" class="section">
      <div class="container">
        <div class="services-head services-head-centered">
          <h2>УСЛУГИ</h2>
          <p class="services-subtitle">Выберите формат работы, который подходит вашей цели.</p>
        </div>

        <article class="package-card package-flagship">
          <p class="package-title">Флагман</p>
          <h3>Здоровый орагнизм ОНЛАЙН</h3>
          <p class="package-subhead">Управление физическим ресурсом под персональным контролем</p>
          <p class="package-for">
            Формат индивидуальной работы для тех, кому важно держать организм в рабочем состоянии при
            высокой нагрузке.
          </p>
          <p class="package-for">
            Это не про «похудеть» или «начать тренироваться». Это про систему, в которой тело
            стабильно работает: даёт энергию, выдерживает стресс и не выходит из строя.
          </p>
          <p class="package-for">
            Я беру на себя управление ключевыми процессами: нагрузка, питание, восстановление,
            показатели организма.
          </p>
          <div class="package-top-actions">
            <RouterLink to="/app-workflow" class="button-border button-secondary-border service-info-button"
              >Работа через приложение</RouterLink
            >
            <div class="service-info-hover" :class="{ 'service-info-open': openServiceInfo === 'online' }">
              <button
                type="button"
                class="button-border button-secondary-border service-info-button"
                @click="toggleServiceInfo('online')"
              >
                Что входит
              </button>
              <div class="service-info-popover">
                <p>Включено:</p>
                <ul>
                  <li>Комплексная оценка состояния</li>
                  <li>Назначение и контроль анализов</li>
                  <li>Работа с врачом-эндокринологом</li>
                  <li>Индивидуальная стратегия питания</li>
                  <li>Персональные тренировки</li>
                  <li>Контроль питания (включая формат по фото)</li>
                  <li>Регулярные корректировки</li>
                  <li>Прямая связь</li>
                </ul>
                <p>Как строится работа:</p>
                <p>Все решения принимаются на основе данных и динамики, а не ощущений.</p>
                <p>Нагрузка и питание адаптируются под твой график, а не наоборот.</p>
                <p>Результат:</p>
                <ul>
                  <li>Стабильный уровень энергии</li>
                  <li>Контроль веса и состава тела</li>
                  <li>Предсказуемое состояние организма</li>
                  <li>Снижение рисков перегрузки и срывов</li>
                </ul>
                <p>Формат: Индивидуальное сопровождение онлайн</p>
                <p>Условия: Работаю с ограниченным количеством клиентов. Перед началом — согласование.</p>
              </div>
            </div>
          </div>
          <div class="package-footer">
            <p class="package-meta">Стоимость зависит от задачи и формата работы</p>
            <div class="package-actions">
              <a class="button button-cta" href="#quiz" @click="chooseProduct('Здоровый орагнизм ОНЛАЙН')"
                >Пройти диагностику</a
              >
            </div>
          </div>
        </article>

        <div class="packages-grid products-secondary">
          <article class="package-card">
            <p class="package-title">Здоровый организм ОФЛАЙН</p>
            <p class="package-subhead">Персональная работа с полным контролем</p>
            <p class="package-for">
              Формат для тех, кому важно передать управление процессом специалисту и не тратить
              время на самостоятельные решения.
            </p>
            <p class="package-for">
              Тренировочный процесс, нагрузка и прогресс находятся под полным контролем.
            </p>
            <div class="service-info-hover" :class="{ 'service-info-open': openServiceInfo === 'offline' }">
              <button
                type="button"
                class="button button-secondary service-info-button"
                @click="toggleServiceInfo('offline')"
              >
                Что входит
              </button>
              <div class="service-info-popover">
                <ul>
                  <li>Индивидуальные тренировки</li>
                  <li>Контроль техники и нагрузки</li>
                  <li>Адаптация под текущий ресурс</li>
                  <li>Интеграция питания и восстановления</li>
                  <li>Работа с показателями организма</li>
                </ul>
                <p>Подход:</p>
                <p>Минимум лишних действий — только то, что даёт результат.</p>
                <p>Формат: Личная работа</p>
                <p>Условия: Ограниченное количество мест</p>
              </div>
            </div>
            <div class="package-footer">
              <p class="package-meta">Стоимость зависит от задачи и формата работы</p>
              <a class="button" href="#quiz" @click="chooseProduct('Здоровый организм ОФЛАЙН')"
                >Пройти тестирование</a
              >
            </div>
          </article>
          <article class="package-card">
            <p class="package-title">Чекап + стретегия</p>
            <p class="package-for">
              Разбор текущего состояния организма с формированием чёткой стратегии.
            </p>
            <p class="package-for">
              Подходит, если нужно быстро понять: в каком состоянии ты находишься и какие действия
              дадут результат без потери времени.
            </p>
            <div class="service-info-hover" :class="{ 'service-info-open': openServiceInfo === 'checkup' }">
              <button
                type="button"
                class="button button-secondary service-info-button"
                @click="toggleServiceInfo('checkup')"
              >
                Что входит
              </button>
              <div class="service-info-popover">
                <ul>
                  <li>Подбор и контроль анализов</li>
                  <li>Интерпретация показателей</li>
                  <li>Заключение врача-эндокринолога</li>
                  <li>Рекомендации по питанию</li>
                  <li>Стратегия нагрузок</li>
                  <li>Пошаговый план действий</li>
                </ul>
                <p>Результат:</p>
                <p>Ты получаешь структурированную систему: что происходит -> что делать -> какой будет результат</p>
              </div>
            </div>
            <div class="package-footer">
              <p class="package-meta">Формат: Онлайн</p>
              <p class="package-price">Стоимость: от 19.000р</p>
              <a class="button button-cta" href="#quiz" @click="chooseProduct('Чекап + стретегия')"
                >Пройти аудит</a
              >
            </div>
          </article>
          <article class="package-card">
            <p class="package-title">Консультация</p>
            <p class="package-for">
              Персональная сессия, на которой разбирается текущая ситуация и принимаются решения.
            </p>
            <p class="package-for">
              Без общих рекомендаций — только конкретные действия с учётом твоих целей и ресурса.
            </p>
            <div class="service-info-hover" :class="{ 'service-info-open': openServiceInfo === 'consult' }">
              <button
                type="button"
                class="button button-secondary service-info-button"
                @click="toggleServiceInfo('consult')"
              >
                Подходит если
              </button>
              <div class="service-info-popover">
                <ul>
                  <li>нет результата при текущих действиях</li>
                  <li>нужно быстро скорректировать стратегию</li>
                  <li>требуется экспертная оценка</li>
                </ul>
                <p>Результат:</p>
                <ul>
                  <li>где теряется результат</li>
                  <li>какие действия неэффективны</li>
                  <li>что нужно изменить</li>
                </ul>
                <p>Формат: Онлайн</p>
                <p>Длительность: 60-90 минут</p>
              </div>
            </div>
            <div class="package-footer">
              <p class="package-meta">Формат: Онлайн</p>
              <p class="package-price">Стоимость: 6.000Р</p>
              <a class="button button-cta" href="#quiz" @click="chooseProduct('Консультация')">Записаться</a>
            </div>
          </article>
        </div>

        <div class="services-columns">
          <article class="services-info-card">
            <h3>Что ты получаешь</h3>
            <ul>
              <li>Диагностику твоего тела и реального состояния</li>
              <li>Персональную стратегию под твой организм</li>
              <li>Контроль питания и тренировок</li>
              <li>Системную работу, а не хаотичные попытки</li>
              <li>Результат, который можно удерживать</li>
            </ul>
          </article>

          <article class="services-info-card">
            <h3>Кому не подойдет</h3>
            <ul>
              <li>Тем, кто ищет "быстро и без усилий"</li>
              <li>Тем, кто не готов соблюдать рекомендации</li>
              <li>Тем, кто хочет просто "попробовать"</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="about-layout about-layout-single">
          <article class="about-card about-card-merged">
            <img
              class="about-bg-photo"
              :src="aboutBgPhoto"
              alt="Профессиональный спортсмен с тортом"
            />
            <div class="about-content-inline">
              <p class="eyebrow">ОБО МНЕ</p>
              <p class="about-role">Профессиональный спортсмен и наставник</p>
              <ul class="about-list">
                <li>Магистр КГУФКСТ</li>
                <li>Мастер спорта международного класса</li>
                <li>Участник олимпийских игр</li>
                <li>Чемпион россии и европы</li>
                <li>Член сборной команды России</li>
              </ul>
            </div>
            <p class="about-bottom-note">
              Я помогаю выстроить систему, в которой питание, тренировки и восстановление работают на
              ваш устойчивый результат.
            </p>
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
              Высшее образование по специализации «Тренер», магистерская степень по системе
              подготовки спортсменов.
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
            Более <strong>65 клиентов</strong> уже улучшили форму со мной: от снижения веса до
            уверенного возвращения в тренировки после долгого перерыва.
          </p>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container services-cta">
        <h2>Если ты хочешь реально зименить тело - начни с диагностики</h2>
      </div>
    </section>

    <section id="quiz" class="section">
      <div class="container">
        <h2>Бесплатная диагностика</h2>
        <p class="lead">
          Ответьте на 10 вопросов и получите план трансформации + рекомендации под Вашу цель.
        </p>

        <form class="diagnostic-form" @submit.prevent="goNextStep">
          <p v-if="quizStep <= totalQuizSteps" class="quiz-progress">
            Шаг {{ quizStep }} из {{ totalQuizSteps }}
          </p>

          <article v-if="quizStep <= totalQuizSteps" class="quiz-card">
            <p v-if="quizStep === 1" class="quiz-title">1. Пол</p>
            <p v-else-if="quizStep === 2" class="quiz-title">
              2. Выбери максимально похожую форму - это важно для расчета
            </p>
            <p v-else-if="quizStep === 3" class="quiz-title">3. Какого результата делаешь достичь</p>
            <p v-else-if="quizStep === 4" class="quiz-title">4. Что для Вас сейчас в приоритете?</p>
            <p v-else-if="quizStep === 5" class="quiz-title">5. Что беспокоит больше всего?</p>
            <p v-else-if="quizStep === 6" class="quiz-title">6. За какой срок хочешь увидеть резульатат</p>
            <p v-else-if="quizStep === 7" class="quiz-title">
              7. Готовлю для Вас персональный план и рекомендации. Куда отправить?
            </p>
            <p v-else class="quiz-title">10. Даю согласие на обработку персональных данных</p>

            <div v-if="quizStep === 1" class="quiz-options">
              <label class="quiz-option">
                <input v-model="quizForm.gender" type="radio" value="male" name="gender" />
                <span>Мужской</span>
              </label>
              <label class="quiz-option">
                <input v-model="quizForm.gender" type="radio" value="female" name="gender" />
                <span>Женский</span>
              </label>
            </div>

            <div v-else-if="quizStep === 2" class="quiz-options">
              <div class="photo-slot">
                <img
                  v-if="quizForm.gender === 'male'"
                  class="quiz-reference-photo"
                  :src="maleStartPhoto"
                  alt="Мужчины: варианты начальной точки по проценту жира"
                />
                <img
                  v-else-if="quizForm.gender === 'female'"
                  class="quiz-reference-photo"
                  :src="femaleStartPhoto"
                  alt="Женщины: варианты начальной точки по проценту жира"
                />
                <span v-else>Место для фото</span>
              </div>
              <label v-for="option in startOptions" :key="option" class="quiz-option">
                <input v-model="quizForm.startPoint" type="radio" name="start-point" :value="option" />
                <span>{{ option }}</span>
              </label>
            </div>

            <div v-else-if="quizStep === 3" class="quiz-options">
              <div class="photo-slot">
                <img
                  v-if="quizForm.gender === 'male'"
                  class="quiz-reference-photo"
                  :src="maleTargetPhoto"
                  alt="Мужчины: варианты целевой точки по проценту жира"
                />
                <img
                  v-else-if="quizForm.gender === 'female'"
                  class="quiz-reference-photo"
                  :src="femaleTargetPhoto"
                  alt="Женщины: варианты целевой точки по проценту жира"
                />
                <span v-else>Место для фото</span>
              </div>
              <label v-for="option in targetOptions" :key="option" class="quiz-option">
                <input v-model="quizForm.targetPoint" type="radio" name="target-point" :value="option" />
                <span>{{ option }}</span>
              </label>
            </div>

            <div v-else-if="quizStep === 4" class="quiz-options quiz-options-multi">
              <label v-for="option in goalOptions" :key="option" class="quiz-option">
                <input
                  type="checkbox"
                  :checked="quizForm.goals.includes(option)"
                  @change="toggleMultiSelect('goals', option)"
                />
                <span>{{ option }}</span>
              </label>
            </div>

            <div v-else-if="quizStep === 5" class="quiz-options quiz-options-multi">
              <label v-for="option in concernOptions" :key="option" class="quiz-option">
                <input
                  type="checkbox"
                  :checked="quizForm.concerns.includes(option)"
                  @change="toggleMultiSelect('concerns', option)"
                />
                <span>{{ option }}</span>
              </label>
            </div>

            <div v-else-if="quizStep === 6" class="quiz-options">
              <label v-for="option in timelineOptions" :key="option" class="quiz-option">
                <input v-model="quizForm.timeline" type="radio" name="timeline" :value="option" />
                <span>{{ option }}</span>
              </label>
            </div>

            <div v-else-if="quizStep === 7" class="quiz-options">
              <p class="quiz-note">Оставьте номер/ник для связи и в какой мессенджер прислать файл?</p>
              <input v-model.trim="quizForm.contact" type="text" placeholder="@nickname / +7 / Telegram..." />
            </div>

            <div v-else class="quiz-options">
              <label class="quiz-option">
                <input v-model="quizForm.consent" type="checkbox" />
                <span>Согласен(а) на обработку персональных данных</span>
              </label>
            </div>

            <div class="quiz-actions">
              <button
                v-if="quizStep > 1"
                type="button"
                class="button button-secondary"
                @click="goPrevStep"
              >
                Назад
              </button>
              <button type="submit" class="button" :disabled="!isCurrentStepValid">
                {{ quizStep === totalQuizSteps ? 'Получить план' : 'Далее' }}
              </button>
            </div>
          </article>

          <article v-else class="quiz-card quiz-finish">
            <p class="quiz-title">Опросник заполнен</p>
            <p class="quiz-note">
              Смотрю твои результаты и понимаю, как довести до результата. Ниже твои индивидуальные
              рекомендации, остальное пришлю в личку.
            </p>
            <div class="quiz-plan">
              <p class="quiz-plan-title">{{ personalPlan.title }}</p>
              <p class="quiz-plan-text">{{ personalPlan.metrics }}</p>
              <p class="quiz-plan-text">{{ personalPlan.recommendation }}</p>
              <p class="quiz-plan-text">{{ personalPlan.firstResultText }}</p>
              <p class="quiz-plan-text">{{ personalPlan.timelineText }}</p>
            </div>
            <p v-if="quizForm.selectedProduct" class="quiz-note">
              Выбранный продукт: <strong>{{ quizForm.selectedProduct }}</strong>
            </p>
            <button type="button" class="button" @click="resetQuiz">Заполнить еще раз</button>
          </article>
        </form>
      </div>
    </section>

    <section class="section footer-section">
      <div class="container footer-links">
        <p class="quiz-note">
          Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.
        </p>
        <RouterLink to="/privacy-policy" class="footer-policy-link">Политика конфиденциальности</RouterLink>
      </div>
    </section>

  </main>
</template>