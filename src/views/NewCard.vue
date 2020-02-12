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
				v-btn(icon @click="toggleChat" :color="chat ? 'pink' : '' ").ml-4
					.rel
						v-icon mdi-message-outline
						.dot
				v-btn(icon)
					v-icon mdi-download
				v-btn(icon)
					v-icon mdi-printer
				v-btn(icon @click="" )
					i.icon-up
			.doc
				.pull-tab
				img(:src="require(`@/assets/img/img${file}.jpg`)")
				v-overlay(:value="overlay" absolute)
					v-progress-circular(indeterminate size="64")
	.cardd
		.btgroup
			v-btn(color="primary" depressed) В работу
			v-btn(color="primary" depressed) Согласовать
			v-btn(color="primary" depressed) Делегировать
			v-btn(color="primary" depressed) Отказать
		.status
			span {{ item[0].status }}
		br
		.zag {{ item[0].title }}
		br
		v-tabs.mytab
			v-tab Главная
			v-tab Подчиненные задания
			v-tab История
			v-tab-item(key="1")
				v-row
					v-col(cols="12" lg="3" md="4" sm="12" order="1")
						table(:class="$vuetify.breakpoint.smAndDown ? 'big' : '' ").attributes
							tr(v-for="item in attr" :key="item.id")
								td.attr {{ item.attr }}
								td {{ item.value }}
					v-col
						.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
				Files1
				Hod.mt-3

	v-scale-transition(origin="top left")
		Comments(v-if="chat" :myx="0" :myy="50" style="z-index: 100")
</template>

<script>
import Comments from '@/components/Comments'
import Files1 from '@/components/Files1'
import Hod from '@/components/Hod'

export default {
	data () {
		return {
			color: '#dedede',
			attr: [
				{ id: 0, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 1, attr: 'Исполнитель:', value: 'Воробьев С.В.' },
				{ id: 2, attr: 'Срок:', value: '31.01.2020' },
				{ id: 3, attr: 'Аттрибут:', value: 'значение' },
				{ id: 4, attr: 'Аттрибут:', value: 'значение' }
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
	computed: {
		chat () {
			return this.$store.getters.chat
		},
		file () {
			return this.$store.getters.file
		},
		lo () {
			return this.$store.getters.lo
		},
		overlay () {
			return this.$store.getters.overlay
		}
	},
	components: {
		Comments,
		Files1,
		Hod
	},
	created () {
		let that = this
		setTimeout(function () {
			that.$store.commit('setLo', false)
		}, 600)
	},
	methods: {
		toggleChat () {
			this.$store.commit('toggleChat')
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.newcard {
	position: relative;
	display: flex;
	margin-top: 2rem;
	align-items: flex-start;
	div {
		/* background: #eee; */
	}
	.cardd {
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
.dot {
	width: 9px;
	height: 9px;
	border-radius: 4px;
	position: absolute;
	top: 0;
	right: 0;
	background: red;
}
.lay > div:first-child {
	/* min-width: 240px; */
	/* border-right: 1px solid #ccc; */
}
.attributes {
	width: 100%;
	font-size: .9rem;
	margin: 0 auto;
	&.big {
		font-size: 1.1rem;
	}
	td {
		padding: 0 0.9rem;
		white-space: nowrap;
		&.attr {
			text-align: right;
		}
	}
}
.attr {
	opacity: .6;
}
</style>
