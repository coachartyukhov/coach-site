<template>
  <header>
    <Header />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
  import Header from './components/HeaderComponent.vue'
  import Footer from './components/FooterComponent.vue'
</script>