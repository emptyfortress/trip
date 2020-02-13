<template lang="pug">
.approve
	v-row
		v-col
			.buttonsrow
				v-btn(depressed color="primary") В работу
				v-btn(depressed color="primary") Согласовать
				v-btn(depressed outlined color="primary") Делегировать
				v-btn(color="pink darken-4" depressed outlined) Отклонить
			.d-flex.flex-row
				table.attributes
					tr(v-for="item in attr" :key="item.id")
						td.attr {{ item.attr }}
						td {{ item.value }}
				.ml-8
					div Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
					.link Карточка для согласования

		v-col(cols="12" lg="3" md="4" sm="12")
			v-card(flat hover).ful
				v-row(justify="space-between").mx-1
					.tit
						i.icon-forum.mr-3
						| Обсуждение (0)
					v-btn(text icon)
						i.icon-up
				.action
					v-text-field(label="Оставить комментарий")

	Hod
	TripCard
	br
	br
	br
	br
	br

</template>

<script>
import trips from '@/trips.js'
import TripCard from '@/components/TripCard'
import Hod from '@/components/Hod'

export default {
	data () {
		return {
			trips: trips,
			attr: [
				{ id: 0, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 1, attr: 'Исполнитель:', value: 'Пуцин С.В.' },
				{ id: 2, attr: 'Срок:', value: '31.01.2020' },
				{ id: 3, attr: 'Аттрибут:', value: 'значение' },
				{ id: 4, attr: 'Аттрибут:', value: 'значение' }
			]
		}
	},
	computed: {
		trip () {
			let a = this.$route.params.id
			return this.trips.filter(item => item.id === parseInt(a))[0]
		}
	},
	methods: {
		doNothing (evt) {
			evt.stopPropagation()
		}
	},
	components: {
		TripCard,
		Hod
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.attributes {
	font-size: .9rem;
	border-right: 1px solid #ccc;
	td {
		padding: 0 0.9rem;
		white-space: nowrap;
	}
}
.attr {
	opacity: .6;
}
.link {
	margin-top: 1rem;
	color: #1976d2;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
.buttonsrow {
	margin-bottom: 2rem;
	.v-btn {
		margin-right: .5rem;
	}
}
.ful {
	height: 100%;
	border: 1px solid #cdcdcd;
	padding-top: 0;
	position: relative;
	.tit {
		margin-top: .5rem;
		margin-left: .5rem;
		font-size: 1.1rem;
	}
	.action {
		margin: 0 1rem;
		position: absolute;
		/* bottom: 35%; */
		bottom: 1rem;
		left: 0;
		right: 0;
		height: 50px;
	}
}
.tdhead {
	font-size: .8rem;
	font-weight: 400;
	background: #eee;
	padding: 4px 0;
}
table {
	tr {
		border-bottom: 1px solid #eee;
	}
	td {
		font-size: .9rem;
		padding: .5rem;
	}
}
</style>
