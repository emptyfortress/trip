<template lang="pug">
.grid
	br
	br
	.zag(ref="table") Прототип грида
	//- v-slide-y-transition(mode="out-in")
	//- 	drop(@dragover="over = true" @dragleave="over = false" @drop="handleGroup" v-if="grouping" class="group-top" :class="{ over }")
	//- 		.inf(v-if="len === 0") Перетащите сюда заголовок колонки для группировки
			//- SlickList( :value="group" axis="x" @input="newGroup"  v-else).crumbs
			//- 	SlickItem(v-for="(item, index) in group" :index="index" :key="index" :item="item")
			//- 		.crumb(@contextmenu.prevent="$refs.menu.open($event, {name: item, index})") {{ item.text }}
			//- 	.delete
			//- 		v-icon(@click="reset") close

	v-data-table(:headers="headers" :items="items" hide-default-footer :items-per-page="per" :show-select="showSelect" item-key="id").tab

		template(v-slot:header="{ props: {headers} }" )
			thead(@click="cal")
				tr(v-stickto).test
					th(v-for="header in headers" :width="header.width" ) {{ header.text }}
	//- 	template(v-slot:item.title="{ item }")
	//- 		span.bold {{ item.title }}

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
import data from '@/data.js'

export default {
	data () {
		return {
			items: data,
			showSelect: false,
			columnWidth: 400,
			total: 0,
			group: [],
			over: false,
			per: 30,
			grouping: true,
			headers: [
				{ text: '#', align: 'start', sortable: true, value: 'id', width: 20 },
				{ text: 'Название', align: 'start', sortable: true, value: 'title', width: this.colW() },
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
	},
	methods: {
		cal () {
			console.log(this.$refs.table.clientWidth)
		},
		colW () {
			// let totalWidth = this.$refs.table.clientWidth
			return 400
			// return (totalWidth - 20 - 145 - 110 - 105 - 105 - 60 - 100)
		}
	},
	components: {
		SlickList,
		SlickItem
		// DataTable1,
		// VueContext
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
}
.zag {
	font-size: 2.0rem;
	color: #999;
	text-align: center;
}
.test.stickto-auto-generated-sticker {
	background: $yellow;
}
.bold {
	/* font-weight: bold; */
}
</style>
