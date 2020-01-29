<template lang="pug">
v-navigation-drawer(v-model="add" app right temporary)
	h2 test
	h2 test
	h2 test
	h2 test
	h2 test
	h2 test
	h2 test
	h2 test

</template>

<script>

export default {
	data () {
		return {

		}
	},
	computed: {
		add: {
			get () {
				return this.$store.getters.add
			},
			set () {}
		}

	}
}

</script>
