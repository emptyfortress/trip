<template lang="pug">
v-navigation-drawer(v-model="preview" app right width="50%" disable-resize-watcher)
	v-app-bar(dark :color="color").pr-2
		v-spacer
		v-btn( href="" icon @click="showPreview")
			v-icon mdi-close

</template>

<script>

export default {
	data () {
		return {
			color: '#405e82'

		}
	},
	computed: {
		preview: {
			get () {
				return this.$store.getters.preview
			},
			set () {}
		}
	},
	components: {
	},
	methods: {
		showPreview () {
			this.$store.commit('togglePreview')
			this.$store.commit('setMini', true)
		}

	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-navigation-drawer {
	background: lighten($dark, 10%);

}
.topbar {
	height: 64px;
	background: darken($dark, 5%);
}
</style>
