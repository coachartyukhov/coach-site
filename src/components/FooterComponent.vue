<template>

    <section class="section footer-section">
      <div class="container footer-links">
        <p class="quiz-note">
          Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.
        </p>
        <RouterLink to="/privacy-policy" class="footer-policy-link">Политика конфиденциальности</RouterLink>
      </div>
    </section>

</template>

<style scoped>
.footer-section {
  padding-top: 1rem;
}
.section {
  
}
.quiz-note {
  margin: 0;
  color: var(--text-muted);
}
.container {
  width: min(var(--container), calc(100% - 3rem));
  margin: 0 auto;
  padding: 8px 24px;
}
.footer-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(185, 150, 68, 0.2);
  padding-top: 1rem;
}
</style>