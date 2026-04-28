<template>
  <header class="header">
    <div class="container nav">

      <!-- TOP ROW -->
      <div class="top-row">
        <a class="brand" href="/">Артюхов Дмитрий — Здоровый Организм</a>

        <button class="burger-menu" @click="openMenu">
          ☰
        </button>
      </div>

      <!-- DESKTOP MENU -->
      <nav class="menu desktop">
        <a href="#products">Все услуги</a>
        <a href="#hero">Курс</a>
        <a href="#cases">Результаты</a>
        <RouterLink to="/about">Об авторе</RouterLink>
        <a href="#quiz">Диагностика</a>
      </nav>

    </div>

    <!-- BACKDROP -->
    <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>

    <!-- MOBILE MENU -->
    <nav v-if="isMenuOpen" class="menu mobile">
      <button class="close-btn" @click="closeMenu">✕</button>

      <a href="#products" @click="closeMenu">Все услуги</a>
      <a href="#hero" @click="closeMenu">Курс</a>
      <a href="#cases" @click="closeMenu">Результаты</a>
      <RouterLink to="/about" @click="closeMenu">Об авторе</RouterLink>
      <a href="#quiz" @click="closeMenu">Диагностика</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

let scrollY = 0

const openMenu = () => {
  scrollY = window.scrollY

  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'

  isMenuOpen.value = true
}

const closeMenu = () => {
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''

  window.scrollTo(0, scrollY)

  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(185, 150, 68, 0.14);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  padding: 1.25rem 0;
}

/* ===================== */
/* TOP ROW (brand + burger)
/* ===================== */
.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: clamp(0.8rem, 1.5vw, 1.25rem) 24px;
}

.brand {
  color: #b99644;
  text-transform: uppercase;

  /* 🔥 адаптивный размер */
  font-size: clamp(0.7rem, 1.2vw, 0.9rem);

  white-space: nowrap;
}

/* ===================== */
/* DESKTOP MENU
/* ===================== */
.desktop {
  display: flex;
  align-items: center;

  /* 🔥 плавное сжатие расстояний */
  gap: clamp(0.3rem, 1vw, 1rem);

  margin-top: 0.8rem;

  flex-wrap: nowrap;
  white-space: nowrap;
}

.menu a {
  color: #d4d4d4;
  text-decoration: none;

  /* 🔥 адаптивные паддинги */
  padding: clamp(0.15rem, 0.5vw, 0.3rem)
           clamp(0.25rem, 0.9vw, 0.5rem);

  border-radius: 8px;

  transition: all 0.2s ease;
  white-space: nowrap;
}

.menu a:hover {
  background: rgba(199, 164, 75, 0.18);
  color: #fff;
}

/* ===================== */
/* BURGER
/* ===================== */
.burger-menu {
  display: none;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #b99644;
  cursor: pointer;
}

/* ===================== */
/* OVERLAY
/* ===================== */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 15;
}

/* ===================== */
/* MOBILE MENU
/* ===================== */
.mobile {
  position: fixed;
  top: 0;
  right: 0;

  width: 85%;
  max-width: 320px;
  height: 100vh;

  background: rgba(5, 5, 5, 0.98);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  padding: 2rem;

  z-index: 20;

  border-left: 1px solid rgba(185, 150, 68, 0.2);
}

.mobile a {
  text-align: center;
  font-size: 1rem;
}

/* close button */
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;

  background: none;
  border: none;

  font-size: 1.5rem;
  color: #b99644;

  cursor: pointer;
}

/* ===================== */
/* BREAKPOINTS
/* ===================== */
@media (max-width: 768px) {
  .desktop {
    display: none;
  }

  .burger-menu {
    display: block;
  }
}
</style>