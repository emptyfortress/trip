<template lang="pug">
v-container.new
	br
	br
	.zag Заявка на командировку
	br
	form
		v-row()
			v-col().my
				v-text-field(label="Сотрудник" value="Орлов П.С")
			v-col().my
				v-text-field(label="Город" :value="trip.to")
			v-col().my
				v-text-field(label="Организация" :value="trip.org")
		v-text-field(label="Цель командировки" :value="trip.title")
		v-row
			v-col
				timeline(ref="timeline" :groups="groups" :items="items" :options="options" )
		v-card(flat).form.mt-5
			v-img(height="79" src="@/assets/img/sunset.jpg" class="white--text align-start")
				v-row(justify="space-between").mx-5
					v-card-title.headline Транспорт
					v-btn(color="success" small depressed).mt-5 Посмотреть лимиты
			v-row.mx-5
				v-col(cols="6")
					v-row
						v-col
							div Туда
							v-radio-group(v-model="to")
								v-radio(label="Самолет" value="A")
								v-radio(label="Поезд" value="B")
						v-col
							div Обратно
							v-radio-group(v-model="from")
								v-radio(label="Самолет" value="A")
								v-radio(label="Поезд" value="B")
						v-col
							div Заказ билетов
							v-radio-group(v-model="ticket")
								v-radio(label="Офис-менеджер" value="A")
								v-radio(label="Самостоятельно" value="B")
				v-col(cols="6")
					v-textarea(outlined label="Комментарий по билетам" cols="12" value="").mt-3
			div
				img(src="@/assets/img/booking.png" width="140" height="50")
				img(src="@/assets/img/airbnb.png" width="140" height="50")
				img(src="@/assets/img/tripadvisor.png" width="205" height="50" )
				img(src="@/assets/img/aviasales.png"  width="182" height="50")
				img(src="@/assets/img/tutu.png"  width="151" height="50")

</template>

<script>
import trips from '@/trips.js'
import 'vue2vis/dist/vue2vis.css'
import '@/assets/css/vis.scss'
import moment from 'moment'

export default {
	data () {
		return {
			trips: trips,
			to: 'A',
			from: 'A',
			ticket: 'A',
			groups: [{
				id: 0,
				content: 'Срок командировки'
			}],
			items: [{
				id: 0,
				group: 0,
				start: moment('2020-01-24').add(3, 'days'),
				end: moment('2020-01-24').add(4, 'days'),
				content: '1 день'
			}],
			options: {
				editable: true,
				locale: 'ru'
			}
		}
	},
	computed: {
		trip () {
			let a = this.$route.params.id
			return this.trips.filter(item => item.id === parseInt(a))[0]
		}
	},
	components: {
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.form {
	/* padding: 1rem; */
	/* box-shadow: none; */
	border: 1px solid #dedede

}

</style>
