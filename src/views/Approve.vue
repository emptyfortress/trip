<template lang="pug">
v-row(justify="center").mx-3
	v-col(md="12" lg="9")
		v-row(justify="space-between" align="center")
			v-col(cols="12" md="2").status.text-md-right.text-sm-left.order-md-last
				span Не начато
			v-col
				.zag
					span Согласование:
					|  командировка
		v-tabs.mytab
			v-tab Главная
			v-tab Подчиненные задания
			v-tab История
			v-tab-item(key="1")
				ApproveTask
			v-tab-item(key="2")
				div.big
					i.icon-empty
					span Задания отсутствуют
			v-tab-item(key="3")
				span История

</template>

<script>
import trips from '@/trips.js'
import ApproveTask from '@/components/ApproveTask'

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
	},
	components: {
		ApproveTask
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
}
.big {
	margin-top: 4rem;
	i {
		font-size: 3.0rem;
		color: #888;
	}
}
</style>
