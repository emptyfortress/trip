<template lang="pug">
v-navigation-drawer(v-model="preview" app right :width="fullWindow ? '100%' : '50%' " disable-resize-watcher)
	div(v-if="previewMode === 1")
		v-app-bar(dark :color="color" absolute).pr-2
			v-spacer
			.subtitle-1 Выберите контент для показа
			v-spacer
			v-btn( href="" icon @click="showPreview")
				v-icon mdi-close
		br
		v-col(cols="6" offset="3").mt-8
			v-card(hover v-for="item in content" :key="item.title").cardselect
				v-list-item
					v-list-item-content
						v-list-item-title.tit {{ item.title }}
					v-list-item-avatar
						v-icon(dark) {{ item.icon }}

	div(v-else)
		v-app-bar(dark :color="color" absolute).pr-2
			v-col
				v-select(:items="files" value="Договор с ООО Ромашка.doc" dark).sel
			v-spacer
			input(type="text" value="1").page
			span.pages / 3
			v-spacer
			v-btn(icon @click="toggleChat" :color="chat ? '#00ff00' : 'white' ").ml-4
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
		v-skeleton-loader(:loading="changing" transition="scale-transition" height="80%" width="60%" type="image" ).skel
			.placeholder(v-for="n in 1" :key="n" )
				br
				br
				br
				.text Документик
		v-skeleton-loader(:loading="changing" transition="scale-transition" height="80%" width="60%" type="image" ).skel
			.placeholder(v-for="n in 1" :key="n" )
				br
				br
				br
				.text Документик

		v-btn(fab small depressed color="white").plus
			v-icon mdi-plus
		v-btn(fab small depressed color="white").minus
			v-icon mdi-minus

		v-scale-transition(origin="top left")
			Comments(v-if="chat" :myx="20" :myy="75")

</template>

<script>
import Comments from '@/components/Comments'

export default {
	data () {
		return {
			color: '#405e82',
			chat: false,
			content: [
				{ title: 'Справочник сотрудников', icon: 'mdi-account-tie' },
				{ title: 'Справочник контрагентов', icon: 'mdi-account-details' },
				{ title: 'Папка', icon: 'mdi-folder-open-outline' },
				{ title: 'Календарь', icon: 'mdi-calendar-month' },
				{ title: 'Командировки', icon: 'mdi-airplane' },
				{ title: 'Цели', icon: 'mdi-bullseye-arrow' }

			],
			files: [
				'Договор с ООО Ромашка.doc',
				'Приложение к договору.doc',
				'Расчет цены.xsl',
				'План-график.xsl'
			],
			comm: [
				{
					title: 'Орлов П.С.',
					subtitle: "<span class='text--primary'>Сегодня, 12:03</span> &mdash; Исследование латерально дает показатель адсорбируемости натрия."
				},
				{ divider: true, inset: false },
				{
					title: 'Синицын Г.К.',
					subtitle: "<span class='text--primary'>Сегодня, 14:10</span> &mdash; При переходе к следующему уровню организации почвенного покрова желтозём стекает в почвенно-мелиоративный бурозём."
				},
				{ divider: true, inset: false }
			],
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}
	},
	computed: {
		previewMode () {
			return this.$store.getters.previewMode
		},
		changing () {
			return this.$store.getters.changing
		},
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
		Comments
	},
	methods: {
		toggleChat () {
			this.chat = !this.chat
		},
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
		// onResize: function (x, y, width, height) {
		// 	this.x = x
		// 	this.y = y
		// 	this.width = width
		// 	this.height = height
		// },
		// onDrag: function (x, y) {
		// 	this.x = x
		// 	this.y = y
		// }
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
	/* width: 60%; */
	/* height: 80%; */
	height: 700px;
	margin: 1rem auto;
	background: #fff;
	transition: .2s ease all;
}
.text {
	font-size: 3.0rem;
	text-align: center;
	color: grey;
}
.plus {
	position: absolute;
	bottom: 7rem;
	right: 2rem;
}
.minus {
	position: absolute;
	bottom: 4rem;
	right: 2rem;
}
.skel {
	width: 60%;
	height: 700px;
	margin: 1rem auto;
}
.theme--light.v-card.cardselect {
	background: $dark;
	margin-top: 1rem;
	padding: 0 1rem;
	/* color: #ffffffaa; */
	/* border: 1px dotted blue; */
	.tit {
		color: #ffffffaa;
		font-size: 1.2rem;
		font-weight: 300;
	}
}
</style>
