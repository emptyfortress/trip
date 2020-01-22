<template lang="pug">
.trips
	br
	br
	.zag Мои командировки
	TripTable( :filter="filter" )
	//- TripTable( :filter="filter" :headers="tripheaders" :items="trips")

</template>

<script>
import TripTable from '@/components/TripTable'
import { SlickList, SlickItem } from 'vue-slicksort'
// import trips from '@/trips.js'

export default {
	components: {
		SlickList,
		SlickItem,
		TripTable
	},
	data () {
		return {
			// trips: trips
		}
	},
	computed: {
		// headers () {
		// 	return this.$store.getters.tripheaders
		// }
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
