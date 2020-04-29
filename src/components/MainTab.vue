<template lang="pug">
.maintab
	.mybt
		v-btn(@click="openAll"  x-small ).mr-1 Развернуть все
		v-btn(@click="closeAll"  x-small) Свернуть все
	v-expansion-panels(tile flat v-model="panels" multiple inset name="main")
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Информация
			v-expansion-panel-content
				.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке. Государственная регистрация нормативных правовых актов осуществляется Минюстом России, которое ведет Государственный реестр нормативных правовых актов федеральных органов исполнительной власти.
				.myrow.mt-4
					table.mr-5.attributes
						tr(v-for="item in attr0" :key="item.id")
							td.attr {{ item.attr }}
							td(v-if="item.value") {{ item.value }}
							td(v-else)
								v-icon {{item.icon}}
								span  ____________
					table.attributes.mb-2
						tr(v-for="item in attr2" :key="item.id")
							td.attr {{ item.attr }}
							td.fio
								span(v-for="link in item.value").mr-2 {{ link }}
				.otpr Документ отправлен получателям:
					span нет
		v-expansion-panel(value="1")
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
					v-btn.scan(@click.stop="" icon small)
						v-icon mdi-plus
					v-btn.plus(@click.stop="" icon small)
						i.icon-setup
			v-expansion-panel-content
				v-simple-table(dense).nopad
					thead
						tr
							th Вид
							th Автор
							th Название
							th
					tbody
						tr(v-for="item in links" :key="item.id")
							td
								i.icon-card.mr-2
								span {{ item.type }}
							td {{ item.fio }}
							td {{ item.name }}
							td.px-0.text-right
								v-btn(icon small)
									v-icon(color="linkcolor") mdi-information
								v-btn(icon small)
									v-icon mdi-dots-vertical

		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Задания (6)
			v-expansion-panel-content
				.d-flex.wr
					v-btn(color="#ddd" depressed x-small).mr-1 Свернуть все
					v-btn(color="#ddd" depressed x-small).mr-1 Развернуть все
					v-btn( outlined x-small color="#666").mr-1 Показать просроченные
					v-btn( outlined x-small color="#666") Показать завершенные
					v-spacer
					v-btn-toggle(v-model="treetab" tile color="linkcolor")
						v-btn(text x-small) Таблица
						v-btn(text x-small) Дерево
				.ttable
					div Здесь таблица (дерево) исполнения

		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Обсуждение
					v-btn.up(@click.stop="" icon v-show="exp")
						i.icon-up
			v-expansion-panel-content
				Discuss.restrict
				v-text-field(label="Комментировать" append-icon="mdi-send")
</template>

<script>
import Files1 from '@/components/Files1'
import Hod from '@/components/Hod'
import Discuss from '@/components/Discuss'

export default {
	data () {
		return {
			panels: [1, 2],
			treetab: 0,
			links: [
				{ id: 0, fio: 'Иванов Г.', name: 'О переходе на удаленную работу', type: 'Исходящий, №564-3' },
				{ id: 1, fio: 'Кац П.', name: 'Закупка канцелярии', type: 'Договор, №98Д-2' }
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
	computed: {
		exp () {
			if (this.panels.includes(6)) {
				return true
			} else return false
		}
	},
	methods: {
		openAll () {
			this.panels = [0, 1, 2, 3, 4, 5, 6]
		},
		closeAll () {
			this.panels = []
		}
	},
	components: {
		Files1,
		Hod,
		Discuss
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.attributes {
	/* min-width: 200px; */
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
			/* text-align: right; */
		}
	}
	.v-icon {
		font-size: 18px;
	}
	&.shrink {
		background: pink;
		flex-basis: 220px;
		flex-grow: 1;
	}
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
.up {
	position: absolute;
	right: 1rem;
	top: -11px;
	i {
		font-size: 1.0rem;
		color: #888;
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
.filetable th, .tasktable th {
	height: 26px;
}
.nopad {
	th {
		text-align: left;
		padding: 0 3px;
	}
	td {
		padding: 0 3px;
	}
}
.tasktable tr {
	cursor: pointer;
}

.flhd {
	font-size: .7rem;
	text-transform: uppercase;
	font-weight: 600;
	color: $linkcolor;
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
.linked {
	color: $linkcolor;
}
.ttable {
	width: 100%;
	height: 300px;
	background: #cecece;
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wr {
	flex-wrap: wrap;
	.v-btn {
		margin-bottom: 3px;
	}
}
.myrow {
	display: flex;
	justify-content: space-around;
	/* padding: 0 0 1rem 0 ; */
	padding: 0;
	flex-wrap: wrap;
}
.otpr {
	text-align: center;
	font-size: .95rem;
	background: #eee;
	border: 1px solid #ccc;
	span {
		margin-left: 1rem;
		font-weight: 600;
	}
}
.restrict {
	max-height: 500px;
	overflow: auto;
	margin-bottom: 2rem;
}
.mybt {
	text-align: center;
	margin-bottom: .7rem;

}
</style>
