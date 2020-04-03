<template lang="pug">
div
	br
	.zag Дашборд 1. Скролл внутри гридов
	br
	v-row(justify="start")
		v-col(cols="12" md="3")
			v-card( class="mt-4 mx-auto" max-width="400")
				v-sheet( class="v-sheet--offset mx-auto" color="accent" elevation="5" max-width="calc(100% - 32px)")
					v-sparkline( :labels="labels" :value="value" color="white" line-width="2" padding="16")

				v-card-text( class="pt-0")
					div( class="title font-weight-light mb-2" ) Поручено
					div( class="subheading font-weight-light " ) За последнюю неделю
					v-divider( class="my-2")
					v-icon( class="mr-2" small )  mdi-clock
					span( class="caption font-weight-light" ) Обновлено только что
		v-col(cols="12" md="3")
			v-card( class="mt-4 mx-auto" max-width="400")
				v-sheet( class="v-sheet--offset mx-auto" color="cyan" elevation="5" max-width="calc(100% - 32px)")
					v-sparkline( :labels="labels" :value="value1" color="white" line-width="2" padding="16")

				v-card-text( class="pt-0")
					div( class="title font-weight-light mb-2" ) Делегировано
					div( class="subheading font-weight-light" ) За последнюю неделю
					v-divider( class="my-2")
					v-icon( class="mr-2" small )  mdi-clock
					span( class="caption font-weight-light" ) Обновлено 3 мин назад
		v-col(cols="12" md="3")
			v-card( class="mt-4 mx-auto" max-width="400")
				v-sheet( class="v-sheet--offset mx-auto" color="success" elevation="5" max-width="calc(100% - 32px)")
					v-sparkline( :labels="labels" :value="value2" color="white" line-width="2" padding="16")

				v-card-text( class="pt-0")
					div( class="title font-weight-light mb-2" ) Выполнено
					div( class="subheading font-weight-light" ) За последнюю неделю
					v-divider( class="my-2")
					v-icon( class="mr-2" small )  mdi-clock
					span( class="caption font-weight-light" ) Обновлено 6 мин назад

		v-col.ava
			v-avatar(color="#ccc" size="64" v-ripple v-for="(n, i) in 6" :key="i").cursor
				img(:src=`"@/assets/img/user" + n + ".svg"` )
				.badge {{rand[i]}}

	v-row(justify-around)
		v-col
			v-card.pa-3
				.overline.mb-2 Таблица 1
				v-card-title Входящие
				v-card-content
					v-simple-table(fixed-header :height="height").ftable
						template(v-slot:default)
							thead
								tr
									th(v-for="n in 4" :key="n") One
							tbody
								tr(v-for="n in 150" :key="n")
									td(v-for="n in 4" :key="n") Some data here

		v-col
			v-card
				v-card.pa-3
					.overline.mb-2 Таблица 2
					v-card-title Исходящие
					v-card-content
						v-simple-table(fixed-header :height="height").ftable
							template(v-slot:default)
								thead
									tr
										th(v-for="n in 4" :key="n") Two
								tbody
									tr(v-for="n in 150" :key="n")
										td(v-for="n in 4" :key="n") Some data here
	p.ma-3 Еще до момента заключения договора новация вознаграждает валютный бытовой подряд, исключая принцип презумпции невиновности. Движимое имущество законодательно подтверждает кредитор.

	v-card.pa-3
		.overline.mb-2 Таблица 3
		v-card-title Архив
		v-card-content
			v-simple-table(fixed-header :height="height1").ftable
				template(v-slot:default)
					thead
						tr
							th(v-for="n in 4" :key="n") Three
					tbody
						tr(v-for="n in 150" :key="n")
							td(v-for="n in 4" :key="n") Some data here
</template>

<script>
import mixin from '@/mixin.js'

export default {
	data () {
		return {
			height: 300,
			height1: 600,
			rand: [2, 5, 8, 1, 3, 4],
			labels: [
				'12am',
				'3am',
				'6am',
				'9am',
				'12pm',
				'3pm',
				'6pm',
				'9pm'
			],
			value: [200, 675, 410, 390, 310, 460, 250, 240],
			value1: [220, 375, 410, 190, 310, 60, 230, 220],
			value2: [240, 250, 460, 310, 390, 410, 675, 200]

		}
	},
	computed: {
	},
	mixins: [mixin]
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-data-table.v-data-table--fixed-header.ftable thead th {
	background: #dedede;
	border-collapse: collapse;
	border: 1px solid #fff;
	&.filtr {
		background: lighten($yellow, 20%);
	}
}
.ftable {
	width: 100%;
	border-bottom: 1px solid #ccc;
}
.cursor {
	cursor: pointer;
	margin-right: .5rem;
	margin-bottom: .5rem;
	position: relative;
	.badge {
		position: absolute;
		top: -4px;
		right: -4px;
		background: red;
		border-radius: 20px;
		color: #fff;
		font-size: .85rem;
		padding: 2px 6px;
	}
}
.v-sheet--offset {
	top: -24px;
	position: relative;
}
.v-card__title {
	font-weight: 400;
}
</style>
