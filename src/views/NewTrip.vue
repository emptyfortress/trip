<template lang="pug">
.new
	h1 New trip {{ $route.params.id }}
	br
	div trips: {{ trips }}
	div trip: {{ trip }}
	div {{ typeof($route.params.id) }}

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
			return this.trips.filter(item => item.id === 0)
		}
	}
}

</script>
