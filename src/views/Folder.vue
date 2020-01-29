<template lang="pug">
div
	Grid
	br
	br
	br
	.second(v-stickto) Это заголовок второго грида
	ul
		li(v-for="n in 50") Некоторый текст
	Dialog
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'
import Dialog from '@/components/Dialog.vue'

export default {
	name: 'home',
	components: {
		Grid,
		Dialog
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.second {
	font-size: 1.2rem;
	padding: .5rem;
	background: #ccc;
}
.second.stickto-auto-generated-sticker {
	color: #fff;
	background: $info;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}
</style>
