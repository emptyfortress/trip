<template lang="pug">
ul
	li(v-for="item in items") {{ item.number }}

</template>

<script>
import data from '@/data.js'

export default {
	data () {
		return {
			items: data
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
