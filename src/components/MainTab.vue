<template lang="pug">
.maintab
	v-expansion-panels(hover tile flat v-model="panels")
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
					table.attributes
						tr(v-for="item in attr2" :key="item.id")
							td.attr {{ item.attr }}
							td {{ item.value }}
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Файлы (4)
					v-btn(icon small @click.stop="").plus
						v-icon mdi-plus
			Files1

</template>

<script>
import Files1 from '@/components/Files1'

export default {
	data () {
		return {
			panels: 0,
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
				{ id: 2, attr: 'Срок:', value: '31.01.2020' }
				// { id: 3, attr: 'Аттрибут:', value: 'значение' },
				// { id: 4, attr: 'Аттрибут:', value: 'значение' }
			],
			attr2: [
				{ id: 0, attr: 'Согласующие:', value: ['Волков А.', 'Карачева'] },
				{ id: 1, attr: 'Подписывает:', value: 'Воробьев С.В.' }
			]
		}
	},
	components: {
		Files1
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
		padding: 0 0.9rem;
		white-space: nowrap;
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
	&:not(last-child) {
	}
}
.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}
</style>
