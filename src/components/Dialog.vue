<template lang="pug">
div
	v-dialog( v-model="dialog" persistent max-width="600px" )
		v-card
			v-card-title
				span( class="headline" ) Настройка таблицы
			v-card-text
				v-container
					v-row
						v-col( cols="6" sm="6" )
							v-select( :items="['Дайджест', 'Моя таблица', 'Управление делами']" label="Представление" value="Дайджест")
					v-row
						v-col( cols="6")
							h3.mb-4 Колонки:
							SlickList( :value="headers" :distance=2 @input="newColumn" helperClass="moving" )
								SlickItem(v-for="(item, index) in headers" :index="index" :key="item.id" :item="item" v-if="item.text !== null")
									v-checkbox(v-model="item.active" :label="item.text").sm
										//- div {{ item.text }}
						v-col(cols="6")
							h3.mb-4 Страницы:
							v-radio-group( v-model="radioGroup" )
								v-radio( label="Ленивая подгрузка" )
								v-radio( label="Постраничный просмотр" )
							br
							h3.mb-4 Строки:
							v-radio-group( v-model="radioGroup1" )
								v-radio( label="Обрезаются" )
								v-radio( label="Переносятся" )
			v-card-actions
				v-btn( color="blue darken-1" text @click="close" ) Сбросить
				v-spacer
				v-btn( color="blue darken-1" text @click="close" ) Отмена
				v-btn( color="blue darken-1" text @click="close" ) Применить

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'

export default {
	data () {
		return {
			radioGroup: 0,
			radioGroup1: 0
		}
	},
	computed: {
		dialog () {
			return this.$store.getters.dialog
		},
		headers () {
			return this.$store.getters.headers
		}
	},
	methods: {
		close () {
			this.$store.commit('toggleDialog')
		}
	},
	components: {
		SlickItem,
		SlickList
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
</style>
