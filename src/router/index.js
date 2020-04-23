import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scroll from '../views/Scroll.vue'
import Sticky from '../views/Sticky.vue'
import Dash1 from '../views/Dash1.vue'
import Dash2 from '../views/Dash2.vue'
import Create from '../views/Create.vue'
import Delo from '../views/Delo.vue'
import Buttons from '../components/Buttons.vue'

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
		path: '/btn',
		name: 'btn',
		component: Buttons
	},
	{
		path: '/create',
		name: 'create',
		component: Create
	},
	{
		path: '/delo',
		name: 'delo',
		component: Delo
	},
	{
		path: '/dash2',
		name: 'dash2',
		component: Dash2
	}
]

const router = new VueRouter({
	// mode: 'history',
	routes
})

export default router
