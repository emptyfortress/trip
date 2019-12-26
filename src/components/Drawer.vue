<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app :mini-variant.sync="mini" dark :color="color" )
	v-list
		v-list-item( v-for="(item, i) in menu" :key="i" link )
			v-list-item-icon
				v-icon {{ item.icon }}
			v-list-item-content
				v-list-item-title {{ item.text }}
	.mini(@click="toggleMini")
		svg-transition(ref="transition" :size="size"  trigger="click")
			svg(slot="initial")
				use(href="#mini")
			svg
				use(href="#mini1")
	icons
</template>

<script>
import icons from '@/components/svg.vue'

export default {
	data () {
		return {
			color: '#2C4159',
			size: {
				width: 50,
				height: 24
			},
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
		toggleMini () {
			if (this.mini === true) {
				this.$store.commit('setMini', false)
			} else this.$store.commit('setMini', true)
		}
	},
	computed: {
		drawer: {
			get () {
				return this.$store.getters.drawer
			},
			set () {}
		},
		mini () { return this.$store.getters.mini }
	},
	components: {
		icons
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--dark.v-list {
	background: transparent;

}
.mini {
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	cursor: pointer;
}
</style>
