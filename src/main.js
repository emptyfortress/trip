import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/support.css'
import '@/assets/css/main.scss'
import VueStickto from 'vue-stickto'

Vue.config.productionTip = false
Vue.use(VueStickto)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
