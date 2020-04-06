<template lang="pug">
.sticky
	v-btn(depressed color="info" @click="group = !group").mr-2 Группировка
	v-btn(depressed color="info" @click="filter = !filter") Фильтры
	.zag Вариант 2. Липкий заголовок таблицы

	p.text-center Скролл общий для страницы<br><span class="strong">Ниже есть еще контент и еще один грид</span>
	br
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
		table.full
			thead
				tr
					th(v-for="n in 5") One
				tr(v-show="filter")
					th(v-for="n in 5").lip
						v-text-field
			tbody
				tr(v-for="(item, i) in num" :key="i").ro
					td(v-for="n in 5") Тут некоторые данные
	br
	br
	//- h3.text-center Второй грид
	//- table.full
	//- 	thead
	//- 		tr
	//- 			th(v-for="n in 5") Second
	//- 	tbody
	//- 		tr(v-for="(item, i) in num1" :key="i").ro
	//- 			td(v-for="n in 5") Content

</template>

<script>
import list from '@/list.js'
import mixin from '@/mixin.js'

export default {
	data () {
		return {
			group: false,
			num1: 50,
			list: list,
			filter: false,
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false
			}
		}
	},
	mixins: [mixin]
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.sticky {
	margin: 0 1rem;
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
		&.lip {
			top: 39px;
			background: lighten($yellow, 20%);
			padding: 0 1rem;
		}
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
.v-text-field {
	margin-top: .2rem;
	padding-top: 0;
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
.strong {
	font-weight: bold;
	color: darkred;
}
</style>
