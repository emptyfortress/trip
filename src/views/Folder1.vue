<template lang="pug">
div
	Grid1
	br
	br
	br
	.second(v-stickto) Это заголовок второго грида
	ul
		li(v-for="n in 50") Некоторый текст
	Dialog
	GridSearch
</template>

<script>
// @ is an alias to /src
import Grid1 from '@/components/Grid1.vue'
import Dialog from '@/components/Dialog.vue'
import GridSearch from '@/components/GridSearch.vue'

export default {
	name: 'home',
	components: {
		Grid1,
		Dialog,
		GridSearch
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
