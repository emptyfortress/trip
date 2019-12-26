<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app :mini-variant.sync="mini" dark :color="color" )
	v-list
		v-list-item( v-for="(item, i) in menu" :key="i" link @click.stop = "toggleMini")
			v-list-item-icon
				v-icon {{ item.icon }}
			v-list-item-content
				v-list-item-title {{ item.text }}
	.mini
		svg-transition(size="100")
			Icon1(slot="initial")
			Icon2

</template>

<script>
import Vue from 'vue'
import SvgTransition from 'vue-svg-transition'
import Icon1 from '@/assets/img/mini.svg'
import Icon2 from '@/assets/img/mini1.svg'

Vue.use(SvgTransition)

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
		Icon1,
		Icon2
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--dark.v-list {
	background: transparent;

}
</style>
