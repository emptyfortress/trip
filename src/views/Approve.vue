<template lang="pug">
v-row(justify="center").mx-3
	v-col(md="12" lg="9")
		v-row(justify="space-between")
			v-col
				.zag.mb-2
					span Согласование:
					|  командировка
			v-col(cols="2").status В работе
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
	/* white-space: nowrap; */
	span {
		opacity: .5;
	}
}
.status {
	font-size: 1.2rem;
	text-align: right;
	margin-top: .6rem;
	/* width: 120px; */
	/* background: #ccc; */
}
</style>
