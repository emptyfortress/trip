<template lang="pug">
.between
	.zag Кнопки
	p.text-center Поведение кнопок в разных ситуациях
	br
	form
		v-slider(label="Ширина" v-model="w" :max="max" :min="min" hide-details)
		v-text-field(v-model="input" label="Button text").mt-4
		.d-flex
			v-checkbox(label="Block buttons" v-model="block").mr-3
			v-checkbox(label="Переносы" v-model="wrap")

	.cont(:style="`width: ${w}px`")
		.mybt( v-for="item in buttons" v-ripple) {{ item.text }}
		.mybt(v-ripple) {{ input }}

</template>

<script>

export default {
	data () {
		return {
			min: 300,
			max: 850,
			wrap: false,
			buttonWidth: null,
			input: 'Согласовать с замечаниями',
			block: false,
			hide: false,
			w: 400,
			buttons: [
				{ text: 'Cancel' },
				{ text: 'OK' },
				{ text: 'Зарегистрировать' },
				{ text: 'На согласование' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.cont {
	width: 400px;
	background: #fff;
	border: 1px solid #ccc;
	margin: 0 auto;
	padding: .5rem;
	/* white-space: nowrap; */
	.mybt {
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 1.25px;
		background: $link;
		color: #fff;
		text-transform: uppercase;
		margin-right:  2px;
		margin-bottom: 2px;
		overflow: hidden;
		white-space: wrap;
		padding: 8px 20px;
		border-radius: 5px;
		&:hover {
			background: lighten($link, 5%);
		}
	}
}
form {
	width: 600px;
	margin: 0 auto;
	margin-bottom: 2rem;

}

</style>
