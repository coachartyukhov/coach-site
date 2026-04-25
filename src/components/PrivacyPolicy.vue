<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container nav">
      <a class="brand" href="/">Артюхов Дмитрий - Здоровый Организм</a>
      <nav class="menu">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Об авторе</RouterLink>
        <RouterLink to="/privacy-policy">Политика</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container privacy-page">
        <p class="eyebrow">Юридическая информация</p>
        <h1>Политика конфиденциальности</h1>
        <p class="lead">
          Это базовый шаблон текста политики конфиденциальности. Замените его на финальную
          юридическую редакцию перед публикацией.
        </p>
        <p>
          Сайт может запрашивать контактные данные, которые используются только для связи по вашей
          заявке и подбора персонального предложения.
        </p>
        <p>
          Используя сайт, вы подтверждаете согласие с обработкой персональных данных и использованием
          файлов cookie для корректной работы сайта и аналитики.
        </p>
        <RouterLink to="/" class="button">На главную</RouterLink>
      </div>
    </section>
  </main>
</template>
