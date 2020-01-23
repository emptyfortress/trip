<template lang="pug">
v-container.new
	br
	br
	.zag Заявка на командировку
	br
	form
		v-row()
			v-col().my
				v-text-field(label="Сотрудник")
			v-col().my
				v-text-field(label="Город")
			v-col().my
				v-text-field(label="Организация")
		v-row
			v-col
				timeline( ref="timeline" v-bind:items="items" v-bind:groups="groups" )

</template>

<script>
import Vue from 'vue'
import 'vue2vis/dist/vue2vis.css'
import trips from '@/trips.js'
import timeline from 'vue-visjs-timeline'
Vue.component('timeline', timeline)

export default {
	data () {
		return {
			trips: trips,
			groups: [{
				id: 0,
				content: 'Group 1'
			}],
			items: [{
				id: 0,
				group: 0,
				start: new Date(),
				content: 'Item 1'
			}],
			options: {
				editable: true
			}
		}
	},
	computed: {
		trip () {
			let a = this.$route.params.id
			return this.trips.filter(item => item.id === parseInt(a))
		}
	},
	components: {
	}
}

</script>

<style scoped lang="scss">

@import '@/assets/css/colors.scss';

.new {
	background: #ccc;
}
.my {
	/* background: red; */
}
</style>
