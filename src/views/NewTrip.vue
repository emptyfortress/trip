<template lang="pug">
v-container.new
	br
	.zag Заявка на командировку
	br
	form
		v-row()
			v-col().my
				v-text-field(label="Сотрудник" value="Орлов П.С")
			v-col().my
				v-text-field(label="Город" :value="trip.to")
			v-col(cols="2").my
				v-text-field(label="ИНН" value="4453214501")
			v-col().my
				v-text-field(label="Организация" :value="trip.org")
		v-text-field(label="Цель командировки" :value="trip.title")
		v-row
			v-col
				timeline(ref="timeline" :groups="groups" :items="items" :options="options" )
		v-card(flat hover).form.mt-5
			//- v-row(justify="space-between").mx-5
			//- 	v-card-title.headline Транспорт
			//- 	v-btn(color="success" small depressed).mt-5 Посмотреть лимиты

			v-img(height="79" src="@/assets/img/sunset.jpg" class="white--text align-start")
				v-row(justify="space-between").mx-5
					v-card-title.headline Транспорт
					v-btn(color="info" small depressed dark).mt-5 Посмотреть лимиты
			//- v-row(justify="space-between").mx-5
			//- 	v-card-title.headline Транспорт
			//- 	v-btn(color="success" small depressed).mt-5 Посмотреть лимиты
			v-row.mx-5
				v-col(cols="6")
					v-row
						v-col
							div.font-weight-bold  Туда
							v-radio-group(v-model="to")
								v-radio(label="Самолет" value="A")
								v-radio(label="Поезд" value="B")
						v-col
							div.font-weight-bold  Обратно
							v-radio-group(v-model="from")
								v-radio(label="Самолет" value="A")
								v-radio(label="Поезд" value="B")
						v-col
							div.font-weight-bold  Заказ билетов
							v-radio-group(v-model="ticket")
								v-radio(label="Офис-менеджер" value="A")
								v-radio(label="Самостоятельно" value="B")
				v-col(cols="6")
					v-textarea(outlined label="Комментарий по билетам" cols="12" value="").mt-3

		v-card(flat hover).form.mt-5
			v-img(height="79" src="@/assets/img/city.jpg" class="white--text align-start" )
				v-row(justify="space-between").mx-5
					v-card-title.headline Проживание
					v-btn(color="info" small dark).mt-5 Посмотреть лимиты
			//- v-row(justify="space-between" ).mx-5
			//- 	v-card-title.headline Проживание
			//- 	v-btn(color="success" small depressed).mt-5 Посмотреть лимиты
			v-row.mx-5
				v-col(cols="3")
					v-checkbox(label="Проживание не требуется" v-model="living")
				v-col(cols="3" v-show="!living").mt-5
					.font-weight-bold Заказ отеля
					v-radio-group(v-model="from")
						v-radio(label="Офис-менеджер" value="A")
						v-radio(label="Самостоятельно" value="B")
				v-col(v-show="!living")
					v-textarea(outlined label="Комментарий по отелю" cols="12" value="").mt-3
		v-card(flat hover).form.mt-5
			v-row.mx-5
				v-col(cols="2")
					v-card-title.headline.mr-5 Бюджет
				v-col
					v-row
						v-col(cols="5").mx-5
							v-select(:items="departments" label="Отдел" value="ДРП")
						v-col.mx-5
							v-row.pr-4
								v-slider(v-model="slider" hide-details step="10").align-end
									template(v-slot:prepend)
										v-text-field(v-model="slider" hide-details single-line type="number" style="width: 50px")
									template(v-slot:append)
										v-btn(text icon color="pink")
											v-icon mdi-close
					v-card-actions
						v-btn(text color="primary") Добавить бюджет
		v-card-actions.mt-5
			v-spacer
			v-btn(depressed color="lightgray") Отмена
			v-btn(depressed color="primary") На согласование
	br
	br
	v-row.white
		v-col
			img(src="@/assets/img/booking.png")
		v-col
			img(src="@/assets/img/airbnb.png" width="140" height="50")
		v-col
			img(src="@/assets/img/tripadvisor.png" width="205" height="50" )
		v-col
			img(src="@/assets/img/aviasales.png"  width="182" height="50")
		v-col
			img(src="@/assets/img/tutu.png"  width="151" height="50")
		v-col
			img(src="@/assets/img/ostrovok.png")
		//- v-col
		//- 	img(src="@/assets/img/trivago.png")
		//- v-col
		//- 	img(src="@/assets/img/guru.png")
	br
	br
	br
	br
	br
	br
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
			living: false,
			slider: 100,
			nnn: false,
			to: 'A',
			from: 'A',
			ticket: 'A',

			departments: [
				'ДРП', 'Коммерческий отдел', 'Сервисы', 'Техподдержка', 'Бухгалтерия'
			],
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
				locale: 'ru',
				timeAxis: { scale: 'day', step: 1 }
			}
		}
	},
	computed: {
		trip () {
			let a = this.$route.params.id
			return this.trips.filter(item => item.id === parseInt(a))[0]
		}
	},
	created () {
		setTimeout(_ => this.$refs.timeline.setWindow('2020-01-22', '2020-01-31'))
	}

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.form {
	border: 1px solid #ccc;
}

</style>
