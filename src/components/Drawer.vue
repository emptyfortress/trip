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
				{ icon: 'mdi-home-roof', text: 'Главная' },
				{ icon: 'mdi-inbox-arrow-down-outline', text: 'Входящие' },
				{ icon: 'mdi-inbox-arrow-up-outline', text: 'Исходящие' },
				{ icon: 'mdi-folder-network-outline', text: 'Мои папки' },
				{ icon: 'mdi-calendar-check', text: 'Задания' },
				{ icon: 'mdi-file-document-box-multiple-outline', text: 'Документы' }
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
