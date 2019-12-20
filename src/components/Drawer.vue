<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app overflow dark :color="color" )
	v-list
		v-list-item( v-for="(item, i) in menu" :key="i" link )
			v-list-item-icon
				v-icon {{ item.icon }}
			v-list-item-content
				v-list-item-title {{ item.text }}

</template>

<script>

export default {
	data () {
		return {
			color: '#2C4159',
			menu: [
				{ text: 'Главная' },
				{ text: 'Входящие' },
				{ text: 'Исходящие' },
				{ text: 'Мои папки' },
				{ text: 'Задания' },
				{ text: 'Документы' }
			]
		}
	},
	methods: {
	},
	computed: {
		drawer: {
			get () {
				return this.$store.getters.drawer
			},
			set () {}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--dark.v-list {
	background: transparent;

}
</style>
