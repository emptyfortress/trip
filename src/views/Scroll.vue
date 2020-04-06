<template lang="pug">
div
	v-btn(depressed color="info" @click="group = !group").mr-2 Группировка
	v-btn(depressed color="info" @click="filter = !filter") Фильтры
	.zag Вариант 1. Скролл внутри грида
	p.text-center.
		Грид фиксированной высоты, скролл происходит внутри<br><span class="strong">Ниже есть еще контент и еще один грид</span>

	.d-flex
		v-slide-x-transition(mode="out-in")
			.group(v-show="group")
				.test
					h3 Группы
						span 8
					v-btn(icon @click="group = !group").clo
						v-icon mdi-close
					br
					tree(ref="tree" :data="list" :options="treeOptions" @node:selected="onNodeSelected").tree-group
		v-simple-table(fixed-header :height="height").ftable
			template(v-slot:default)
				thead
					tr
						th(v-for="n in 4" :key="n") One
					tr(v-show="filter")
						th(v-for="n in 4" :key="n").filtr
							v-text-field
				tbody
					tr(v-for="n in num" :key="n")
						td(v-for="n in 4" :key="n") Some data here
	//- br
	//- br
	//- p Здесь еще какой-то контент. Предмет деятельности непредвзято заполняет примитивный даосизм. Освобождение выводит примитивный смысл жизни. Гедонизм заполняет дедуктивный метод. Отвечая на вопрос о взаимоотношении идеального ли и материального ци, Дай Чжень заявлял, что интеллект преобразует бабувизм.
	//- br
	//- h3.text-center Второй грид
	//- v-simple-table(fixed-header :height="height").ftable
	//- 	template(v-slot:default)
	//- 		thead
	//- 			tr
	//- 				th(v-for="n in 4" :key="n") Second
	//- 		tbody
	//- 			tr(v-for="n in 150" :key="n")
	//- 				td(v-for="n in 4" :key="n") Some data here
	//- br
	//- p Здесь еще какой-то контент. Предмет деятельности непредвзято заполняет примитивный даосизм. Освобождение выводит примитивный смысл жизни. Гедонизм заполняет дедуктивный метод. Отвечая на вопрос о взаимоотношении идеального ли и материального ци, Дай Чжень заявлял, что интеллект преобразует бабувизм.

</template>

<script>
import list from '@/list.js'
import mixin from '@/mixin.js'

export default {
	data () {
		return {
			num1: 50,
			group: false,
			filter: false,
			list: list
		}
	},
	computed: {
		height () {
			return (window.innerHeight - 280)
		}
	},
	mixins: [mixin]
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-data-table.v-data-table--fixed-header.ftable thead th {
	background: #dedede;
	border-collapse: collapse;
	border: 1px solid #fff;
	&.filtr {
		background: lighten($yellow, 20%);
	}
}
.ftable {
	width: 100%;
	border-bottom: 1px solid #ccc;
}

.full {
	width: 100%;
	background: #fff;
	transition: all .3s ease;
	th {
		background: #dedede;
		height: 2.5rem;
		position: sticky;
		top: 0;
		font-weight: 600;
		font-size: .75rem;
		color: #666;
	}
	.ro {
		height: 3rem;
		&:hover {
			background: #eee;
		}
		td {
			border-bottom: 1px solid #eee;
		}
	}
}
.group {
	width: 250px;
	margin-right: .5rem;
	.test {
		position: sticky;
		top: 0;
		background: white;
		box-shadow: 0 1px 3px #00000055;
		.tree-group {
			height: 500px;
			overflow: auto;
		}
	}
}

h3 {
	cursor: pointer;
	padding: 1rem;
	span {
		margin-left: 1rem;
		font-size: .9rem;
		background: $info;
		color: white;
		padding: .1rem .5rem;
		border-radius: 3rem;
	}
	.v-icon {
		margin-left: 2rem;
		vertical-align: bottom;
		color: $info;
	}
}
.clo {
	position: absolute;
	top: .6rem;
	right: .6rem;
}
.treenode {
	width: 100%;
}
.tree-children {
	padding-left: -24px !important;
}
.v-text-field {
	margin-top: .2rem;
	padding-top: 0;
}
.strong {
	font-weight: bold;
	color: darkred;
}
</style>
