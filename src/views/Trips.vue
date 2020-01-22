<template lang="pug">
.trips
	br
	br
	.zag Мои командировки
	.txt настройки доступны по контекстному меню на заголовок. Shift-click переводит в режим Select
	v-slide-y-transition(mode="out-in")
		.btn-panel(v-show="selectMode")
			v-btn(text @click="toggleSelect").selection
				i.icon-close
				span {{ selectedItems.length }}
			.text выбрано
			v-slide-x-transition
				.d-flex(v-if="selectedItems.length > 0")
					.to ⇒
					v-btn(text color='primary') В работу
					v-btn(text color='primary') Делегировать
	v-slide-y-transition(mode="out-in")
		drop(@dragover="over = true" @dragleave="over = false" @drop="handleGroup" v-show="grouping" class="group-top" :class="{ over }")
			.inf(v-if="len === 0") Перетащите сюда заголовок колонки для группировки
			//- SlickList( :value="group" axis="x" @input="newGroup"  v-else).crumbs
			SlickList( :value="group" axis="x"  v-else).crumbs
				SlickItem(v-for="(item, index) in group" :index="index" :key="index" :item="item")
					.crumb(@contextmenu.prevent="$refs.menu.open($event, {name: item, index})") {{ item.text }}
				.delete
					v-icon(@click="reset") mdi-close

	.d-flex
		v-slide-x-transition(mode="out-in")
			v-flex(xs2 v-show="group.length && grouping")
				.group
					h3(@click="removeFilter") Группы
						span {{par}}
					tree(ref="tree" :data="list" :options="treeOptions" @node:selected="onNodeSelected").tree-group
						span(slot-scope="{node}").treenode
							span.text {{ node.text }}
							span.num {{ node.data.number }}
		v-flex(:class="group.length ? 'xs10' : 'xs12'").tabl
			.canva
				v-slide-y-transition(mode="out-in")
					TripTable( :filter="filter")

</template>

<script>
import TripTable from '@/components/TripTable'
import { SlickList, SlickItem } from 'vue-slicksort'
import data from '@/trips.js'

export default {
	components: {
		SlickList,
		SlickItem,
		TripTable
	},
	data () {
		return {
			trips: data,
			filter: '',
			total: 0,
			group: [],
			list: [],
			list2: [],
			over: false,
			per: 30,
			renderComponent: true,
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false,
				filter: {
					emptyText: 'Aaaaa! Где мои папки?!!',
					plainList: 0
				}
			}
			// trips: trips
		}
	},
	computed: {
		selectMode () {
			return this.$store.getters.selectMode
		},
		grouping () {
			return this.$store.getters.grouping
		},
		len () {
			return this.group.length
		},
		selectedItems () {
			return this.trips.filter(item => item.selected)
		},
		par () {
			return this.list2.length ? this.list.length * this.list2.length : this.list.length
		}
	},
	methods: {
		toggleSelect () {
			this.$store.commit('toggleSelectMode')
		},
		removeFilter () {
			this.filter = ''
			let selection = this.$refs.tree.find({
				state: { selected: true }
			})
			selection.unselect()
		},
		handleGroup (data) {
			console.log(data)
			let obj = {}
			obj.text = data.text
			obj.children = []
			this.group.push(obj)
			console.log(this.group)
			this.handleItems(data)
			setTimeout(() => this.$refs.tree.tree.setModel(this.list), 200)
			this.hideColumn(data)
			this.over = false
		},
		handleItems (data) {
			if (this.group.length === 1) {
				this.uniqList(data, this.list)
			} else if (this.group.length === 2) {
				let temp = this.uniqList(data, this.list2)
				this.list.forEach(function (item) {
					item.children = [...temp]
					item.state = {}
					// item.state.expanded = true
				})
				// console.log(this.list)
				this.list[0].state.expanded = true
				this.$refs.tree.tree.setModel(this.list)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
