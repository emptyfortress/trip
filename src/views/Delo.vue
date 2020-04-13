<template lang="pug">
.all
	drag-zone(v-if="inlinePreview").zone
		drag-content(v-show="$vuetify.breakpoint.mdAndUp").content.one
			v-slide-y-transition(mode="out-in")
				v-skeleton-loader(v-if="lo" height="100%" width="100%" type="image" ).skel
				FilePreview(:file="file" v-if="!lo")

		drag-handle(v-show="$vuetify.breakpoint.mdAndUp" ).hand
			div
		drag-content.cardd
			.type
				v-chip(color="#ccc" small) Входящий
				Status(title="не начато")
			br
			.zag.mb-4 {{ item[0].title }}
			.btgroup
				v-btn(color="primary" depressed) Зарегистрировать
				v-btn(color="primary" depressed) Действие 1
				v-btn(color="primary" depressed) Действие 2

				v-menu( offset-y transition="slide-y-transition" )
					template( v-slot:activator="{ on }" )
						v-btn(icon v-on="on")
							v-icon mdi-dots-horizontal
					v-list
						v-list-item( v-for="(item, index) in actions" :key="index" @click="" )
							v-list-item-title {{ item.title }}

			v-tabs.mytab
				v-tab Главная
				v-tab Обсуждение
				v-tab История
				v-tab-item(key="1")
					.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
					MainTab
				v-tab-item(key="2")
					.zag.mt-7 Здесь обсуждение
					ul
						li(v-for="n in 15") Some chat entry
				v-tab-item(key="3")
					.zag.mt-7 Здесь история
					ul
						li(v-for="n in 10") Some history entry

	.pa-4(v-else)
		.type
			v-chip(color="#ccc" small) Входящий
			Status(title="не начато")
		br
		.zag.mb-4 {{ item[0].title }}
		.btgroup
			v-btn(color="primary" depressed) Зарегистрировать
			v-btn(color="primary" depressed) Действие 1
			v-btn(color="primary" depressed) Действие 2

			v-menu( offset-y transition="slide-y-transition" )
				template( v-slot:activator="{ on }" )
					v-btn(icon v-on="on")
						v-icon mdi-dots-horizontal
				v-list
					v-list-item( v-for="(item, index) in actions" :key="index" @click="" )
						v-list-item-title {{ item.title }}

		v-tabs.mytab
			v-tab Главная
			v-tab Обсуждение
			v-tab История
			v-tab-item(key="1")
				.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
				MainTab
			v-tab-item(key="2")
				.zag.mt-7 Здесь обсуждение
				ul
					li(v-for="n in 15") Some chat entry
			v-tab-item(key="3")
				.zag.mt-7 Здесь история
				ul
					li(v-for="n in 10") Some history entry

	v-scale-transition(origin="top left")
		Comments(v-show="chat" :myx="20" :myy="60" style="z-index: 100")

</template>

<script>
import Comments from '@/components/Comments'
import FilePreview from '@/components/FilePreview'
import Status from '@/components/Status'
import MainTab from '@/components/MainTab'
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'

export default {
	data () {
		return {
			color: '#dedede',
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
	padding: 2rem;
	height: 100%;
	overflow: auto;
}
@media only screen and (max-width: 960px) {
	.cardd {
		width: 100%;
		margin-right: 1rem;
		background: #ccc;
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
.bar {
	overflow: hidden;
}
.type {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.statu {
	font-size: 1.1rem;
	white-space: nowrap;
	text-align: center;
	padding: .5rem;
	cursor: pointer;
	span {
		letter-spacing: .5rem;
		border-top: 0.1rem solid #ccc;
		border-bottom: 0.1rem solid #ccc;
		display: inline-block;
		padding: .2rem 0;
		text-transform: uppercase;
	}
	&:hover {
		background: #ddf0ff;
	}
}
.descr {
	margin: 1rem auto;
}
</style>
