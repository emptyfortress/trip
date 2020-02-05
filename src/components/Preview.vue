<template lang="pug">
v-navigation-drawer(v-model="preview" app right width="50%" disable-resize-watcher)
	v-app-bar(dark :color="color").pr-2
		//- v-toolbar-title.small Файл:
		v-select(:items="files" value="Договор с ООО Ромашка.doc" dark)
		v-spacer
		v-btn(icon).ml-4
			v-icon mdi-message-outline
		v-btn(icon)
			v-icon mdi-download
		v-btn(icon)
			v-icon mdi-printer
		//- v-spacer
		v-btn( href="" icon @click="showPreview")
			v-icon mdi-close

</template>

<script>

export default {
	data () {
		return {
			color: '#405e82',
			files: [
				'Договор с ООО Ромашка.doc',
				'Приложение к договору.doc',
				'Расчет цены.xsl',
				'План-график.xsl'
			]

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
.small {
	font-size: 1.0rem;
}
</style>
