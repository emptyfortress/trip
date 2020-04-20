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

</template>

<script>

export default {
	props: ['current'],
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
	position: sticky;
	top: 0;
}
.tool {
	display: flex;
	justify-content: space-between;
	.toolcontent {
		height: 44px;
		line-height: 44px;
		i {
			font-size: 1.2rem;
			margin-left: -3px;
		}
	}
}
</style>
