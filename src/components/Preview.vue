<template lang="pug">
v-navigation-drawer(v-model="preview" app right :width="fullWindow ? '100%' : '50%' " disable-resize-watcher)
	v-app-bar(dark :color="color" absolute).pr-2
		v-col
			v-select(:items="files" value="Договор с ООО Ромашка.doc" dark).sel
		v-spacer
		input(type="text" value="1").page
		span.pages / 3
		v-spacer
		v-btn(icon).ml-4
			v-icon mdi-message-outline
		v-btn(icon)
			v-icon mdi-download
		v-btn(icon)
			v-icon mdi-printer
		v-btn(icon @click="toggleFull" :disabled="fullWindow")
			i.icon-up
		v-btn( href="" icon @click="showPreview")
			v-icon mdi-close
	br
	br
	br
	.placeholder(v-for="n in 3")
		br
		br
		br
		.text Документик

	v-btn(fab small depressed color="white").plus
		v-icon mdi-plus
	v-btn(fab small depressed color="white").minus
		v-icon mdi-minus

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
		fullWindow () {
			return this.$store.getters.fullWindow
		},
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
			this.$store.commit('setFullWindow', false)
			this.$store.commit('setMini', true)
		},
		toggleFull () {
			if (this.fullWindow) {
				// this.$store.commit('togglePreview')
				this.$store.commit('setFullWindow', false)
			} else {
				this.$store.commit('setFullWindow', true)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-navigation-drawer {
	background: lighten($dark, 10%);
}
.rel {
	position: relative;
}
.small {
	font-size: 1.0rem;
}
.page {
	background: lighten($dark, 10%);
	color: white;
	font-size: 1.0rem;
	width: 40px;
	margin-left: 2rem;
	text-align: right;
	&:focus {
		background: $dark;
	}
}
.pages {
	margin-left: .3rem;
}
.sel {
	transform: translateY(6px);
}
.placeholder {
	width: 60%;
	height: 80%;
	background: #fff;
	margin: 2rem auto;
}
.text {
	font-size: 3.0rem;
	text-align: center;
	color: grey;
}
.plus {
	position: absolute;
	top: 12rem;
	right: 2rem;
}
.minus {
	position: absolute;
	top: 9rem;
	right: 2rem;
}
</style>
