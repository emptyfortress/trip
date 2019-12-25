<template lang="pug">
.grid
	br
	br
	.zag Прототип грида
	v-slide-y-transition(mode="out-in")
		drop(@dragover="over = true" @dragleave="over = false" @drop="handleGroup" v-if="grouping" class="group-top" :class="{ over }")
			.inf(v-if="len === 0") Перетащите сюда заголовок колонки для группировки
			SlickList( :value="group" axis="x" @input="newGroup"  v-else).crumbs
				SlickItem(v-for="(item, index) in group" :index="index" :key="index" :item="item")
					.crumb(@contextmenu.prevent="$refs.menu.open($event, {name: item, index})") {{ item.text }}
				.delete
					v-icon(@click="reset") mdi-close

	.d-flex
		v-slide-x-transition(mode="out-in")
			v-flex(xs2 v-if="group.length")
				.group
					h3(@click="removeFilter") Группы
						span {{par}}
						//- v-icon(@click="chart = !chart") insert_chart_outlined
					tree(ref="tree" :data="list" :options="treeOptions" @node:selected="onNodeSelected").tree-group
						span(slot-scope="{node}").treenode
							span.text {{ node.text }}
							span.num {{ node.data.number }}
		v-flex(:class="group.length ? 'xs10' : 'xs12'").tabl
			.canva
				v-slide-y-transition(mode="out-in")
					DataTable

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
import data from '@/data.js'
import DataTable from '@/components/DataTable'

export default {
	data () {
		return {
			items: data,
			selectMode: false,
			columnWidth: 400,
			total: 0,
			group: [],
			over: false,
			per: 30,
			grouping: true,
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
			headers: [
				// { text: '#', align: 'start', sortable: true, value: 'id', width: 20 },
				{ text: 'Название', align: 'start', sortable: true, value: 'title' },
				{ text: 'Исполнитель', align: 'start', sortable: true, value: 'executor', width: 145 },
				{ text: 'Автор', align: 'start', sortable: true, value: 'author', width: 110 },
				{ text: 'Срок', align: 'start', sortable: true, value: 'deadline', width: 105 },
				{ text: 'Дата', align: 'start', sortable: true, value: 'created', width: 105 },
				{ text: 'Файлы', align: 'start', sortable: true, value: 'files', width: 60 },
				{ text: 'Статус', align: 'start', sortable: true, value: 'status', width: 100 }
			]
		}
	},
	computed: {
		len () {
			return this.group.length
		}
		// colW () {
		// 	return (this.totalWidth - 400)
		// }
	},
	methods: {
		handleGroup (data) {
			let obj = {}
			obj.text = data.text
			obj.children = []
			this.group.push(obj)
			this.handleItems(data)
			setTimeout(() => this.$refs.tree.tree.setModel(this.list), 0)
			this.hideColumn(data)
			this.over = false
		},
		reset () {
			this.group = []
			this.list = []
			this.list2 = []
			this.filter = ''
			// this.$store.dispatch('loadHeaders')
		},
		hideColumn (e) {
			let col = this.headers.filter(item => item.text === e.text)[0]
			col.active = false
			// console.log(col)
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
		},
		toggleGrouping () {
			this.grouping = !this.grouping
		}
	},
	components: {
		SlickList,
		SlickItem,
		DataTable
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.group-top {
	display: block;
	padding: 1rem;
	border: 1px dashed $info;
	margin-bottom: 1rem;
	&.over {
		background: #D9F9FF;
	}
}
.inf {
	font-style: italic;
	color: #666;
	font-size: .9rem;
}
.zag {
	font-size: 2.0rem;
	color: #999;
	text-align: center;
}
.stick {
	background: #eee;
}
.stick.stickto-auto-generated-sticker {
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}

.group {
	margin-top: .6rem;
	h3 {
		background: white;
		padding: .5rem 1rem;
		cursor: pointer;
		span {
			margin-left: 1rem;
			font-size: .9rem;
			background: $info;
			color: white;
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
.group-top {
	padding: 1rem;
	border: 1px dashed $info;
	&.over {
		background: #D9F9FF;
	}
}
.drag1 {
	display: inline;
	padding: .2rem .5rem;
}
.crumbs {
	display: flex;
	position: relative;
	.crumb {
		margin-right: 1rem;
		&:after {
			content: "\2192";
			margin-left: 1rem;
		}
	}
}
.delete {
	position: absolute;
	right: 0
}

.canva {
	margin-top: 8px;
	background: #eee;
}
.treenode {
	width: 100%;
}
.tabl {
	transition: all .3s ease;
}
</style>
