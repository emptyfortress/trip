<template lang="pug">
.sticky(v-scroll="onScroll")
	.zag Вариант 2. Липкий заголовок таблицы
	v-col(:md="8" :sm="12").c
		v-expansion-panels(inset)
			v-expansion-panel
				v-expansion-panel-header Настройки
				v-expansion-panel-content
					v-row
						v-col
							v-switch(v-model="lazy" label="Ленивая подгрузка").mt-0
							v-switch(v-model="group" label="Группировка").mt-0
							v-switch(v-model="toolbar" label="Toolbar").mt-0
						v-col
							p Не все кнопки в тулбаре работают.
							p При выключенном тулбаре пагинация показывается внизу таблицы.
							p Группировка тоже не работает, а имитируется.

	br
	Toolbar(v-show="toolbar || selectedItems > 0" :smallFilter="smallFilter" :current="current" :group="group" @groupped="setGroup" :selected="selectedItems" @reset="smallFilter = null" @reset2="setNone" @edit="toEdit").test
	v-fade-transition
		.group-top(v-show="group")
			.inf Перетащите сюда заголовок колонки для группировки
	.d-flex
		v-slide-x-transition(mode="out-in")
			.group(v-show="group" )
				.test(:class="!toolbar ? 'top' : ''")
					h3 Группы
						span 8
					v-btn(icon @click="group = !group").clo
						v-icon mdi-close
					br
					tree(ref="tree" :data="list" :options="treeOptions" @node:selected="onNodeSelected").tree-group
		table.full
			thead
				tr(:class="{'toolbar' : toolbar}")
					th(v-if="!editMode").sm
						v-simple-checkbox(:value="all" @input="setAll" :indeterminate="indeterminate" v-ripple).check
					th(v-for="(item,index) in 5"
						@mouseover="showByIndex = index" @mouseout="showByIndex = null"
						:class="{'sorting' : sortByIndex === index}")
						v-icon(v-if="sortByIndex === index" :class="{'sortup' : up}").sort mdi-arrow-down
						span Заголовок
						v-icon(v-if="index === smallFilter" color="#8b0000").sort.ml-2 mdi-filter
						.over(v-show="showByIndex === index")
							v-tooltip(top)
								template(v-slot:activator="{ on, attrs }")
									v-btn(icon small @click="sort(index)" v-bind="attrs" v-on="on")
										v-icon(:class="{'sortup' : up}") mdi-arrow-down
								span Сортировка

							v-tooltip(top)
								template(v-slot:activator="{ on, attrs }")
									v-btn(icon small v-show="smallFilter === index" @click="smallFilter = null" v-bind="attrs" v-on="on")
										v-icon(color="#8B0000") mdi-filter-remove-outline
								span Сбросить фильтр

							v-tooltip(top)
								template(v-slot:activator="{ on, attrs }")
									v-btn(icon small @click="filterByIndex = index" v-bind="attrs" v-on="on")
										v-icon mdi-filter-outline
								span Фильтр

							v-tooltip(top)
								template(v-slot:activator="{ on, attrs }")
									v-btn(icon small @click="filterByIndex = null" v-bind="attrs" v-on="on")
										v-icon mdi-eye-off
								span Скрыть

						v-slide-y-transition
							v-card.quick.elevation-3(v-show="filterByIndex === index")
								v-text-field(autofocus clearable :key="index")
								v-card-actions
									v-btn(text color="primary" @click="filterByIndex = null; smallFilter = null") Отмена
									v-spacer
									v-btn(text color="primary" @click="filterByIndex = null; smallFilter = index") Применить
			tbody(is="transition-group" name="list")
				tr( v-for="(item, i) in items" :key="item.id").ro
					td(v-ripple v-if="!editMode").sm
						v-simple-checkbox(v-model="item.selected" color="primary").check
					td.px-3
						.line(:contenteditable="editMode ? true : false") Это просто строка
					td.rel
						.block(:class="{edit : editMode}")
							.editor(v-show="editMode && showByRow === i" @click="showByRow = i")
								v-btn(icon dark v-for="icon in icons" :key="icon")
									v-icon {{ icon.name }}

							.edit(v-if="editMode && showByRow === i" contenteditable v-click-outside="hide") {{ item.text }}

							.view(v-else @click="showByRow = i") {{ item.text }}

					td( @click="showByFio = i")
						.fi(v-if="editMode && showByFio === i")
							input(:value="item.fio")
							v-btn(icon)
								i.icon-book
						.fio(v-else) {{ item.fio }}
					td
					td.rel
						span данные
						span(v-if="editMode").action
							v-btn(icon @click="addRow(i)")
								v-icon mdi-plus-circle-outline
							v-btn(icon @click="deleteRow(i)")
								v-icon mdi-trash-can-outline

	br
	br
	v-alert(v-show="showPage && !toolbar" transition="scale-transition").up
		.pagescroll
			.total
				|Всего:
				span 448
			v-slider(v-model="slider" :thumb-size="32" thumb-label)
				template(v-slot:thumb-label="{ value }")
					span {{ value }}%

	//- editModecontext-menu(ref="ctxMenu")
	//- 	myMenu(@showToolbar="toolbar = !toolbar" @showGroup="group = !group")
