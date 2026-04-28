<script setup>
import { RouterLink } from 'vue-router'
import appWork01 from '../assets/app-work-01.png'
import appWork1 from '../assets/app-work-1.png'
import appWork2 from '../assets/app-work-2.png'
import appWork3 from '../assets/app-work-3.png'
import appWork4 from '../assets/app-work-4.png'

const workflowImages = [appWork01, appWork1, appWork2, appWork3, appWork4]
</script>

<template>
  <main>
    <section class="section">
      <div class="container app-work-page">
        <p class="eyebrow">Система сопровождения</p>
        <h1>КАК УСТРОЕНА РАБОТА ЧЕРЕЗ ПРИЛОЖЕНИЕ</h1>
        <div class="app-work-grid">
          <article v-for="(image, index) in workflowImages" :key="index" class="app-work-card">
            <img class="app-work-image" :src="image" :alt="`Скрин приложения ${index + 1}`" />
          </article>
        </div>
        <div class="app-work-actions">
          <RouterLink to="/" class="button">На главную</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#quiz' }" class="button button-cta"
            >Пройти диагностику</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
