<template lang="pug">
v-container
	v-layout( text-center wrap )
		v-flex( mb-4 mt-5 )
			.zag Прототип грида
</template>

<script>
export default {
	name: 'HelloWorld',
	data: () => ({
	})
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zag {
	font-size: 2.0rem;
	color: #999;
}

</style>
