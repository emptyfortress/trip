<template lang="pug">
div
	v-data-table(:headers="headers" :items="items" :search="search" hide-default-header  hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab
		template(v-slot:header="{ props: {headers}}")
			thead(@contextmenu.prevent="$refs.ctxMenu.open")
				tr(v-stickto).stick
					th.zero
					th(v-show="selectMode")
						v-checkbox(v-model="selectAll" primary hide-details @click.native="toggleAll" :indeterminate="check").checkhd
					th(v-for="header in headers" v-if="header.active" )
						drag(:transfer-data="header").drag1
							span {{ header.text }}
		template(v-slot:body="{ items }")
			tbody
				tr(v-show="filters").filter
					td.zero
					td(v-show="selectMode")

					td(v-for="header in headers" :key="header.id" v-if="header.active"  :class="form.filter[header.id] ? 'active' : ''").shad
						v-text-field(placeholder="Фильтр" solo flat hide-details v-model="form.filter[header.id]" clearable)
						//- input( placeholder="Фильтр" v-model="form.filter[header.id]").filt

				tr(v-for="item in items" :class="item.unread ? 'unread' : ''").sortableRow
					td(@click="item.unread = !item.unread").px-0.drag.zero
					td(v-show="selectMode")
						v-checkbox(v-model="item.selected" :value="item.selected" :id="item.id.toString()" @click.prevent="item.selected = !item.selected" @click="doNothing").sm
					td(v-for="header in headers" :key="header.id" v-if="header.active" :class="header.class" @click="clickRow(props, $event)" )
						span {{ item[header.value] }}
		template(v-slot:no-data)
			v-alert(type="warning")
				span Сорян, ничего подходящего не нашел :(

	context-menu(ref="ctxMenu")
		li
			i.icon-read
			span Прочитать все
		li
			i.icon-refresh
			span Обновить
		li(@click="reset")
			i.icon-empty
			span Reset
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
			i.icon-adjust
			span Настройки
			i.icon-next.next
		li(@click="toggleGroup")
			i.icon-excel
			i.icon-next.next
			span Экспорт в .xsl

</template>

<script>
import data from '@/data.js'
import { SlickList, SlickItem } from 'vue-slicksort'
import contextMenu from 'vue-context-menu'

export default {
	data () {
		return {
			selectAll: false,
			items: data,
			form: {
				filter: []
			},
			filter0: '',
			filter1: '',
			filter2: '',
			filter3: '',
			filter4: '',
			filter5: '',
			filter6: '',
			filter7: '',
			filter8: '',
			search: '',
			// selectMode: false,
			group: [],
			filters: false,
			per: 30
		}
	},
	computed: {
		selectMode () {
			return this.$store.getters.selectMode
		},
		grouping () {
			return this.$store.getters.grouping
		},
		headers () {
			return this.$store.getters.headers
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
		filter (e) {
			switch (e) {
			case 0:
				return this.filter0
			default:
				return ''
			}
		},
		// setFilter (e) {
		// 	this.filter = ''
		// },
		toggleDialog () {
			this.$store.commit('toggleDialog')
		},
		doNothing (evt) {
			evt.stopPropagation()
		},
		reset () {
			this.selectAll = false
			this.$store.commit('setSelectMode', false)
			this.filters = false
			this.group = []
			this.$store.commit('setGrouping', false)
			this.$store.commit('setHeaders', this.headers)
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
				e.item.unread = false
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
	background: $yellow;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}

.drag1 {
	display: inline;
	padding: .2rem .5rem;
}
.drag {
	border-left: 9px solid transparent;
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
			border-left: 9px solid darken($accent, 30%);
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
