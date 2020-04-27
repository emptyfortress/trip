<template lang="pug">
.between
	.zag Кнопки
	p.text-center Поведение кнопок в разных ситуациях
	br
	form
		v-slider(label="Ширина блока" v-model="w" :max="max" :min="min" hide-details)
		v-text-field(v-model="input" label="Button text").mt-4
		.d-flex
			v-checkbox(label="Block buttons" v-model="block").mr-3
			v-checkbox(label="Ограничить ширину" v-model="wrap").mr-3
			v-checkbox(label="Запретить переносы в кнопках" v-model="word")

	.cont(:style="`width: ${w}px`" :class="blClass")
		.mybt( v-for="item in buttons"
			v-ripple :class="compClass") {{ item.text }}
		.mybt(v-ripple :class="compClass") {{ input }}
	br
	.table(:style="`width: ${w}px`" :class="blClass")
		.my(v-for="item in buttons") {{ item.text }}
		.my {{ input }}

</template>

<script>

export default {
	data () {
		return {
			min: 240,
			max: 850,
			wrap: false,
			word: false,
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
	},
	computed: {
		compClass () {
			return (this.wrap && this.word && this.block) ? 'bl word wr' : '' ||
						(this.block && this.word) ? 'bl word' : '' ||
						(this.wrap && this.word) ? ['wr', 'word'] : '' ||
						(this.wrap && this.block) ? 'bl wr' : '' ||
						this.wrap ? 'wr' : '' ||
						this.word ? 'word' : '' ||
						this.block ? 'bl' : ''
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.table {
	margin-top: 1rem;
	width: 400px;
	background: #fff;
	border: 1px solid #ccc;
	margin: 0 auto;
	padding: .5rem;
	display: flex;
	flex-wrap: wrap;
}
.cont {
	width: 400px;
	background: #fff;
	border: 1px solid #ccc;
	margin: 0 auto;
	padding: .5rem;
	line-height: 100%;
	&.nowr {
		white-space: nowrap;
	}
	.mybt {
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 1.25px;
		background: $linkcolor;
		color: #fff;
		text-transform: uppercase;
		margin-right:  2px;
		overflow: hidden;
		white-space: wrap;
		padding: 8px 20px;
		border-radius: 5px;
		text-align: center;
		overflow: hidden;
		&.bl {
			display: block;
			margin-bottom: 2px;
		}
		&.wr {
			max-width: 220px;
		}
		&.word {
			white-space: nowrap;
		}
		&:hover {
			background: lighten($linkcolor, 5%);
		}
	}
}
form {
	width: 700px;
	margin: 0 auto;
	margin-bottom: 2rem;
}
.my {
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 1.25px;
	background: #ccc;
	text-transform: uppercase;
	margin-right:  2px;
	overflow: hidden;
	align-items: center;
	padding: 8px 20px;
	border-radius: 5px;
	text-align: center;
	flex-grow: 1;
	margin-bottom: 2px;
}

</style>
