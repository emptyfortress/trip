import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/support.css'
import '@/assets/css/main.scss'
import VueStickto from 'vue-stickto'
import VueDragDrop from 'vue-drag-drop'
import LiquorTree from 'liquor-tree'
import SvgTransition from 'vue-svg-transition'
import { Timeline } from 'vue2vis'
// import 'vue2vis/dist/vue2vis.css'

Vue.use(VueStickto)
Vue.use(VueDragDrop)
Vue.use(LiquorTree)
Vue.use(SvgTransition)
Vue.config.productionTip = false

Vue.component('timeline', Timeline)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
