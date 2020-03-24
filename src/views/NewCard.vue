<template lang="pug">
.all
	drag-zone.zone
		drag-content(v-show="$vuetify.breakpoint.mdAndUp && inlinePreview").content.one
			v-slide-y-transition(mode="out-in")
				v-skeleton-loader(v-if="lo" height="100%" width="100%" type="image" ).skel
				div(v-if="!lo")
					v-app-bar(dense flat :color="color").mb-1
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
					.doc
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

		drag-handle(v-show="$vuetify.breakpoint.mdAndUp").hand
			div
		drag-content.cardd
			.status
				span {{ item[0].status }}
			br
			.btgroup
				v-btn(color="primary" depressed) В работу
				v-btn(color="primary" depressed) Согласовать
				v-btn(color="primary" depressed outlined) Делегировать
				v-btn(color="primary" depressed outlined) Отклонить
			.zag {{ item[0].title }}
			br
			v-expansion-panels(hover tile flat)
				v-expansion-panel
					v-expansion-panel-header
						.blockhd.rel Информация
					v-expansion-panel-content
						.myrow
							table.attributes
								tr(v-for="item in attr" :key="item.id")
									td.attr {{ item.attr }}
									td {{ item.value }}
							.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
			//- v-tabs.mytab
			//- 	v-tab Главная
			//- 	v-tab Подчиненные задания
			//- 	v-tab История
			//- 	v-tab-item(key="1")
			//- 		v-expansion-panels(hover tile v-model="a" flat)
			//- 			v-expansion-panel
			//- 				v-expansion-panel-header
			//- 					.blockhd.rel Информация
			//- 				v-expansion-panel-content
			//- 					.myrow
			//- 						table.attributes
			//- 							tr(v-for="item in attr" :key="item.id")
			//- 								td.attr {{ item.attr }}
			//- 								td {{ item.value }}
			//- 						.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.

			Files1
			Hod.mt-3
			v-expansion-panels(hover tile flat)
				v-expansion-panel
					v-expansion-panel-header
						.blockhd.rel Подчиненные задания
					v-expansion-panel-content
						p Здесь подчиненные задания
						p Здесь подчиненные задания
						p Здесь подчиненные задания
						p Здесь подчиненные задания
						p Здесь подчиненные задания
				v-expansion-panel
					v-expansion-panel-header
						.blockhd.rel История
					v-expansion-panel-content
						p Здесь
						p Здесь
						p Здесь
						p Здесь
						p Здесь

	v-scale-transition(origin="top left")
		Comments(v-show="chat" :myx="20" :myy="60" style="z-index: 100")
</template>

<script>
import Comments from '@/components/Comments'
import Files1 from '@/components/Files1'

import Hod from '@/components/Hod'
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'

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
	computed: {
		inlinePreview () {
			return this.$store.getters.inlinePreview
		},
		height () {
			return (window.innerHeight - 200)
		},
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
		Hod,
		dragZone,
		dragHandle,
		dragContent
	},
	created () {
		let that = this
		setTimeout(function () {
			that.$store.commit('setLo', false)
		}, 600)
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

.btgroup {
	margin-bottom: 1.5rem;
	.v-btn {
		margin-bottom: .25rem;
	}
	.v-btn:not(:last-child) {
		margin-right: .25rem;
	}
}
.doc {
	position: absolute;
	top: 53px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow-y: auto;
	background: #fff;
	box-shadow: 0 0 3px #666666aa;
}

.cardd {
	width: 50%;
	margin-left: 1rem;
	height: 100%;
	overflow: auto;
}
@media only screen and (max-width: 960px) {
	.cardd {
		width: 100%;
		margin-right: 1rem;
	}
}
.zag {
	color: black;
	text-align: left;
	font-size: 1.4rem;
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
.dot {
	width: 9px;
	height: 9px;
	border-radius: 4px;
	position: absolute;
	top: 0;
	right: 0;
	background: $info;
}
.attributes {
	padding-right: 1rem;
	font-size: .9rem;
	margin-right: 2rem;
	border-right: 1px solid #ccc;
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
.myrow {
	display: flex;
	justify-content: flex-start;
	padding: 1rem 0;
}
.zone {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	display: flex;
	.hand {
		width: 20px;
		div {
			width:10px;
			height: 100%;
			transform: translateX(5px);
		}
		&:hover {
			div { border-left: 3px dotted #333; }
		}
	}
}
.one {
	width: 50%;
	position: relative;
}
.all {
	width: 100%;
	height: calc(100vh - 120px);
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
