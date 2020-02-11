<template lang="pug">
.newcard
	v-slide-y-transition(mode="out-in")
		v-skeleton-loader(v-if="lo" height="700" width="500" type="image" ).skel
		div(v-if="!lo")
			v-app-bar(dense flat :color="color").mb-1
				v-btn(icon small)
					v-icon mdi-chevron-left
				input(type="text" value="1").page
				span.pages / 3
				v-btn(icon small).ml-3
					v-icon mdi-chevron-right
				v-spacer
				v-btn(icon @click="toggleChat" :color="chat ? '#00ff00' : '' ").ml-4
					v-icon mdi-message-outline
				v-btn(icon)
					v-icon mdi-download
				v-btn(icon)
					v-icon mdi-printer
				v-btn(icon @click="toggleFull" :disabled="fullWindow")
					i.icon-up
			.doc
				.pull-tab
				img(src="@/assets/img/img3.jpg")
	.attr
		.btgroup
			v-btn(color="primary" depressed) В работу
			v-btn(color="primary" depressed) Согласовать
			v-btn(color="primary" depressed) Делегировать
			v-btn(color="primary" depressed) Отказать
		.status
			span {{ item[0].status }}
		br
		.zag {{ item[0].title }}

</template>

<script>

export default {
	data () {
		return {
			lo: true,
			color: '#ccc',
			files: [
				'Договор с ООО Ромашка.doc',
				'Приложение к договору.doc',
				'Расчет цены.xsl',
				'План-график.xsl'
			],
			item: [
				{
					'id': 0,
					'number': '№ 122',
					'unread': false,
					'selected': false,
					'author': '<Я>',
					'executor': 'Орлов П.Ф.',
					'status': 'Не начато',
					'deadline': '2018-08-28',
					'created': '2018-08-05',
					'title': 'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
					'files': '3'
				}
			]

		}
	},
	components: {
	},
	created () {
		let that = this
		setTimeout(function () {
			that.lo = false
		}, 600)
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.newcard {
	display: flex;
	margin-top: 2rem;
	align-items: flex-start;
	div {
		/* background: #eee; */
	}
	.attr {
		flex-grow: 1;
		min-width: 300px;
		width: 300px;
		height: 333px;
		margin-left: 1rem;
	}
	.right {
		width: 150px;
		.v-btn {
			margin-bottom: .3rem;
		}
	}
	.doc {
		position: relative;
		min-width: 400px;
		padding: .5rem;
		width: 500px;
		height: 700px;
		resize: both;
		box-shadow: 0px 0px 1px #777777aa;
		overflow: auto;
		background: #fff;
		img {
			width: 100%;
		}
	}
	.btgroup {
		margin-bottom: 1.5rem;
		.v-btn {
			margin-bottom: .25rem;

		}
		.v-btn:not(:last-child) {
			margin-right: .25rem;
		}
	}
}
.pull-tab {
		height: 0px;
		width: 0px;
		border-top: 20px solid $dark;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		-webkit-transform: rotate(-45deg);
		position: absolute;
		bottom: -3px;
		right: -15px;
		pointer-events: none;
		z-index: 2;
}

.zag {
	color: black;
	text-align: left;
	font-size: 1.4rem;
}

.skel {
	width: 500px;
	height: 700px;
}

.page {
	font-size: 1.0rem;
	width: 30px;
	/* margin-left: 1rem; */
	text-align: right;
	&:focus {
		background: #fff;
	}
}
.pages {
	margin-left: .3rem;
}
</style>
