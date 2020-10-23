<template lang="pug">
.all
	hr.line
	.tool
		.groupoperation
		.toolcontent
			template(v-for="(item, index) in buttons")
				v-tooltip( bottom )
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on" @click="click(item.click)")
							i(:class="item.icon")
					span {{item.text}}
		//- .view
		//- 	v-select(:items="views" dense value="Настроено в УД")
		//- .page Страницы:
		//- 	span(v-for="(item, index) in pages" :class="current === index ? 'active' : ''" @click="topage(index)").pag {{ index + 1 }}
		//- 	span.mx-2 ...
		//- 	span.pag.mr-2 100
</template>

<script>

export default {
	props: ['current'],
	data () {
		return {
			num: 100,
			buttons: [
				// { text: 'Выбрать', icon: 'icon-select', click: '' },
				{ text: 'Прочитать все', icon: 'icon-read', click: '' },
				{ text: 'Группировка', icon: 'icon-multi', click: 'groupped' },
				// { text: 'Поиск', icon: 'icon-search', click: '' },
				{ text: 'Обновить', icon: 'icon-refresh', click: '' },
				{ text: 'Экспорт', icon: 'icon-xls', click: '' },
				{ text: 'Reset', icon: 'icon-empty', click: '' },
				{ text: 'Настройки', icon: 'icon-setup', click: '' }
			],
			views: [
				'Это представление',
				'Просрочено',
				'Все скопром',
				'Настроено в УД'
			]
		}
	},
	computed: {
		pages () {
			return Math.floor((this.num * 48) / this.windHeight)
		},
		windHeight () {
			return document.documentElement.clientHeight - 114
		}
	},
	methods: {
		topage (e) {
			this.$vuetify.goTo(e * this.windHeight)
		},
		click (e) {
			this.$emit(e)
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.page {
	font-size: 1rem;
	font-weight: 400;
	background: #e4e4e0;
	padding: 10px 25px;
	height: 44px;
	text-align: right;
	padding-right: 0;
}
.pag {
	font-size: 0.8rem;
	border: 1px solid #ccc;
	margin-right: 3px;
	padding: 4px 5px;
	cursor: pointer;
	border-radius: 2px;
	&:first-child {
		margin-left: 1rem;
	}
	&.active {
		background: #fff;
		font-size: 1rem;
		padding: 5px 7px;
		border-color: #aaa;
	}
}
.all {
	background: #e4e4e0;
	/* border-top: 1px solid #ccc; */
	position: sticky;
	top: 0;
}
.tool {
	display: flex;
	justify-content: space-between;
	.toolcontent {
		height: 44px;
		line-height: 44px;
		.v-btn {
			margin-right: .7rem;

		}
		i {
			font-size: 1.2rem;
			margin-left: -3px;
		}
	}
	.view {
		height: 44px;
		width: 300px;
		transform: translateY(5px);
		/* background: red; */
	}
}
.line {
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.23);
	border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
</style>
