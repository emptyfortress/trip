import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		headers: [
			{ id: 0, class: '', value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Название' },
			{ id: 1, class: 'text-no-wrap', value: 'executor', width: '400', active: true, sortable: true, align: 'start', text: 'Исполнитель' },
			{ id: 2, class: '', value: 'author', width: '160', active: true, sortable: true, align: 'start', text: 'Автор' },
			{ id: 3, class: 'text-no-wrap', value: 'deadline', width: '150', active: true, sortable: true, align: 'start', text: 'Срок' },
			{ id: 4, class: 'text-no-wrap', value: 'created', width: '150', active: true, sortable: true, align: 'start', text: 'Дата' },
			{ id: 5, class: 'text-right', value: 'files', width: '90', active: true, sortable: true, align: 'end', text: 'Файлы' },
			{ id: 6, class: 'text-no-wrap', value: 'status', width: '130', active: true, sortable: true, align: 'start', text: 'Статус' }
		],
		tripheaders: [
			{ id: 0, class: '', value: 'to', width: '', active: true, sortable: true, align: 'start', text: 'Куда' },
			{ id: 2, class: '', value: 'org', width: '', active: true, sortable: true, align: 'start', text: 'Организация' },
			{ id: 3, class: '', value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Цель поездки' },
			{ id: 1, class: '', value: 'dates', width: '', active: true, sortable: true, align: 'start', text: 'Дата' },
			{ id: 4, class: '', value: 'transport', width: '', active: true, sortable: true, align: 'start', text: 'Транспорт' },
			{ id: 5, class: '', value: 'hotel', width: '', active: true, sortable: true, align: 'start', text: 'Проживание' },
			{ id: 6, class: '', value: 'budget', width: '', active: true, sortable: true, align: 'start', text: 'Бюджет' },
			{ id: 7, class: '', value: 'approve', width: '', active: true, sortable: true, align: 'start', text: 'Согласовано' },
			{ id: 8, class: '', value: 'report', width: '', active: true, sortable: true, align: 'start', text: 'Отчет' }

		],
		mini: false,
		grouping: false,
		selectMode: false,
		searchMode: false,
		dialog: false
	},
	getters: {
		drawer: state => { return state.drawer },
		headers: state => { return state.headers },
		tripheaders: state => { return state.tripheaders },
		mini: state => { return state.mini },
		grouping: state => { return state.grouping },
		selectMode: state => { return state.selectMode },
		searchMode: state => { return state.searchMode },
		dialog: state => { return state.dialog }
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		toggleGrouping (state) { state.grouping = !state.grouping },
		toggleDialog (state) { state.dialog = !state.dialog },
		setGrouping (state, payload) { state.grouping = payload },
		setSelectMode (state, payload) { state.selectMode = payload },
		toggleSelectMode (state) { state.selectMode = !state.selectMode },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		offDrawer (state) { state.drawer = false },
		setHeaders (state, payload) { state.headers = payload },
		setMini (state, payload) { state.mini = payload }
	},
	actions: {},
	modules: {}
})
