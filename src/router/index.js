import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scroll from '../views/Scroll.vue'
import Sticky from '../views/Sticky.vue'
import Dash1 from '../views/Dash1.vue'
import Dash2 from '../views/Dash2.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/scroll',
		name: 'scroll',
		component: Scroll
	},
	{
		path: '/sticky',
		name: 'sticky',
		component: Sticky
	},
	{
		path: '/dash1',
		name: 'dash1',
		component: Dash1
	},
	{
		path: '/dash2',
		name: 'dash2',
		component: Dash2
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
