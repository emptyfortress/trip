<template lang="pug">
div
	v-card(elevation="8").centr.pa-5
		.overline.mb-2 Фокус-группа
		.tit Примите участие в опросе
		.descr Пожалуйста, сравните два варианта исполнения скролла в таблицах и на дашборде:
		ol.descr
			li внутри самого грида
			li общий скролл на страницу и липкий заголовок
		v-divider( class="my-2")
		.descr Выберите вариант, который вам нравится больше и отправьте отзыв. Не меняйте тему письма. В теле письма можно написать подробнее.
		v-radio-group(v-model="variant" hide-details).grup
			v-radio(value="variant 1" label="Вариант 1")
			v-radio(value="variant 2" label="Вариант 2")
			v-radio(value="variant 3" label="Ни один не нравится")
		v-card-actions
			v-spacer
			a(:href="grid").bat Отправить

</template>

<script>

export default {
	data () {
		return {
			variant: ''
		}
	},
	computed: {
		grid () {
			return 'mailto:olga.k@docsvision.com, porkhachyova.n@docsvision.com?cc=putsin.s@docsvision.com, volkov.al@docsvision.com&subject=Фокус-группа%20' + this.variant
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-card {
	max-width: 600px;
}
.centr {
	max-width: 600px;
	min-height: 400px;
	margin: 4rem auto;
	background: rgba(255,255,255,.6);
	color: #000;
	.tit {
		font-size: 1.3rem;
		margin-top: 2rem;
	}
	.descr {
		font-size: 0.9rem;
		margin-top: .5rem;
	}
}
.bat {
	display: inline-block;
	padding: 4px 20px;
	background: $success;
	border-radius: 4px;
	color: #000;
	&:link, &:visited {
		text-decoration: none;
		&:hover {
			background: lighten($success, 10%);
		}
	}
}
.grup {
	background: #fff;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: .5rem;
	border: 1px solid #ccc;
}
</style>
