<template lang="pug">
div
	.headline.text-center.mt-9 Это дашборд
	br
	br
	br
	br
	Stamp

</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'
import Dialog from '@/components/Dialog.vue'
import Stamp from '@/components/Stamp.vue'

export default {
	name: 'home',
	components: {
		Grid,
		Dialog,
		Stamp
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
