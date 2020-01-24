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
			groups: [{
				id: 0,
				content: 'Срок командировки'
			}],
			items: [{
				id: 0,
				group: 0,
				start: moment().add(3, 'days'),
				end: moment().add(4, 'days'),
				content: '1 день'
			}],
			options: {
				editable: true,
				locale: 'ru'
			}
		}
	},
	computed: {
		test () {
			return moment().startOf('day')
		},
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

</style>