</template>

<script>
import list from '@/list.js'
import mixin from '@/mixin.js'
import Toolbar from '@/components/Toolbar'
import myMenu from '@/components/ContextMenu'
import contextMenu from 'vue-context-menu'
import ClickOutside from 'vue-click-outside'
import uniqueid from 'lodash.uniqueid'

export default {
	data () {
		return {
			lazy: false,
			group: false,
			items: [],
			all: false,
			offsetTop: 0,
			num1: 50,
			list: list,
			toolbar: true,
			smallFilter: null,
			showByIndex: null,
			showByRow: null,
			showByFio: null,
			filterByIndex: null,
			sortByIndex: null,
			up: false,
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false
			},
			slider: 0,
			icons: [
				{ name: 'mdi-format-text' },
				{ name: 'mdi-format-size' },
				{ name: 'mdi-format-bold' },
				{ name: 'mdi-format-italic' },
				{ name: 'mdi-format-list-bulleted' },
				{ name: 'mdi-format-list-numbered' },
				{ name: 'mdi-format-align-left' },
				{ name: 'mdi-format-align-center' },
				{ name: 'mdi-format-align-right' }
			]
		}
	},
	directives: {
		ClickOutside
	},
	created () {
		for (let i = 0; i < 5; i++) {
			this.items.push({
				id: uniqueid('i'),
				selected: false,
				text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus.',
				fio: 'Орлов П.С.'
			})
		}
	},
	components: {
		Toolbar,
		myMenu,
		contextMenu
	},
	methods: {
		hide () {
			this.showByRow = null
		},
		addRow (e) {
			this.items.splice(e + 1, 0, { selected: false, id: uniqueid('i'), text: 'this is text' })
		},
		deleteRow (e) {
			this.items.splice(e, 1)
		},
		toEdit () {
			this.$store.commit('toggleEdit')
		},
		setNone () {
			this.items.map(item => { item.selected = false })
		},
		setAll () {
			if (this.all) {
				this.items.map((item) => { item.selected = false })
				this.all = false
			} else {
				this.items.map((item) => { item.selected = true })
				this.all = true
			}
		},
		sort (e) {
			this.up = !this.up
			this.sortByIndex = e
		},
		setGroup () {
			this.group = !this.group
		},
		onScroll (e) {
			this.offsetTop = window.pageYOffset
		},
		topage (e) {
			this.$vuetify.goTo(e * this.windHeight)
		}
	},
	computed: {
		id () {
			return `input-${this.uid}` // e.g. input-1
		},
		editMode () {
			return this.$store.getters.editMode
		},
		selectedItems () {
			return this.items.filter(item => item.selected).length
		},
		indeterminate () {
			let sel = this.items.reduce((total, item) => {
				if (item.selected === true) {
					return total + 1
				} else return total
			}, 0)
			if (sel > 0 && !this.all) {
				return true
			} else return false
		},
		showPage () {
			return this.$store.getters.showPage
		},
		windHeight () {
			return document.documentElement.clientHeight - 114
		},
		pages () {
			return Math.ceil((this.num * 48) / this.windHeight)
		},
		current () {
			return Math.floor(
				this.pages / ((this.num * 48 - this.windHeight) / this.offsetTop)
			)
		}
	},
	mixins: [mixin]
}
</script>

<style scoped lang="scss">
@import "@/assets/css/colors.scss";

