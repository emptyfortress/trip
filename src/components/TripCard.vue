<template lang="pug">
v-card(flat hover).all.mt-5
	v-row.my
		v-col(md="4")
			v-card-text
				div Карточка для согласования
				p рег.номер 123-34.87
				p.display-1.text--primary Командировка
				.headl Бюджет
				table.card.mt-2
					tr
						td ДРП
						td 50%
					tr
						td Сервисы
						td 50%
		v-col
			table.card.mid
				tr
					td.text-right Командируемый:
					td Волков А.В.
				tr
					td.text-right Город:
					td Орел
					td.text-right Регион:
					td Россия
				tr
					td.text-right Организация:
					td Доксвижн
				tr
					td.text-right Цель поездки:
					td(colspan="3") Выполнение задания командования
				tr
					td.text-right Когда:
					td 14.01.2020
					td.text-right Дней:
					td 2
				tr
					td.text-right Туда:
					td Самолет
				tr
					td.text-right Обратно:
					td Самолет
				tr
					td.text-right Отель:
					td Рэдисон-Славянская

</template>

<script>

export default {
	data () {
		return {

		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.all {
	background: #eae9dd;
	&:hover {
		background: #fff;
	}
	/* height: 300px; */
}
.headl {
	padding: 4px 12px;
	font-size: 1.13rem;
	font-weight: 500;
	border-bottom: 2px dotted #333;
	background: #666;
	color: #fff;
}
.my {
	/* background: #ccc; */
	margin: 0;
}
.card {
	background: transparent;
	td {
		font-size: 1.1rem;
		padding: 0px 8px;
	&.text-right {
		font-size: 1.0rem;
		opacity: .7;
		/* text-align: left; */
	}
	}
}
.mid {
	margin: 0 auto;
}
</style>
