<template lang="pug">
div
	v-data-table(:headers="headers" :items="items" :search="search" hide-default-header  hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab
		template(v-slot:header="{ props: {headers}}")
			thead(@contextmenu.prevent="$refs.ctxMenu.open")
				tr(v-stickto).stick
					th.zero
					th(v-show="selectMode")
						v-checkbox(v-model="selectAll" primary hide-details @click.native="toggleAll" :indeterminate="check").checkhd
					th(v-for="header in headers" v-if="header.active")
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
			span Группы
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
import contextMenu from 'vue-context-menu'

export default {
	props: [ 'filter', 'headers', 'items' ],
	data () {
		return {
			selectAll: false,
			form: {
				filter: []
			},
			group: [],
			filters: false,
			per: 30
		}
	},
	computed: {
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
		readAll () {
			this.items.map(item => { item.unread = false })
		},
		toggleDialog () {
			this.$store.commit('toggleDialog')
		},
		doNothing (evt) {
			evt.stopPropagation()
		},
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
				// e.item.unread = false
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
</style>
