<template lang="pug">
.new
	h1 New trip {{ $route.params.id }}
	br
	div trips: {{ trips }}
	div trip: {{ trip }}

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
