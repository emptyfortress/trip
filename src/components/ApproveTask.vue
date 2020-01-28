<template lang="pug">
.approve
	v-row
		v-col
			.buttonsrow
				v-btn(depressed color="primary") В работу
				v-btn(depressed color="primary") Согласовать
				v-btn(depressed) Делегировать
				v-btn(depressed) Отклонить
			.d-flex.flex-row
				table.attributes
					tr(v-for="item in attr" :key="item.id")
						td.attr {{ item.attr }}
						td {{ item.value }}
				.ml-8
					div Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
					.link Карточка для согласования
			v-expansion-panels(flat value="0").mt-5.fl
				v-expansion-panel(value="true")
					v-expansion-panel-header Ход согласования
					v-expansion-panel-content(value="true")
						hr(color="#eee")
						v-breadcrumbs(:items="crumbs")
						.etap Этап 1. Согласование (последовательно)
						v-simple-table
							template(v-slot:default)
								thead
									tr.myhead
										th(v-for="item in headers").text-left {{ item.text}}
								tbody
									tr(v-for="item in table" :key="item.fio").my
										td(width="130").nowrap {{ item.fio }}
										td(width="150") {{ item.decision }}
										td.nowrap {{ item.date }}
										td {{ item.comment }}
										td

		v-col(cols="12" lg="3" md="4" sm="12")
			v-card(flat hover).ful
				v-row(justify="space-between").mx-1
					.tit
						i.icon-forum.mr-3
						| Обсуждение
					v-btn(text icon)
						i.icon-up
				.action
					v-text-field(label="Оставить комментарий")
	v-card(flat).all

</template>

<script>
import trips from '@/trips.js'

export default {
	data () {
		return {
			trips: trips,
			attr: [
				{ id: 0, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 1, attr: 'Исполнитель:', value: 'Пуцин С.В.' },
				{ id: 2, attr: 'Срок:', value: '31.01.2020' }
			],
			crumbs: [
				{ text: 'Циклы согласования:', disabled: true, link: true },
				{ text: '1 цикл', disabled: false, href: '/approve' },
				{ text: '2 цикл', disabled: true, link: true }
			],
			headers: [
				{ text: 'Согласующий', value: 'fio' },
				{ text: 'Решение', value: 'decision' },
				{ text: 'Дата', value: 'date' },
				{ text: 'Комментарий', value: 'comment' },
				{ text: 'Правки' }
			],
			table: [
				{ fio: 'Дроздова С.П.', decision: 'Добавить согласующих', date: '23.12.2020', comment: 'Требуется согласование юридического отдела. Указан доп.согласующий Петров Г.М.' },
				{ fio: 'Петров Г.М.', decision: 'Согласовано с замечаниями', date: '23.12.2020', comment: '' },
				{ fio: 'Синицына А.П.', decision: 'Отклонено', date: '23.12.2020', comment: '' },
				{ fio: 'Орлов П.П.', decision: 'Ожидает решения', date: '', comment: '' }
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
		test () {
			console.log('alskdj')
		}
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
		bottom: .5rem;
		left: 0;
		right: 0;
		height: 50px;
	}
}
.all {
	background: #ccc;
	height: 300px;
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
.etap {
	margin-bottom: .5rem;
	font-weight: 500;
}
.nowrap {
	white-space: nowrap;
}
.myhead {
	th {
		background: #eee;
		height: 30px;
		border: 1px solid white
	}
}
.my td {
	color: #666;
	/* padding: 3px 5px; */
}

</style>
