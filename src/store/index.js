import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		add: false,
		preview: false,
		fullWindow: false,
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
		dialog: false,
		changing: false,
		lo: true,
		overlay: false,
		previewMode: 0,
		file: 0,
		chat: false
	},
	getters: {
		changing: state => { return state.changing },
		lo: state => { return state.lo },
		overlay: state => { return state.overlay },
		preview: state => { return state.preview },
		previewMode: state => { return state.previewMode },
		fullWindow: state => { return state.fullWindow },
		drawer: state => { return state.drawer },
		add: state => { return state.add },
		headers: state => { return state.headers },
		tripheaders: state => { return state.tripheaders },
		mini: state => { return state.mini },
		grouping: state => { return state.grouping },
		selectMode: state => { return state.selectMode },
		searchMode: state => { return state.searchMode },
		dialog: state => { return state.dialog },
		file: state => { return state.file },
		chat: state => { return state.chat }
	},
	mutations: {
		togglePreview (state) { state.preview = !state.preview },
		openPreview (state) { state.preview = true },
		setPreviewMode (state, payload) { state.previewMode = payload },
		toggleFullWindow (state) { state.fullWindow = !state.fullWindow },
		setFullWindow (state, payload) { state.fullWindow = payload },
		toggleDrawer (state) { state.drawer = !state.drawer },
		toggleAdd (state) { state.add = !state.add },
		toggleGrouping (state) { state.grouping = !state.grouping },
		toggleDialog (state) { state.dialog = !state.dialog },
		setGrouping (state, payload) { state.grouping = payload },
		setSelectMode (state, payload) { state.selectMode = payload },
		toggleSelectMode (state) { state.selectMode = !state.selectMode },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		offDrawer (state) { state.drawer = false },
		setHeaders (state, payload) { state.headers = payload },
		setMini (state, payload) { state.mini = payload },
		setChanging (state, payload) { state.changing = payload },
		setLo (state, payload) { state.lo = payload },
		setFile (state, payload) { state.file = payload },
		setOverlay (state, payload) { state.overlay = payload },
		toggleChat (state) { state.chat = !state.chat }
	},
	actions: {},
	modules: {}
})
