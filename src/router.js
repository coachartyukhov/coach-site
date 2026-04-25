import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AboutAuthor from './components/AboutAuthor.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import AppWorkflow from './components/AppWorkflow.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutAuthor },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/app-workflow', component: AppWorkflow }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
