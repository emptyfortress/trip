<template lang="pug">
.grid
	br
	br
	.zag Прототип грида
	v-slide-y-transition(mode="out-in")
		drop(@dragover="over = true" @dragleave="over = false" @drop="handleGroup" v-if="grouping" class="group-top" :class="{ over }")
			.inf(v-if="len === 0") Перетащите сюда заголовок колонки для группировки
			//- SlickList( :value="group" axis="x" @input="newGroup"  v-else).crumbs
			//- 	SlickItem(v-for="(item, index) in group" :index="index" :key="index" :item="item")
			//- 		.crumb(@contextmenu.prevent="$refs.menu.open($event, {name: item, index})") {{ item.text }}
			//- 	.delete
			//- 		v-icon(@click="reset") close

	v-data-table(:headers="headers" :items="items" hide-default-header hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab

		template(v-slot:header="{ props: {headers}}")
			thead
				tr(v-stickto).test
					th(v-for="header in headers" :width="header.width")
						drag(:transfer-data="header").drag1
							span {{ header.text }}
							//- v-icon( small v-if="header.sortable") mdi-arrow-down

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
import data from '@/data.js'

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
		cal () {
			console.log(this.$refs.table.clientWidth)
		},
		totalWidth () {
			return (this.$refs.table.clientWidth - 400)
		}
	},
	components: {
		SlickList,
		SlickItem
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
.test {
	background: #eee;
}
.test.stickto-auto-generated-sticker {
	background: $yellow;
	width: 100%;
}
.bold {
	/* font-weight: bold; */
}
.drag1 {
	display: inline;
	padding: .2rem .5rem;
}
</style>
