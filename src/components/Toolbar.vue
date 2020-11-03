<template lang="pug">
.all(:class="{ edit : editMode}")
	hr.line
	.tool(v-if="!editMode")
		.d-flex
			v-slide-x-transition(mode="out-in" hide-on-leave)
				.total(v-if="selected === 0")
					span Всего:
					span(:class="but" @click="$emit('reset')").font-weight-bold.ml-3 438
					v-slide-x-transition(mode="out-in" hide-on-leave)
						span.ml-5(v-if="smallFilter !== null") Показано:
					v-slide-x-transition(mode="out-in" hide-on-leave)
						span(v-if="smallFilter !== null").font-weight-bold.ml-3 48
			v-slide-x-reverse-transition(mode="out-in")
				.total(v-if="selected > 0")
					span Выбрано:
					v-btn(icon small @click="$emit('reset2')").mx-3
						v-icon mdi-close
					span.font-weight-bold {{ selected }}
					.ml-6
						v-btn(depressed small) Прочитать
						v-btn(depressed small).ml-2 В работу
						v-btn(depressed small).ml-2 Делегировать
						v-btn(icon small).ml-4
							v-icon mdi-dots-vertical
		.toolcontent
			template(v-for="(item, index) in buttons")
				v-tooltip( bottom )
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on" @click="click(item.click)")
							i(:class="item.icon")
					span {{item.text}}
	.tool(v-if="editMode").pr-3
		.total.text-uppercase Редактирование таблицы
		.toolcontent
			v-btn(depressed text @click="$emit('edit')") Отмена
			v-btn(depressed text @click="$emit('edit')") Сохранить
</template>

<script>

export default {
	props: ['current', 'selected', 'smallFilter'],
	data () {
		return {
			num: 100,
			buttons: [
				{ text: 'Прочитать все', icon: 'icon-read', click: '' },
				{ text: 'Группировка', icon: 'icon-multi', click: 'groupped' },
				{ text: 'Обновить', icon: 'icon-refresh', click: '' },
				{ text: 'Экспорт', icon: 'icon-xls', click: '' },
				{ text: 'Reset', icon: 'icon-kill-setup', click: '' },
				{ text: 'Настройки', icon: 'icon-setup', click: '' },
				{ text: 'Редактировать', icon: 'icon-edit', click: 'edit' }
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
		editMode () {
			return this.$store.getters.editMode
		},
		but () {
			if (this.smallFilter !== null) {
				return 'click'
			} else return ''
		},
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
	z-index: 200;
	top: 0;
	&.edit {
		background: pink;
	}
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
.total {
	line-height: 42px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
}
.big {
	font-size: 1.3rem;
}
.click {
	padding: 2px 5px;
	line-height: 20px;
	border: 1px dotted $info;
	color: $linkcolor;
	border-radius: 5px;
	cursor: pointer;
	background: #f6f6f4;
	&:hover {
		background: #fff;
	}
	&:active {
		background: #f3f4f4;
	}
}
</style>
