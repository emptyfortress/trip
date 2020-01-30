<template lang="pug">
v-row(justify="center").mx-3.mt-5
	v-col(md="12" lg="9")
		v-row(justify="space-between")
			v-col(cols="12" md="12" lg="2" order-lg="last").status.text-lg-right
				span {{ card.status }}
			v-col
				.zag {{ card.title }}
		v-tabs.mytab
			v-tab Главная
			v-tab Подчиненные задания
			v-tab История
			v-tab-item(key="1")
				h1 Card id: {{ card.id }}
			v-tab-item(key="2")
				span Задания
			v-tab-item(key="3")
				span История
</template>

<script>
import data from '@/data.js'

export default {
	data () {
		return {
			items: data
		}
	},
	computed: {
		card () {
			let a = this.$route.params.id
			return this.items.filter(item => item.id === parseInt(a))[0]
		}
	}

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zag {
	color: black;
	text-align: left;
	font-size: 1.5rem;
	span {
		opacity: .5;
	}
}
.status {
	font-size: 1.1rem;
	text-align: left;
	white-space: nowrap;
	span {
		transform: rotate(-3deg);
		color: $info;
		font-weight: 700;
		border: 0.1rem solid $info;
		display: inline-block;
		padding: 0.20rem 0.9rem;
		text-transform: uppercase;
		border-radius: .3rem;
		font-family: 'Courier';
		/* -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png'); */
		-webkit-mask-image: url('../assets/img/grunge.png');
		-webkit-mask-size: 944px 604px;
		mix-blend-mode: multiply;
		margin-top: .6rem;
	}
}
.big {
	margin-top: 4rem;
	i {
		font-size: 3.0rem;
		color: #888;
	}
}
</style>
