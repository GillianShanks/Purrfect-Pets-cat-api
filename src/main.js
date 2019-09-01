import Vue from 'vue'
import App from './App.vue'

import VueGoogleCharts from 'vue-google-charts';
import router from './router.js'

Vue.config.productionTip = false

export const eventBus = new Vue()
Vue.use(VueGoogleCharts)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
