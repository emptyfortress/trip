import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true
	},
	getters: {
		drawer: state => { return state.drawer }
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		offDrawer (state) { state.drawer = false }
	},
	actions: {
	},
	modules: {
	}
})
