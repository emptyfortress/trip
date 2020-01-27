<template lang="pug">
v-row(justify="center").mx-3
	v-col(md="12" lg="9")
		.zag
			span Согласование:
			|  командировка
		br
		v-tabs.mytab
			v-tab Главная
			v-tab Подчиненные задания
			v-tab История

</template>

<script>
import trips from '@/trips.js'

export default {
	data () {
		return {
			trips: trips
		}
	},
	computed: {
		trip () {
			let a = this.$route.params.id
			return this.trips.filter(item => item.id === parseInt(a))[0]
		}
	},
	methods: {
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zag {
	color: black;
	text-align: left;
	font-size: 1.5rem;
	span {
		opacity: .5;
	}
}
</style>
