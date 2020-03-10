<template lang="pug">
div
	v-dialog( v-model="tableSearch" persistent max-width="600px" )
		v-card
			v-card-title
				span( class="headline" ) Поиск в таблице
			v-card-text
				v-container
					v-row
						v-col( cols="12" sm="12" )
							v-autocomplete(v-model="model" :items="items" autofocus label="Искать" placeholder="Начните ввод для поиска" no-data-text="Увы, ничего не найдено...")
			v-card-actions
				//- v-btn( color="blue darken-1" text @click="close" ) Сбросить
				v-spacer
				v-btn( color="blue darken-1" text @click="close" ) Отмена
				v-btn( color="blue darken-1" text @click="close" ) Искать

</template>

<script>

export default {
	data () {
		return {
			items: ['foo', 'bar', 'fizz', 'buzz'],
			model: []
		}
	},
	computed: {
		tableSearch () {
			return this.$store.getters.tableSearch
		},
		headers () {
			return this.$store.getters.headers
		}
	},
	methods: {
		newColumn (e) {
			this.$store.commit('setHeaders', e)
		},
		close () {
			this.$store.commit('toggleTableSearch')
		}
	},
	components: {
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.v-input--selection-controls {
	margin: 0;
	padding: 0;
}
.v-list {
	padding: 0;
}
.moving {
	z-index: 1000;
	display: block;
	font-family: Roboto;
	line-height: 150%;
}
</style>
