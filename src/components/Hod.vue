<template lang="pug">
div
	hr(color="#eee")
	v-breadcrumbs(:items="crumbs" @click="doNothing")
	.etap Этап 1. Согласование (последовательно)
	v-simple-table
		template(v-slot:default)
			thead
				tr.myhead
					th(v-for="item in headers").text-left {{ item.text}}
			tbody
				tr(v-for="item in table" :key="item.fio").my
					td(width="150").nowrap.bl {{ item.fio }}
					td(width="250")
						v-icon(small :color="item.color") {{ item.icon }}
						span.ml-2 {{ item.decision }}
					td.nowrap {{ item.date }}
					td {{ item.comment }}
					td

</template>

<script>

export default {
	data () {
		return {
			headers: [
				{ text: 'Согласующий', value: 'fio' },
				{ text: 'Решение', value: 'decision' },
				{ text: 'Дата', value: 'date' },
				{ text: 'Комментарий', value: 'comment' },
				{ text: 'Правки' }
			],
			crumbs: [
				{ text: 'Циклы согласования:', disabled: true, link: true },
				{ text: '1 цикл', disabled: true, href: '' },
				{ text: '2 цикл', disabled: false, link: true }
			],
			table: [
				{ icon: 'mdi-account-plus', color: 'primary', fio: 'Дроздова С.П.', decision: 'Добавить согласующих', date: '23.12.2020', comment: 'Требуется согласование юридического отдела. Указан доп.согласующий Петров Г.М.' },
				{ icon: 'mdi-message-outline', color: 'primary', fio: 'Петров Г.М.', decision: 'Согласовано с замечаниями', date: '23.12.2020', comment: 'Нужно изменить акт' },
				{ icon: 'mdi-do-not-disturb', color: 'red', fio: 'Синицына А.П.', decision: 'Отклонено', date: '23.12.2020', comment: 'Нужно переделать договор' },
				{ icon: 'mdi-timer-sand-empty', color: 'grey', fio: 'Орлов П.П.', decision: 'Ожидает решения', date: '', comment: '' }
			]
		}
	},
	methods: {
		doNothing (evt) {
			evt.stopPropagation()
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-expansion-panels .v-expansion-panel {
	border-bottom: 1px solid #ccc;
	&::before {
		box-shadow: none;
	}
}
.nowrap {
	white-space: nowrap;
}
.etap {
	margin-bottom: .5rem;
	font-weight: 500;
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
	padding: 6px 13px;
	&.bl {
		color: black;
	}
}

</style>
