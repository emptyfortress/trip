<template lang="pug">
v-app
	Drawer
	v-app-bar(app collapse-on-scroll dark :color="color" clipped-left :class="calcWidth()")
		v-app-bar-nav-icon(@click.stop="toggle")
		.d-flex.lft
			v-img( src="@/assets/img/logo-w.svg" transition="scale-transition" width="150" v-show="logo")
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
		v-container(fluid :class="drawer ? '' : 'leftmargin'")
			Grid
			br
			br
			br
			.second(v-stickto) Это заголовок второго грида
			ul
				li(v-for="n in 50") Некоторый текст
	Footer
	Dialog
	v-btn(dark fab color="pink").plus
		v-icon(dark) mdi-plus
	v-btn(fab color="white" v-show="scroll" transition="scale-transition" @click="$vuetify.goTo(0)").up
		v-icon(dark) mdi-arrow-up
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Drawer from './components/Drawer'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Dialog from './components/Dialog'

export default {
	name: 'App',
	components: {
		HelloWorld,
		Drawer,
		Grid,
		Footer,
		Dialog
	},
	data: () => ({
		color: '#2C4159',
		offsetTop: true,
		scroll: false,
		logo: true
		//
	}),
	computed: {
		drawer () { return this.$store.getters.drawer },
		mini () { return this.$store.getters.mini }
	},
	methods: {
		calcWidth () {
			let po = window.pageYOffset
			if (this.drawer && !this.mini && po > 0) {
				return 'drawer'
			} else if (this.drawer && this.mini && po > 0) {
				return 'mid'
			} else return 'sm'
		},
		toggle () {
			this.$store.commit('toggleDrawer')
		},
		handleScroll () {
			if (window.pageYOffset > 300) {
				this.scroll = true
			} else if (window.pageYOffset > 0 && !this.drawer) {
				this.offsetTop = false
				this.logo = false
			} else if (window.pageYOffset > 0 && !this.drawer && !this.mini) {
				this.offsetTop = false
				this.logo = false
			} else if (window.pageYOffset > 0 && this.drawer) {
				this.offsetTop = false
				this.logo = true
			} else {
				this.offsetTop = true
				this.scroll = false
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
		max-width: 48px;
	}
	&.mid {
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
	background: #ccc;
}
.second.stickto-auto-generated-sticker {
	color: #fff;
	background: $info;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}
.leftmargin {
	margin-left: 40px;
	div {
		margin-right: 40px;
	}
}
.plus {
	position: fixed;
	bottom: 4rem;
	right: 2rem;
}
.up {
	position: fixed;
	bottom: 4rem;
	left: 50%;
	display: block;
}
</style>
