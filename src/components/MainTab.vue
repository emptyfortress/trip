<template lang="pug">
.maintab
	v-expansion-panels(hover tile flat v-model="panels" multiple inset)
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
					table.attributes.shrink
						tr(v-for="item in attr2" :key="item.id")
							td.attr {{ item.attr }}
							td.link
								span(v-for="link in item.value").mr-2 {{ link }}
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Файлы (4)
					.plus(@click.stop="")
						i.icon-folder-o
					.scan(@click.stop="")
						i.icon-scan
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
			panels: [1],
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
	min-width: 200px;
	padding-right: .5rem;
	font-size: .95rem;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
	td {
		vertical-align: top;
		padding-right: .5rem;
		&.attr {
			opacity: .6;
		}
	}
	.v-icon {
		font-size: 18px;
	}
	&.shrink {
		flex-shrink: 1;
	}
}
.myrow {
	display: flex;
	justify-content: space-between;
	padding: 0 0 1rem 0 ;
	flex-wrap: wrap;
}
.plus {
	position: absolute;
	right: 1rem;
	top: -5px;
	color: black;
	i {
		font-size: 1.0rem;
	}
}
.scan {
	position: absolute;
	right: 3rem;
	top: -5px;
	color: black;
	i {
		font-size: 1.2rem;
	}

}
.link  {
	span {
	opacity: 1;
	/* word-wrap:break-word; */
	/* color: $link; */
	/* cursor: pointer; */
	/* display: block; */
	/* &:hover { */
	/* 	text-decoration: underline; */
	/* } */
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
.theme--light.v-expansion-panels .v-expansion-panel--active {
	box-shadow: 0 1px 6px rgba(0,0,0,.2);
}

</style>
