<template lang="pug">
.all
	drag-zone.zone.pt-5
		drag-content(v-show="$vuetify.breakpoint.mdAndUp && inlinePreview").content.one
			div(v-show="left").forpdf
				img(src="@/assets/img/pdf.png").pdf

		drag-handle(v-show="$vuetify.breakpoint.mdAndUp && inlinePreview" ).hand
			div
		drag-content.cardd(:class="inlinePreview ? '' : 'only'")
			.d-flex
				.num Вх-123/3055
				//- v-spacer
				//- v-btn(text small color="#aaa" @click.stop="setWhite") white
				//- v-btn(text small color="#aaa" @click.stop="setGrey") blue
				v-spacer
				Status(title="Подготовка")
			br
			.zag.mb-4 {{ item[0].title }}
			.btgroup
				v-overflow-btn(label="Создать..." segmented :items="create" target="#dropdown-example" ).seg

				v-btn(color="docolor" dark ).elevation-1 Зарегистрировать
				v-btn(color="docolor" dark ) На ознакомление
				v-btn(color="docolor" dark ) На согласование
				v-btn(color="docolor" dark ).round.elevation-1
					v-icon mdi-dots-horizontal

			v-tabs(v-model="tt").mytab
				v-tab Главная
				v-tab Ход согласования
				v-tab-item(key="1")
					MainTab
				v-tab-item(key="2")
					Hod.mt-3
	v-scale-transition(origin="top left")
		Comments(v-show="chat" :myx="20" :myy="60" style="z-index: 100")
</template>

<script>
import Comments from '@/components/Comments'
import FilePreview from '@/components/FilePreview'
import Status from '@/components/Status'
import Hod from '@/components/Hod'
import MainTab from '@/components/MainTab'
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'

export default {
	data () {
		return {
			fab: false,
			left: true,
			tt: 0,
			create: [
				{ text: '+Группа заданий', callback: () => console.log('list') },
				{ text: '+Задание на ознакомл.', callback: () => console.log('favorite') },
				{ text: '+Задание на исполн.', callback: () => console.log('delete') }
			],
			actions: [
				{ title: 'Действие 3' },
				{ title: 'Действие 4' },
				{ title: 'Действие 5' }
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
		// changeBg () {
		// 	if (this.white) {
		// 		return 'wh'
		// 	} else if (this.grey) {
		// 		return 'gr'
		// 	} else if (!this.inlinePreview) {
		// 		return 'only'
		// 	} else return null
		// },
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
		FilePreview,
		Status,
		MainTab,
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
		setWhite () {
			this.grey = false
			this.white = !this.white
		},
		setGrey () {
			this.white = false
			this.grey = !this.grey
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
	/* width: 100%; */
	width: 50%;
	padding: 1.5rem;
	padding-top: 0;
	height: 100%;
	overflow: auto;
	&.only {
		height: auto;
		width: 1300px;
		max-width: 1200px;
		margin: 0 auto;
		/* background: #ccc; */
	}
}
@media only screen and (max-width: 960px) {
	.cardd {
		width: 100%;
		margin-right: 1rem;
	}
}
.no-scroll {
	height: auto;
	max-width: 1200px;
	margin: 0 auto;
}
.zag {
	color: black;
	text-align: left;
	font-size: 1.4rem;
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
	height: calc(100vh - 100px);
	position: relative;
	&.only {
		height: auto;
	}
	&.wh {
		background: #fff;
	}
	&.gr {
		background: #e5f6ff;
	}
}
.descr {
	margin: 1rem auto;
}
.round {
	border-radius: 4px;
	background: #fff;
}

.myfab {
	display: inline-block;
	z-index: 10;
}
.v-speed-dial--is-active i.my {
	transform: rotate(45deg);
}
.forpdf {
	height: 100%;
	overflow: auto;
}
.pdf {
	width: 100%;
}
.num {
	font-size: 1.1rem;
}
.seg {
	width: 260px;
	display: inline-block;
	margin-right: 5px;
	margin-bottom: 5px;
	height: 38px;
}
</style>
