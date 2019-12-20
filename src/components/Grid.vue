<template lang="pug">
	v-data-table(:headers="headers" :items="items" hide-default-footer :items-per-page="per" :show-select="showSelect" item-key="id" )
		//- template(v-if="isEnabled(top)" v-slot:top)
		//- 	div This is content above table

		//- template(v-if="isEnabled('header.data-table-select')" v-slot:header.data-table-select={ on, props })
		//- 	v-simple-checkbox(color="blue" v-bind="props" v-on="on")

</template>

<script>
import data from '@/data.js'

export default {
	data () {
		return {
			items: data,
			showSelect: false,
			per: 150,
			headers: [
				{ text: '#', align: 'start', sortable: true, value: 'id' },
				{ text: 'Название', align: 'start', sortable: true, value: 'title' },
				{ text: 'Исполнитель', align: 'start', sortable: true, value: 'executor' },
				{ text: 'Автор', align: 'start', sortable: true, value: 'author' },
				{ text: 'Срок', align: 'start', sortable: true, value: 'deadline' },
				{ text: 'Дата', align: 'start', sortable: true, value: 'created' },
				{ text: 'Файлы', align: 'start', sortable: true, value: 'files' },
				{ text: 'Статус', align: 'start', sortable: true, value: 'status' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
