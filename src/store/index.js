import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		headers: [
			{ value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Название' },
			{ value: 'executor', width: '400', active: true, sortable: true, align: 'start', text: 'Исполнитель' },
			{ value: 'author', width: '160', active: true, sortable: true, align: 'start', text: 'Автор' },
			{ value: 'deadline', width: '150', active: true, sortable: true, align: 'start', text: 'Срок' },
			{ value: 'created', width: '150', active: true, sortable: true, align: 'start', text: 'Дата' },
			{ value: 'files', width: '90', active: true, sortable: true, align: 'end', text: 'Файлы' },
			{ value: 'status', width: '130', active: true, sortable: true, align: 'start', text: 'Статус' }
		]
	},
	getters: {
		drawer: state => { return state.drawer },
		headers: state => { return state.headers }
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		offDrawer (state) { state.drawer = false },
		setHeaders (state, payload) { state.headers = payload }
	},
	actions: {
	},
	modules: {
	}
})
