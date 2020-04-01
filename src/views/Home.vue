<template lang="pug">
div
	//- .headline.text-center.mt-9.white--text Доброе утро, username !
	v-card(elevation="8").centr.pa-5
		.overline.mb-2 Фокус-группа
		.tit Примите участие в опросе
		.descr Пожалуйста, сравните два варианта исполнения скролла в таблицах и на дашборде:
		ol.descr
			li внутри самого грида
			li общий скролл на страницу и липкий заголовок
		v-divider( class="my-2")
		.descr Выберите вариант, который вам нравится больше и отправьте отзыв. Не меняйте тему письма. В теле письма можно написать подробнее.
		v-radio-group(v-model="grid")
			v-radio(value="scroll" label="Вариант 1")
			v-radio(value="sticky" label="Вариант 2")
			v-radio(value="non" label="Ни один не нравится")
		v-card-actions
			v-spacer
			a(href="mailto:volkov.al@docsvision.com").bat Отправить

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

.v-card {
	max-width: 600px;
}
.centr {
	max-width: 600px;
	min-height: 400px;
	margin: 4rem auto;
	background: rgba(255,255,255,.8);
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
	background: $dark;
	border-radius: 4px;
	color: #fff;
	&:link, &:visited {
		text-decoration: none;
		&:hover {
			background: lighten($dark, 10%);
		}
	}
}
</style>