.sticky {
	margin: 0 1rem;
}
.full {
	width: 100%;
	background: #fff;
	transition: all 0.3s ease;
	tr {
		background: #fff;
		&.toolbar th {
			top: 45px;
		}
	}
	th {
		cursor: pointer;
		background: #dadada;
		height: 2.5rem;
		position: sticky;
		z-index: 200;
		top: 0;
		font-weight: 400;
		font-size: 0.75rem;
		color: #555;
		text-align: left;
		padding: 0 1rem;
		&.sorting {
			font-weight: 600;
			color: #000;
		}
	}
	.ro {
		height: 3rem;
		position: relative;
		&:hover {
			background: #eee;
		}
		td {
			border-bottom: 1px solid #eee;
			padding: 6px 1rem;
			/* position: relative; */
		}
	}
}
.v-text-field {
	font-weight: 500;
	padding-top: 0;
}
.group {
	width: 250px;
	margin-right: 0.5rem;
	.test {
		position: sticky;
		top: 46px;
		background: white;
		box-shadow: 0 1px 3px #00000055;
		&.top {
			top: 0;
		}
		.tree-group {
			height: 500px;
			overflow: auto;
		}
	}
}

h3 {
	cursor: pointer;
	padding: 1rem;
	span {
		margin-left: 1rem;
		font-size: 0.9rem;
		background: $info;
		color: white;
		padding: 0.1rem 0.5rem;
		border-radius: 3rem;
	}
	.v-icon {
		margin-left: 2rem;
		vertical-align: bottom;
		color: $info;
	}
}
.clo {
	position: absolute;
	top: 0.6rem;
	right: 0.6rem;
}
.treenode {
	width: 100%;
}
.tree-children {
	padding-left: -24px !important;
}
.strong {
	font-weight: bold;
	color: darkred;
}
.page {
	font-size: 1rem;
	font-weight: 400;
	background: #e4e4e0;
	border-bottom: 1px solid #fff;
	padding: 10px 25px;
	border-radius: 5px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
.pag {
	font-size: 0.8rem;
	border: 1px solid #ccc;
	margin-right: 3px;
	padding: 4px 5px;
	cursor: pointer;
	border-radius: 2px;
	&:first-child {
		margin-left: 1rem;
	}
	&.active {
		background: #fff;
		font-size: 1rem;
		padding: 5px 7px;
		border-color: #aaa;
	}
}
.pagescroll {
	width: 400px;
	font-size: 1rem;
	font-weight: 400;
	background: #e4e4e0;
	border-bottom: 1px solid #fff;
	/* padding: 10px 25px; */
	padding-left: 7rem;
	padding-right: 1rem;
	border-radius: 5px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
.quick {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	min-width: 200px;
	padding: 0 1rem;
	padding-top: 1rem;
}
.over {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: right;
	padding-right: .5rem;
	background: rgba(255, 255, 255, 0.6);
	line-height: 41px;
	i {
		color: #999;
		transition: .2s ease all;
		&:hover {
			color: black;
		}
	}
}
.sortup {
	transform: rotate(180deg);
}
.sort {
	font-size: 14px;
	margin-right: 5px;
}
.up {
	position: fixed;
	bottom: 1rem;
	left: 50%;
	background: transparent;
}
.group-top {
	margin: 5px 0;
	width: 100%;
	display: block;
	padding: 1rem;
	border: 1px dashed $info;
	&:hover {
		background: #D9F9FF;
	}
}
.inf {
	font-style: italic;
	color: #666;
	font-size: .9rem;
}
.c {
	margin: 0 auto;
}
.switch {
	display: flex;
	justify-content: space-between;
}
.total {
	font-size: .8rem;
	text-align: center;
	color: #777;
	margin-bottom: -.6rem;
	span {
		margin-left: .5rem;
		color: #000;
	}
}
.sm {
	text-align: center;
}
span.action {
	display: none;
	background: #eee;
	width: 100px;
	height: 100%;
	position: absolute;
	right: 0px;
	top: 0;
	text-align: right;
	padding-right: 1rem;
	line-height: 45px;
	font-size: 1.2rem;
	cursor: pointer;
}
tr:hover span.action {
	display: block;
}
.block {
		.editor {
			display: block;
			width: 100%;
			min-width: 350px;
			height: 34px;
			background: #666;
			position: absolute;
			top: -36px;
			left: 0;
			z-index: 300;
			border-radius:  6px 6px 0 0;
			pointer-events: none;
			pointer-events: none;
		}
	.edit {
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100%;
		padding: 10px 1rem;
		box-shadow: 0 2px 6px rgba(0,0,0, .2);
		border: 1px solid #666;
	}
}
.fi {
	input {
	}
	.icon-book {
		font-size: 1.0rem;
		margin-left: -7px;
	}
}
/* animation  */
.list-enter-active, .list-leave-active {
	transition: all .3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(-60px);
}

</style>
