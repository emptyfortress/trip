<template lang="pug">
v-navigation-drawer(v-model="preview" app right width="50%" disable-resize-watcher)

</template>

<script>

export default {
	data () {
		return {

		}
	},
	computed: {
		preview: {
			get () {
				return this.$store.getters.preview
			},
			set () {}
		}

	}
}

</script>
