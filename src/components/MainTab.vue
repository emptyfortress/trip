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
				.blockhd.rel Ссылки (2)
					.plus1(@click.stop="")
						i.icon-setup
			v-expansion-panel-content
				v-simple-table.filetable
					thead
						tr
							th Вид
							th Имя
							th Тип
							th
					tbody
						tr(v-for="item in links" :key="item.id")
							td
								i.icon-card
							td {{ item.name }}
							td {{ item.type }}
							td.px-0.text-right
								v-btn(icon)
									v-icon(color="accent") mdi-information
								v-btn(icon)
									v-icon mdi-dots-vertical

		//- v-expansion-panel
		//- 	v-expansion-panel-header
		//- 		.blockhd.rel Ход согласования
		//- 	v-expansion-panel-content
		//- 		Hod
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Задания
					.plus.plus2(@click.stop="")
						i.icon-plus
			v-expansion-panel-content

</template>

<script>
import Files1 from '@/components/Files1'
import Hod from '@/components/Hod'

export default {
	data () {
		return {
			panels: [3],
			links: [
				{ id: 0, name: 'О переходе на удаленную работу', type: 'В ответ на' },
				{ id: 1, name: 'Закупка канцелярии', type: 'Исходящий' }

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
		color: #555;
	}
}
.plus2 {
	top: -3px;
	right: .5rem;
}
.plus1 {
	position: absolute;
	right: .4rem;
	top: 0px;
	color: black;
	i {
		font-size: 1.1rem;
		color: #555;
	}
}
.scan {
	position: absolute;
	right: 3rem;
	top: -5px;
	color: black;
	i {
		font-size: 1.2rem;
		color: #555;
	}

}
.link  {
	span {
	opacity: 1;
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
.filetable th {
	height: 26px;
}

.flhd {
	font-size: .7rem;
	text-transform: uppercase;
	font-weight: 600;
	color: $link;
	letter-spacing: 1px;
}
.theme--light.v-expansion-panels .nobdr.v-expansion-panel--active {
	border: none;
}
.theme--light.v-expansion-panels .nobdr.v-expansion-panel {
	border: none;
}
.filetable {
	margin-left: -20px;
	margin-right: -20px;
}
.nobdr .v-expansion-panel-header--active {
	padding-bottom: 0;
}
</style>
