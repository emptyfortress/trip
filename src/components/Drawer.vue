<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app :mini-variant.sync="mini" dark :color="color" )
	v-list
		v-list-item(link @click="goTo('/')")
			v-list-item-icon
				i(style="font-size: 1.6rem").icon-home-roof
			v-list-item-content
				v-list-item-title Главная
		v-list-item( v-for="(item, i) in menu" :key="i" link  @click="goTo(item.url)")
			v-list-item-icon
				i(:class="item.icon").ic

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
				{ url: '/folder', mini: 'Вход.', icon: 'icon-inbox', text: 'Грид' },
				{ url: '/folder1', mini: 'Вход.', icon: 'icon-inbox', text: 'Грид 1' },
				{ url: '/sticky', mini: 'Вход.', icon: 'icon-table', text: 'Sticky table' },
				{ url: '/trips', mini: 'Ком.', icon: 'icon-airplane', text: 'Командировки' },
				{ url: '/delo', mini: 'Дело', icon: 'icon-dp', text: 'Делопроизводство' },
				{ url: '/newcard', mini: '', icon: 'icon-numeric-1-box-outline', text: 'Inline file preview' },
				{ url: '/cards/2', mini: '', icon: 'icon-numeric-2-box-outline', text: 'Panel file preview' },
				{ url: '/avatar', mini: '', icon: 'icon-user', text: 'Avatars' }
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
		mini: {
			get () {
				return this.$store.getters.mini
			},
			set () {}
		}
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
.ic {
	font-size: 1.3rem;
}
.v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 1rem;
}
.v-navigation-drawer--mini-variant .v-list-item > *:first-child {
	margin-left: 0;
	margin-right: 0;

}
</style>
