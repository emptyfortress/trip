<template lang="pug">
v-col(cols="12" lg="12" md="12" ).grey
	v-col(cols="12" col="12")
		v-row(justify="space-between")
			v-col(cols="12" :sm="12" :md="2" :lg="2" class="order-md-last text-md-right" ).status
				span В работе
			v-col
				.zag {{ item[0].title }}
	.newcard
		.my
		.attr one
		.right
			v-btn(color="primary" block depressed) В работу
			v-btn(color="primary" block depressed) Согласовать
			v-btn(color="primary" block depressed) Делегировать
			v-btn(color="primary" block depressed) Отказать

</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

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
	},
	components: {
		VueDraggableResizable
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.newcard {
	display: flex;
	justify-content: space-between;
	div {
		background: #eee;
		/* height: 300px; */
	}
	div:not(:last-child), div:not(:first-child) {
		margin: 0 .5rem;
	}
	.attr {
		min-width: 400px;
		flex-grow: 1;
	}
	.right {
		width: 150px;
		margin: 0 1rem;
		.v-btn {
			margin-bottom: .3rem;
		}
	}
	.my {
		width: 500px;
		resize: both;
		overflow: auto;
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
