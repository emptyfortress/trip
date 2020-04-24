<template lang="pug">
div
	v-app-bar(dense flat :color="color").mb-1.bar
		v-col.mt-3
			v-select(:items="files" value="Договор с ООО Ромашка.doc" ).sel
		v-spacer
		v-btn(icon small)
			v-icon mdi-chevron-left
		input(type="text" value="1").page
		span.pages / 3
		v-btn(icon small).ml-3
			v-icon mdi-chevron-right
		v-spacer
		v-btn(icon @click="toggleChat" :color="chat ? 'green' : '' ").ml-4
			.rel
				v-icon mdi-message-outline
				.dot
		v-btn(icon)
			v-icon mdi-download
		v-btn(icon)
			v-icon mdi-printer
		v-btn(icon @click="" )
			i.icon-up
		v-btn(icon @click="closePreview" )
			v-icon mdi-close
	.docu
		v-img(:src="require(`@/assets/img/img${file}.jpg`)" contain v-if="file > 0")
		.empty(v-else)
			i.icon-empty
			h3 Просмотр недоступен
			p Данный файл недоступен для просмотра в браузере.
				br
				|Пожалуйста, скачайте его и откройте обычным образом.
			p
				v-btn(color="primary" depressed outlined) Скачать

		v-overlay(:value="overlay" absolute)
			v-progress-circular(indeterminate size="64")

</template>

<script>

export default {
	props: ['file'],
	data () {
		return {
			color: '#ccc',
			chat: false,
			files: [
				'Договор с ООО Ромашка.doc',
				'Приложение к договору.doc',
				'Расчет цены.xsl',
				'План-график.xsl'
			]
		}
	},
	computed: {
		overlay () {
			return this.$store.getters.overlay
		}
	},
	methods: {
		closePreview () {
			this.$store.commit('toggleInlinePreview')
		},
		toggleChat () {
			this.$store.commit('toggleChat')
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.bar {
	overflow: hidden;
}
.dot {
	width: 9px;
	height: 9px;
	border-radius: 4px;
	position: absolute;
	top: 0;
	right: 0;
	background: $info;
}
.page {
	font-size: 1.0rem;
	width: 30px;
	padding: .2rem;
	/* margin-left: 1rem; */
	text-align: right;
	&:focus {
		background: #fff;
	}
}
.pages {
	margin-left: .3rem;
}
.docu {
	position: absolute;
	top: 53px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow-y: auto;
	background: #fff;
	box-shadow: 0 0 3px #666666aa;
}
.empty {
	text-align: center;
	height: 100%;
	color: #aaa;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h3 {
		font-weight: 400;
		font-size: 1.7rem;
	}
	i {font-size: 6.0rem;}
	p {margin: 1rem 5rem;}
	.v-btn {display: inline-block;}
}
</style>
