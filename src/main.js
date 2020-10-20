import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ProfExp from './components/ProfExp/ProfExp.vue'
import Personal from './components/Personal/Personal.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/components/ProfExp', name: 'exp', component: ProfExp },
  { path: '/components/Personal', name: 'personal', component: Personal }
]

const router = new VueRouter({
  routes 
})

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
