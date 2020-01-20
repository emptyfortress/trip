<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app :mini-variant.sync="mini" dark :color="color" )
	v-list
		v-list-item
			v-list-item-icon
				v-icon mdi-home-roof
			v-list-item-content
				v-list-item-title Главная
		v-list-item( v-for="(item, i) in menu" :key="i" link )
			v-list-item-icon
				i(v-if="!mini").icon-folder-o
				v-avatar(v-else color="indigo" size="36")
					span.min {{ item.mini }}
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
				// { mini: 'mdi-home-roof', icon: 'mdi-home-roof', text: 'Главная' },
				{ mini: 'Вх', icon: 'mdi-inbox-arrow-down-outline', text: 'Входящие' },
				{ mini: 'Исх', icon: 'mdi-inbox-arrow-up-outline', text: 'Исходящие' },
				{ mini: 'МП', icon: 'mdi-folder-network-outline', text: 'Мои папки' },
				{ mini: 'Зад', icon: 'mdi-calendar-check', text: 'Задания' },
				{ mini: 'Док', icon: 'mdi-file-document-box-multiple-outline', text: 'Документы' }
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
.min {
	font-size: .8rem;
}
</style>
