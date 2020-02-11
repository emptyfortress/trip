<template lang="pug">
.newcard
	v-scale-transition(mode="out-in")
		v-skeleton-loader(v-if="lo" height="700" width="500" type="image" ).skel
		.doc(v-if="!lo")
	.attr
		.btgroup
			v-btn(color="primary" depressed) В работу
			v-btn(color="primary" depressed) Согласовать
			v-btn(color="primary" depressed) Делегировать
			v-btn(color="primary" depressed) Отказать
		.status
			span {{ item[0].status }}
		br
		.zag {{ item[0].title }}

</template>

<script>

export default {
	data () {
		return {
			lo: true,
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
	},
	created () {
		let that = this
		setTimeout(function () {
			that.lo = false
		}, 1000)
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.newcard {
	display: flex;
	margin-top: 2rem;
	align-items: flex-start;
	div {
		background: #eee;
	}
	.attr {
		flex-grow: 1;
		min-width: 300px;
		width: 300px;
		height: 333px;
		margin-left: 1rem;
	}
	.right {
		width: 150px;
		.v-btn {
			margin-bottom: .3rem;
		}
	}
	.doc {
		min-width: 400px;
		width: 500px;
		height: 700px;
		resize: both;
		overflow: auto;
		background: #fff;
		box-shadow: 0px 0px 3px #333333aa;
	}
	.btgroup {
		margin-bottom: 1.5rem;
		.v-btn {
			margin-bottom: .25rem;

		}
		.v-btn:not(:last-child) {
			margin-right: .25rem;
		}
	}
}

.zag {
	color: black;
	text-align: left;
	font-size: 1.5rem;
}

.skel {
	width: 500px;
	height: 700px;
	/* margin: 1rem auto; */
}
</style>
