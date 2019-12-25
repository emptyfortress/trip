<template lang="pug">
v-app
	Drawer
	v-app-bar(app collapse-on-scroll dark :color="color" clipped-left :class="drawer ? '' : 'sm'")
		v-app-bar-nav-icon(@click.stop="toggle")
		.d-flex.lft
			v-img( alt="Vuetify Logo" src="@/assets/img/logo-w.svg" transition="scale-transition" width="150" v-show="logo")
		v-spacer
		v-btn( href="" icon  v-show="offsetTop")
			i.icon-search-scan
		v-btn( href="" icon  v-show="offsetTop")
			i.icon-search
		v-btn( href="" icon  v-show="offsetTop")
			i.icon-user
		v-btn( href="" icon  v-show="offsetTop")
			v-icon mdi-help-circle-outline
	v-content(v-scroll="handleScroll" id="target")
		v-container(fluid)
			//- HelloWorld
			//- .test(v-stickto) This is header
			Grid
			br
			br
			br
			.second(v-stickto) Это заголовок второго грида
			ul
				li(v-for="n in 50") Некоторый текст
	Footer
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Drawer from './components/Drawer'
import Footer from './components/Footer'
import Grid from './components/Grid'

export default {
	name: 'App',
	components: {
		HelloWorld,
		Drawer,
		Grid,
		Footer
	},
	data: () => ({
		color: '#2C4159',
		offsetTop: true,
		logo: true
		//
	}),
	computed: {
		drawer () { return this.$store.getters.drawer }
	},
	methods: {
		toggle () {
			this.$store.commit('toggleDrawer')
		},
		handleScroll () {
			if (window.pageYOffset > 0 && !this.drawer) {
				this.offsetTop = false
				this.logo = false
			} else if (window.pageYOffset > 0 && this.drawer) {
				this.offsetTop = false
				this.logo = true
			} else {
				this.offsetTop = true
				this.logo = true
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.test {
	width: 100%;
	padding: 1rem;
	background: $yellow;
}
.lft {
	margin-left: 18px;
}
.v-toolbar.v-toolbar--collapsed {
	max-width: 260px;
	&.sm {
		max-width: 82px;
	}
}
.icon-user, .icon-search, .icon-search-scan {
	font-size: 1.2rem;
	margin-left: -4px;
}
.second {
	font-size: 1.2rem;
	padding: .5rem;
}
.second.stickto-auto-generated-sticker {
	color: #fff;
	background: $info;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}

</style>
