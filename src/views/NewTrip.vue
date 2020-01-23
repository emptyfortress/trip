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
			return this.trips.filter(item => item.id === parseInt(a))
		}
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
