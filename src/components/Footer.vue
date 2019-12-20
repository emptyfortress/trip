<template lang="pug">
v-footer(app inset).justify-space-between
	.copy Карточек: 133 /
		span.count Посчитать?
	.copy.gr Веб-клиент v.14.2

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

.copy {
	font-size: .8rem;
	.count {
		color: $info;
		text-decoration: underline;
		cursor: pointer;
		margin-left: .5rem;
	}
}
.gr {
	color: #999;
}
</style>
