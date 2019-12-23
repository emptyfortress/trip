import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/support.css'
import '@/assets/css/main.scss'
import VueStickto from 'vue-stickto'
import VueDragDrop from 'vue-drag-drop'

Vue.config.productionTip = false
Vue.use(VueStickto)
Vue.use(VueDragDrop)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
