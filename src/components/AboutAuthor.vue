<script setup>
import { RouterLink } from 'vue-router'
import aboutAuthor1 from '../assets/about-author-1.png'
import aboutAuthor2 from '../assets/about-author-2.png'
import aboutAuthor3 from '../assets/about-author-3.png'
import aboutAuthor4 from '../assets/about-author-4.png'
</script>

<template>
  <header class="header">
    <div class="container nav">
      <a class="brand" href="/">Артюхов Дмитрий - Здоровый Организм</a>
      <nav class="menu">
        <RouterLink to="/">Все услуги</RouterLink>
        <RouterLink to="/">Курс</RouterLink>
        <RouterLink to="/">Результаты</RouterLink>
        <RouterLink to="/about">Об авторе</RouterLink>
        <RouterLink to="/">Диагностика</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container about-author-page">
        <div class="about-author-hero">
          <p class="eyebrow">Личный бренд и репутация</p>
          <h1>Об авторе</h1>
          <p class="lead">
            Комбинирую опыт профессионального спорта, глубокой диагностики и системной тренерской
            практики, чтобы клиенты получали прогнозируемый результат без откатов.
          </p>
          <RouterLink to="/" class="button">На главную</RouterLink>
        </div>

        <article class="about-author-card">
          <img class="about-author-image" :src="aboutAuthor1" alt="Почему мне доверяют" />
        </article>

        <article class="about-author-card">
          <img class="about-author-image" :src="aboutAuthor2" alt="Выступления и конференции" />
        </article>

        <article class="about-author-card">
          <img class="about-author-image" :src="aboutAuthor3" alt="Наставничество и работа с командами" />
        </article>

        <article class="about-author-card">
          <img class="about-author-image" :src="aboutAuthor4" alt="Профессиональный спортсмен" />
        </article>
      </div>
    </section>
  </main>
</template>
