<template lang="pug">
.all
	.tool
		.toolcontent
			v-btn(icon)
				i.icon-select
			v-btn(icon)
				i.icon-read
			v-btn(icon @click="$emit('groupped')")
				i.icon-multi
		.page Страницы:
			span(v-for="(item, index) in pages" :class="current === index ? 'active' : ''" @click="topage(index)").pag {{ index + 1 }}
	v-fade-transition
		.group-top(v-show="group")
			.inf Перетащите сюда заголовок колонки для группировки

</template>

<script>

export default {
	props: ['current', 'group'],
	data () {
		return {
			num: 100
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
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #fff;
}
.tool {
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	.toolcontent {
		height: 44px;
		line-height: 44px;
		i {
			font-size: 1.2rem;
			margin-left: -3px;
		}
	}
}
.group-top {
	margin: 5px 0;
	width: 100%;
	display: block;
	padding: 1rem;
	border: 1px dashed $info;
	&:hover {
		background: #D9F9FF;
	}
}
.inf {
	font-style: italic;
	color: #666;
	font-size: .9rem;
}
</style>
