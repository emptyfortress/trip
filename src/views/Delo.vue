<template lang="pug">
.all(:class="inlinePreview ? '' : 'only'")
	drag-zone.zone.pt-5
		drag-content(v-show="$vuetify.breakpoint.mdAndUp && inlinePreview").content.one
			v-slide-y-transition(mode="out-in")
				v-skeleton-loader(v-if="lo" height="100%" width="100%" type="image" ).skel
			FilePreview(:file="file" v-show="!lo")

		drag-handle(v-show="$vuetify.breakpoint.mdAndUp && inlinePreview" ).hand
			div
		drag-content.cardd(:class="inlinePreview ? '' : 'only'")
			Status(title="не начато")
			br
			.zag.mb-4 {{ item[0].title }}
			.btgroup
				v-btn.elevation-1 Зарегистрировать
				v-btn(color="docolor" dark ) На ознакомление
				v-btn(color="docolor" dark ) На согласование
				v-btn(icon).round.elevation-1
					v-icon mdi-dots-horizontal

			v-tabs(v-model="tt").mytab
				v-tab Главная
				v-tab Ход согласования
				v-tab-item(key="1")
					MainTab
				v-tab-item(key="2")
					Hod

	v-speed-dial(v-model="fab" fixed bottom right transition="slide-y-reverse-transition" direction="top").myfab
		template(v-slot:activator)
			v-btn(color="dark" dark fab large)
				v-icon.my mdi-plus
		v-tooltip(left)
			template(v-slot:activator="{ on }")
				v-btn(color="taskcolor" dark fab small v-on="on") ГЗ
			span Группа заданий
		v-tooltip(left)
			template(v-slot:activator="{on}")
				v-btn(color="taskcolor" dark fab small v-on="on") ИСП
			span Задание на исполнение
		v-tooltip(left)
			template(v-slot:activator="{on}")
				v-btn(color="taskcolor" dark fab small v-on="on") ОЗН
			span Задание на ознакомление
		v-tooltip(left)
			template(v-slot:activator="{on}")
				v-btn(color="dark" dark fab small v-on="on")
					v-icon mdi-dots-horizontal
			span Выбрать
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
			tt: 0,
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
	width: 100%;
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
	/* background: yellow; */
	&.only {
		height: auto;
	}
}
.descr {
	margin: 1rem auto;
}
.round {
	border-radius: 4px;
	background: #fff;
}

.v-speed-dial--is-active i.my {
	transform: rotate(45deg);
}
</style>
