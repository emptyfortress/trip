<template lang="pug">
v-app
	Drawer
	AddDrawer
	v-app-bar(app collapse-on-scroll dark :color="color" clipped-left :class="calcWidth()")
		v-app-bar-nav-icon(@click.stop="toggle")
		.d-flex.lft
			v-img( src="@/assets/img/logo-w.svg" transition="scale-transition" width="150" v-show="logo")
		v-spacer
		v-scale-transition(origin="center right")
			v-card(v-show="searchMode").searchbox
				input(placeholder="Найти" autofocus)
		v-btn( href="" icon  v-show="offsetTop && !searchMode")
			i.icon-search-scan
		v-btn( href="" icon  v-show="offsetTop" @click="toggleSearch")
			i.icon-search
		v-btn( href="" icon v-show="offsetTop")
			.rel
				img(src="@/assets/img/user.png" width="32")
				.status
		v-btn( href="" icon  v-show="offsetTop")
			v-icon mdi-help-circle-outline
	v-content(v-scroll="handleScroll" id="target")
		v-container(fluid :class="drawer ? '' : 'leftmargin'")

			transition(name="slide-fade" mode="out-in")
				div(v-if="!searchMode" key="start")
					v-slide-y-transition(mode="out-in")
						router-view
				SearchPanel(v-else key="search")

	Footer
	Dialog
	v-btn(dark fab color="pink" @click="toggleAdd").plus
		v-icon(dark) mdi-plus
	v-alert(v-show="scroll" transition="scale-transition").up
		v-btn(fab color="white" @click="$vuetify.goTo(0)")
			v-icon(dark) mdi-arrow-up
</template>

<script>
import Drawer from './components/Drawer'
import AddDrawer from './components/AddDrawer'
import Footer from './components/Footer'
import SearchPanel from './components/SearchPanel'

export default {
	name: 'App',
	components: {
		Drawer,
		AddDrawer,
		Footer,
		SearchPanel
	},
	data: () => ({
		color: '#2C4159',
		offsetTop: true,
		scroll: false,
		logo: true
		// add: true

		//
	}),
	computed: {
		add () { return this.$store.getters.add },
		drawer () { return this.$store.getters.drawer },
		mini () { return this.$store.getters.mini },
		searchMode () { return this.$store.getters.searchMode }
	},
	methods: {
		toggleAdd () {
			console.log('add')
			this.$store.commit('toggleAdd')
		},
		toggleSearch () {
			this.$store.commit('toggleSearchMode')
		},
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
	z-index: 1000;
}
.up {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	background: transparent;
}
.searchbox {
	box-shadow: none;
	width: 100%;
	/* display: flex; */
	margin-left: 4rem;
	input {
		border: none;
		outline: none;
		background: white;
		width: 100%;
		height: 32px;
		color: #000;
		padding: 0 .5rem;
	}
}

.status {
	width: 13px;
	height: 13px;
	background: $success;
	position: absolute;
	left: 0;
	bottom: 0;
	border-radius: 10px;
	border: 2px solid $dark;
}

</style>
