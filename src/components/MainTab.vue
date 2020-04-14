<template lang="pug">
.maintab
	v-expansion-panels(hover tile flat v-model="panels" multiple)
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Информация
			v-expansion-panel-content
				.myrow
					table.attributes
						tr(v-for="item in attr0" :key="item.id")
							td.attr {{ item.attr }}
							td(v-if="item.value") {{ item.value }}
							td(v-else)
								v-icon {{item.icon}}
								span  ____________
					table.attributes
						tr(v-for="item in attr1" :key="item.id")
							td.attr {{ item.attr }}
							td {{ item.value }}
					div.max
						table.attributes
							tr(v-for="item in attr2" :key="item.id")
								td.attr {{ item.attr }}
								td.link
									span(v-for="link in item.value").mr-2 {{ link }}
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Информация (вариант)
			v-expansion-panel-content
				.list
					.item(v-for="item in attr")
						.label {{ item.attr }}
						.value {{ item.value }}
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Файлы (4)
					v-btn(icon small @click.stop="").plus
						v-icon mdi-plus
			v-expansion-panel-content
				Files1
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Ход согласования
			v-expansion-panel-content
				Hod
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Подчиненные задания
			v-expansion-panel-content
				p Здесь подчиненные задания
				p Здесь подчиненные задания
				p Здесь подчиненные задания
				p Здесь подчиненные задания
				p Здесь подчиненные задания

</template>

<script>
import Files1 from '@/components/Files1'
import Hod from '@/components/Hod'

export default {
	data () {
		return {
			panels: [2],
			attr: [
				{ id: 0, attr: 'Вид:', value: 'Входящий' },
				{ id: 1, attr: 'Состояние:', value: 'Не начато' },
				{ id: 2, attr: 'Подготовил:', value: 'Порхачева Н.' },
				{ id: 3, attr: 'Рег.№:', icon: 'mdi-plus' },
				{ id: 4, attr: 'Дата регистрации:', icon: 'mdi-calendar-blank' },
				{ id: 5, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 6, attr: 'Исполнитель:', value: 'Воробьев С.В.' },
				{ id: 7, attr: 'Срок:', value: '31.01.2020' },
				{ id: 8, attr: 'Атрибут:', value: 'значение' },
				{ id: 9, attr: 'Атрибут:', value: 'значение' },
				{ id: 10, attr: 'Согласующие:', value: 'Волков А., Карачева O., Скворцов Г.' },
				{ id: 1, attr: 'Подписывает:', value: 'Воробьев С.В.' },
				{ id: 2, attr: 'Получатели:', value: 'Гусев П., Уткин А., Скворцов Г., Смирнов С.' }
			],
			attr0: [
				{ id: 0, attr: 'Вид:', value: 'Входящий' },
				{ id: 1, attr: 'Состояние:', value: 'Не начато' },
				{ id: 2, attr: 'Подготовил:', value: 'Порхачева Н.' },
				{ id: 3, attr: 'Рег.№:', icon: 'mdi-plus' },
				{ id: 4, attr: 'Дата регистрации:', icon: 'mdi-calendar-blank' }
			],
			attr1: [
				{ id: 0, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 1, attr: 'Исполнитель:', value: 'Воробьев С.В.' },
				{ id: 2, attr: 'Срок:', value: '31.01.2020' },
				{ id: 3, attr: 'Атрибут:', value: 'значение' },
				{ id: 4, attr: 'Атрибут:', value: 'значение' }
			],
			attr2: [
				{ id: 0, attr: 'Согласующие:', value: ['Волков А.', 'Карачева O.', 'Скворцов Г.'] },
				{ id: 1, attr: 'Подписывает:', value: ['Воробьев С.В.'] },
				{ id: 2, attr: 'Получатели:', value: ['Гусев П.', 'Уткин А.', 'Скворцов Г.', 'Смирнов С.'] }
			]
		}
	},
	components: {
		Files1,
		Hod
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.attributes {
	padding-right: 1rem;
	font-size: .9rem;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
	&.big {
		font-size: 1.1rem;
	}
	td {
		vertical-align: top;
		padding: 0 0.9rem;
		&.attr {
			text-align: right;
		}
	}
	.v-icon {
		font-size: 18px;
	}
	span {
		opacity: .5;
	}
}
.attr {
	opacity: .6;
}
.myrow {
	display: flex;
	justify-content: space-around;
	padding: 1rem 0;
	flex-wrap: wrap;
}
.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}
.link  {
	span {
	opacity: 1;
	color: $link;
	cursor: pointer;
	display: block;
	&:hover {
		text-decoration: underline;
	}
	}
}
.list {
	columns: 3 220px;
	font-size: 0.9rem;
	.item {
		display: flex;
	}
}
.label {
	opacity: .6;
	margin-right: .5rem;
}
</style>
