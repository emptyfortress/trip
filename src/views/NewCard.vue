<template lang="pug">
div
	v-col(cols="12" col="12")
		v-row(justify="space-between")
			v-col(cols="12" :sm="12" :md="2" :lg="2" class="order-md-last text-md-right" ).status
				span В работе
			v-col
				.zag {{ item[0].title }}
	.newcard
		.my one
		.col-3 one
		.right
			v-btn(color="primary" block depressed) В работу
			v-btn(color="primary" block depressed) Согласовать
			v-btn(color="primary" block depressed) Делегировать
			v-btn(color="primary" block depressed) Отказать

</template>

<script>

export default {
	data () {
		return {
			item: [
				{
					'id': 0,
					'number': '№ 122',
					'unread': false,
					'selected': false,
					'author': '<Я>',
					'executor': 'Орлов П.Ф.',
					'status': 'Не начато',
					'deadline': '2018-08-28',
					'created': '2018-08-05',
					'title': 'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
					'files': '3'
				}
			]

		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.cont {
	margin-top: 3rem;
}

.newcard {
	display: flex;
	position: relative;
	justify-content: space-between;
	div {
		background: #eee;
		height: 300px;
	}
	.right {
		width: 150px;
		.v-btn {
			margin-bottom: .3rem;
		}
	}
	.my {
		flex-grow: 1;
		margin: 0 1rem;
	}
}

.zag {
	color: black;
	text-align: left;
	font-size: 1.5rem;
	span {
		opacity: .5;
	}
}

</style>
