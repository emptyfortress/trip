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

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-navigation-drawer {
	background: lighten($dark, 10%);
	/* background: #657A76; */

}
</style>
