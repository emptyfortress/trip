<template lang="pug">
div
	v-data-table(v-if="renderComponent" :headers="headers" :items="dataItems" :search="search" hide-default-header  hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab
		template(v-slot:header="{ props: {headers}}")
			thead(@contextmenu.prevent="$refs.ctxMenu.open")
				tr(v-stickto).stick
					th.zero
						div(v-show="group.length && grouping").group
							h3(@click="") Группы
								span {{par}}
							v-list
								v-list-item-group( color="primary" )
									v-list-item(v-for="(node, i) in nodes" :key="i")
										v-list-item-content
											v-list-item-title {{ node.title }}
							//- tree(ref="tree" :data="list" :options="treeOptions" @node:selected="").tree-group
							//- 	span(slot-scope="{node}").treenode
							//- 		span.text {{ node.text }}
							//- 		span.num {{ node.data.number }}
							v-btn(icon @click="reset").clo
								v-icon mdi-close

					th(v-show="selectMode")
						v-checkbox(v-model="selectAll" primary hide-details @click.native="toggleAll" :indeterminate="check").checkhd
					th(v-for="header in headers" v-if="header.active" @click="filtrr")
						drag(:transfer-data="header").drag1
							span {{ header.text }}
		template(v-slot:body="{ items }")
			tbody
				tr(v-show="filters").filter
					td.zero
					td(v-show="selectMode")

					td(v-for="header in headers" :key="header.id" v-if="header.active"  :class="form.filter[header.id] ? 'active' : ''").shad
						v-text-field(placeholder="Фильтр" solo flat hide-details v-model="form.filter[header.id]" clearable)

				tr(v-for="item in items" :class="item.unread ? 'unread' : ''").sortableRow
					td(@click="item.unread = !item.unread" @contextmenu.prevent="$refs.readMenu.open").px-0.drag.zero
					td(v-show="selectMode")
						v-checkbox(v-model="item.selected" :value="item.selected" :id="item.id.toString()" @click.prevent="item.selected = !item.selected" @click="doNothing").sm
					td(v-for="header in headers" :key="header.id" v-if="header.active" :class="header.class" @click="clickRow(item, $event)" )
						span {{ item[header.value] }}

	context-menu(ref="readMenu")
		li(@click="readAll")
			i.icon-read
			span Прочитать все

	context-menu(ref="ctxMenu")
		li(@click="reset")
			i.icon-empty
			span Reset
		li(@click="readAll")
			i.icon-read
			span Прочитать все
		li
			i.icon-refresh
			span Обновить
		li(@click="toggleSelect")
			i.icon-select
			span Выбрать
		li(@click="toggleFilters")
			i.icon-filter
			span Фильтры
		li(@click="toggleGroup")
			i.icon-multi
			span Группировка
		li(@click="toggleTableSearch")
			i.icon-search-1
			span Поиск в таблице
		//- hr
		li(@click="toggleDialog")
			i.icon-setup
			span Настройки
			i.icon-next.next
		li(@click="toggleGroup")
			i.icon-xls
			i.icon-next.next
			span Экспорт в .xsl

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
// import data from '@/data.js'
import contextMenu from 'vue-context-menu'

export default {
	props: [ 'filter', 'headers', 'items', 'group' ],
	data () {
		return {
			selectAll: false,
			smallTable: false,
			renderComponent: true,
			list: [],
			list2: [],
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false,
				filter: {
					emptyText: 'Aaaaa! Где мои папки?!!',
					plainList: 0
				}
			},
			form: {
				filter: []
			},
			filters: false,
			per: 30,
			nodes: [
				{ title: 'Орлов' },
				{ title: 'Петров' },
				{ title: 'Воробьева' },
				{ title: 'Грачев' },
				{ title: 'Синицын' },
				{ title: 'Гусева' }
			]
		}
	},
	computed: {
		par () {
			return this.list2.length ? this.list.length * this.list2.length : this.list.length
		},
		dataItems () {
			if (this.smallTable) {
				return this.items.filter(item => item.id < 6)
			} else {
				return this.items
			}
		},
		search () {
			return this.filter
		},
		selectMode () {
			return this.$store.getters.selectMode
		},
		grouping () {
			return this.$store.getters.grouping
		},
		selectedItems () {
			return this.items.filter(item => item.selected)
		},
		check () {
			if (this.selectedItems.length === 0 || this.selectedItems.length === this.items.length) {
				return false
			} else return true
		}
	},
	methods: {
		filtrr () {
			this.smallTable = !this.smallTable
		},
		readAll () {
			this.items.map(item => { item.unread = false })
		},
		toggleDialog () {
			this.$store.commit('toggleDialog')
		},
		toggleTableSearch () {
			this.$store.commit('toggleTableSearch')
		},
		doNothing (evt) {
			evt.stopPropagation()
		},
		// reset () {
		// 	const myheaders = [
		// 		{ id: 0, class: '', value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Название' },
		// 		{ id: 1, class: 'text-no-wrap', value: 'executor', width: '400', active: true, sortable: true, align: 'start', text: 'Исполнитель' },
		// 		{ id: 2, class: '', value: 'author', width: '160', active: true, sortable: true, align: 'start', text: 'Автор' },
		// 		{ id: 3, class: 'text-no-wrap', value: 'deadline', width: '150', active: true, sortable: true, align: 'start', text: 'Срок' },
		// 		{ id: 4, class: 'text-no-wrap', value: 'created', width: '150', active: true, sortable: true, align: 'start', text: 'Дата' },
		// 		{ id: 5, class: 'text-right', value: 'files', width: '90', active: true, sortable: true, align: 'end', text: 'Файлы' },
		// 		{ id: 6, class: 'text-no-wrap', value: 'status', width: '130', active: true, sortable: true, align: 'start', text: 'Статус' }
		// 	]
		// 	this.group = []
		// 	this.list = []
		// 	this.list2 = []
		// 	this.filter = ''
		// 	this.$store.commit('setHeaders', myheaders)
		// 	this.renderComponent = false
		// 	this.$nextTick(() => {
		// 		this.renderComponent = true
		// 	})
		// },
		reset () {
			const myheaders = [
				{ id: 0, class: '', value: 'title', width: '', active: true, sortable: true, align: 'start', text: 'Название' },
				{ id: 1, class: 'text-no-wrap', value: 'executor', width: '400', active: true, sortable: true, align: 'start', text: 'Исполнитель' },
				{ id: 2, class: '', value: 'author', width: '160', active: true, sortable: true, align: 'start', text: 'Автор' },
				{ id: 3, class: 'text-no-wrap', value: 'deadline', width: '150', active: true, sortable: true, align: 'start', text: 'Срок' },
				{ id: 4, class: 'text-no-wrap', value: 'created', width: '150', active: true, sortable: true, align: 'start', text: 'Дата' },
				{ id: 5, class: 'text-right', value: 'files', width: '90', active: true, sortable: true, align: 'end', text: 'Файлы' },
				{ id: 6, class: 'text-no-wrap', value: 'status', width: '130', active: true, sortable: true, align: 'start', text: 'Статус' }
			]
			this.$store.commit('setGrouping', false)
			this.group = []
			this.list = []
			this.list2 = []
			this.filter = ''
			this.filters = false
			this.$store.commit('setHeaders', myheaders)
		},
		toggleSelect () {
			this.$store.commit('toggleSelectMode')
		},
		toggleFilters () {
			this.filters = !this.filters
		},
		toggleGroup () {
			this.$store.commit('toggleGrouping')
		},
		toggleAll () {
			if (this.selectAll) {
				return this.items.map(item => { item.selected = true })
			} else {
				return this.items.map(item => { item.selected = false })
			}
		},
		clickRow (e, i) {
			if (i.shiftKey && !this.selectMode) {
				this.$store.commit('setSelectMode', true)
				e.selected = true
			} else if (i.shiftKey && this.selectMode) {
				this.$store.commit('setSelectMode', false)
			} else {
				this.$router.push('/cards/' + e.id.toString())
			}
		}
	},
	components: {
		SlickList,
		SlickItem,
		contextMenu
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.stick {
	background: #eee;
}
.stick.stickto-auto-generated-sticker {
	background: $info;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
	th {
		color: white;
	}
}

.drag1 {
	display: inline;
	padding: .2rem .5rem;
}
.drag {
	width: 9px;
	/* border-left: 9px solid transparent; */
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAIUlEQVQYV2Ns2vj/f50/IyMDAwMDmPj///9/RhAAcWAAAN0pCAS0Z2yqAAAAAElFTkSuQmCC) repeat;
}
.v-data-table td.zero, .v-data-table th.zero {
	padding: 0;
	position: relative;
}
.unread {
	td {
		font-weight: bold;
		color: darken($accent, 30%);
		.v-btn .v-btn__content .v-icon { color: darken($accent, 30%); }
		&.drag {
			background: darken($accent, 30%);
			border-bottom: 1px solid #eee !important;
		}
	}
}
.checkhd {
	margin-top: -.3rem;
}
.filter td.shad {
	border: 1px solid #fff;
	padding: 0 .4rem;
	&.active {
		background: $yellow;
	}
}
.v-input.sm {
	margin-top: 0;
	padding-top: .6rem;
}
.sortableRow {
	user-select: none;
}
.sticky {
	position: absolute;
	top: 0;
	left: -260px;
	width: 250px;
	height: 50vh;
	/* background: #fff; */
	overflow: auto;
	z-index: 10;
}
.group {
	position: absolute;
	top: 0;
	left: -260px;
	width: 250px;
	height: 50vh;
	background: #fff;
	overflow: auto;
	/* z-index: 10; */
	margin-top: .6rem;
	border: 1px solid #ccc;
	h3 {
		padding: .5rem 1rem;
		cursor: pointer;
		font-size: 1.2rem;
		span {
			margin-left: 1rem;
			font-size: .9rem;
			background: $info;
			/* color: white; */
			padding: .1rem .5rem;
			border-radius: 3rem;
		}
		.v-icon {
			margin-left: 2rem;
			vertical-align: bottom;
			color: $info;
		}
	}
}
.clo {
	position: absolute;
	top: .6rem;
	right: .6rem;
}
.treenode {
	width: 100%;
}
.tree-node.selected {
	background: $yellow !important;
}
</style>
