<template lang="pug">
.sticky(v-scroll="onScroll")
	v-row(justify="space-between")
		div
			v-btn(depressed color="info" @click="group = !group").mr-2 Группировка
			v-btn(depressed color="info" @click="filter = !filter") Toolbar
		v-switch(v-model="lazy" label="Ленивая подгрузка")

	.zag Вариант 2. Липкий заголовок таблицы
	p.text-center Скролл общий для страницы
	br

	.page Страницы:
		span(v-for="(item, index) in pages" :class="current === index ? 'active' : ''" @click="topage(index)").pag {{ index + 1 }}
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
					th(v-for="(item,index) in 5"
						@mouseover="showByIndex = index" @mouseout="showByIndex = null"
						)
						v-icon(v-if="sortByIndex === index").sort mdi-arrow-down
						span One
						v-icon(v-if="index === smallFilter" color="#8b0000").sort.ml-2 mdi-filter
						.over(v-show="showByIndex === index")
							v-icon(@click="sortByIndex = index") mdi-arrow-down
							v-icon(@click="filterByIndex = index") mdi-filter-outline
							v-icon mdi-pin-outline
							v-icon mdi-eye-off

						v-card.quick.elevation-3(v-show="filterByIndex === index")
							v-text-field(autofocus clearable)
							v-card-actions
								v-btn(text color="primary" @click="filterByIndex = null; smallFilter = null") Отмена
								v-spacer
								v-btn(text color="primary" @click="filterByIndex = null; smallFilter = index") Применить
			tbody
				tr(v-for="(item, i) in num" :key="i").ro
					td(v-for="n in 5")
						v-lazy(:options="{threshold: .5}"  transition="fade-transition" v-if="lazy")
							span Тут некоторые данные
						span(v-else) Тут некоторые данные
	br
	br
</template>

<script>
import list from '@/list.js'
import mixin from '@/mixin.js'

export default {
	data () {
		return {
			lazy: false,
			group: false,
			offsetTop: 0,
			num1: 50,
			list: list,
			filter: false,
			smallFilter: null,
			showByIndex: null,
			filterByIndex: null,
			sortByIndex: null,
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false
			}
		}
	},
	watch: {
		filterByIndex: (val, oldVal) => {
			console.log(val)
		}
	},
	methods: {
		onScroll (e) {
			this.offsetTop = window.pageYOffset
		},
		topage (e) {
			this.$vuetify.goTo(e * this.windHeight)
		}
	},
	computed: {
		windHeight () {
			return (document.documentElement.clientHeight - 114)
		},
		pages () {
			return Math.ceil(this.num * 48 / this.windHeight)
		},
		current () {
			return Math.floor(this.pages / ((this.num * 48 - this.windHeight) / this.offsetTop))
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
	tr {
		background: #fff;
	}
	th {
		cursor: pointer;
		background: #dedede;
		height: 2.5rem;
		position: sticky;
		top: 45px;
		font-weight: 600;
		font-size: .75rem;
		color: #666;
		text-align: left;
		padding: 0 1rem;
		&.lip {
			top: 84px;
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
	/* margin-top: .2rem; */
	font-weight: 500;
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
.page {
	position: sticky;
	top: 0;
	text-align: right;
	font-size: 1rem;
	font-weight: 400;
	background: #e4e4e0;
	line-height: 44px;
	height: 44px;
	border-bottom: 1px solid #fff;
}
.pag {
	font-size: .8rem;
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
		font-size: 1.0rem;
		padding: 5px 7px;
		border-color: #aaa;
	}
}
.quick {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	min-width: 200px;
	padding: 0 1rem;
	padding-top: 1rem;
}
.over {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: right;
	margin-right: .5rem;
	background: rgba(255,255,255, .6);
	line-height: 41px;
	i {
		margin-right: 4px;
		color: #999;
		&:hover {
			color: black;
		}
	}
}
.sort {
	font-size: 14px;
	margin-right: 5px;
}
</style>
