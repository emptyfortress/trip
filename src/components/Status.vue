<template lang="pug">
.statu
	span {{ title }}
</template>

<script>

export default {
	props: ['title'],
	data () {
		return {
			items: [
				{ title: 'Взять в работу' },
				{ title: 'Отправить на согласование' },
				{ title: 'Отправить на ознакомление' },
				{ title: 'Делегировать' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.statu {
	display: inline-block;
	font-size: 1.1rem;
	white-space: nowrap;
	text-align: center;
	padding: .5rem;
	cursor: pointer;
	/* color: $link; */
	span {
		letter-spacing: .5rem;
		border-top: 0.1rem solid #aaa;
		border-bottom: 0.1rem solid #aaa;
		display: inline-block;
		padding: .2rem 0;
		text-transform: uppercase;
		transition: .3s ease all;
	}
}
</style>
