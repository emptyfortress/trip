<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app :mini-variant.sync="mini" dark :color="color" )
	v-list
		v-list-item(link @click="goTo('/')")
			v-list-item-icon
				v-icon mdi-home-roof
			v-list-item-content
				v-list-item-title Главная
		v-list-item( v-for="(item, i) in menu" :key="i" link  @click="goTo(item.url)")
			v-list-item-icon
				i(:class="item.icon")

			//- v-list-item-icon
			//- 	i(v-if="!mini" :class="item.icon")
			//- 	span(v-else).min {{ item.mini }}
				//- v-avatar(v-else color="indigo" size="36")
				//- 	span.min {{ item.mini }}
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
				{ url: '/folder', mini: 'Вход.', icon: 'icon-inbox', text: 'Входящие' },
				{ url: '/folder', mini: 'Исх.', icon: 'icon-oubox', text: 'Исходящие' },
				{ url: '', mini: 'Папки', icon: 'icon-folder-o', text: 'Мои папки' },
				{ url: '', mini: 'Зад.', icon: 'icon-tasks', text: 'Задания' },
				{ url: '', mini: 'Док.', icon: 'icon-documents', text: 'Документы' },
				{ url: '/trips', mini: 'Ком.', icon: 'icon-airplane', text: 'Командировки' }
			]
		}
	},
	methods: {
		goTo (e) {
			this.$router.push(e)
			this.$store.commit('setSearchMode', false)
		},
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
	font-size: .9rem;
}
</style>
