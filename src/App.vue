<template lang="pug">
v-app
	Preview
	Drawer(v-if="!fullWindow")
	AddDrawer
	v-app-bar(app collapse-on-scroll dark :color="color" clipped-left :class="calcWidth()").pr-2
		v-app-bar-nav-icon(@click.stop="toggle")
		.d-flex.lft
			v-img( src="@/assets/img/logo-w.svg" transition="scale-transition" width="150" v-show="logo" )
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
		v-btn( href="" icon  v-show="offsetTop" @click="showPreview")
			v-icon mdi-dock-right
			//- v-icon(v-if="!preview") mdi-arrow-expand-left
			//- v-icon(v-if="preview") mdi-arrow-expand-right
			//- v-icon mdi-help-circle-outline
	v-content(v-scroll="handleScroll" id="target" :class="$route.name === 'home' ? 'bg' : ''")
		v-container(fluid :class="drawer ? '' : 'leftmargin'").rel
			transition(name="fade" mode="out-in")
				v-btn(fab outlined color="#ccc" small v-show="$route.name === 'card' && !searchMode && !fullWindow" @click="back").back
					v-icon(color="#aaa") mdi-arrow-left
			transition(name="fade" mode="out-in")
				v-btn(fab outlined color="#ccc" small v-show="$route.name === 'card' && !searchMode && !fullWindow" @click="forward").forward
					v-icon(color="#aaa") mdi-arrow-right

			transition(name="slide-fade" mode="out-in")
				div(v-if="!searchMode" key="start")
					v-slide-x-transition(mode="out-in")
						router-view
				SearchPanel(v-else key="search")

	Footer
	Dialog
	v-alert(v-show="!preview" transition="scale-transition").plus
		v-btn(dark fab large color="pink" @click="toggleAdd" :class="add ? 'active' : '' ")
			v-icon(dark) mdi-plus
	v-alert(v-show="scroll" transition="scale-transition").up
		v-btn(fab color="white" @click="$vuetify.goTo(0)")
			v-icon(dark) mdi-arrow-up
</template>

<script>
import Preview from './components/Preview'
import Drawer from './components/Drawer'
import AddDrawer from './components/AddDrawer'
import Footer from './components/Footer'
import SearchPanel from './components/SearchPanel'

export default {
	name: 'App',
	components: {
		Preview,
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
	}),
	computed: {
		fullWindow () {
			return this.$store.getters.fullWindow
		},
		add () { return this.$store.getters.add },
		drawer () { return this.$store.getters.drawer },
		mini () { return this.$store.getters.mini },
		searchMode () { return this.$store.getters.searchMode },
		preview () { return this.$store.getters.preview },
		row () { return this.$router.params.id },
		pathback () {
			let a = this.$route.path.split('/')
			let last = a[a.length - 1]
			let middle = a[a.length - 2]
			let newpath = ''
			if (last < 0) { return '/folder' } else {
				newpath = '/' + middle + '/' + (parseInt(last) - 1).toString()
			}
			return newpath
		},
		pathforward () {
			let a = this.$route.path.split('/')
			let last = a[a.length - 1]
			let middle = a[a.length - 2]
			let newpath = ''
			if (last < 0) { return '/folder' } else {
				newpath = '/' + middle + '/' + (parseInt(last) + 1).toString()
			}
			return newpath
		}
	},
	methods: {
		showPreview () {
			this.$store.commit('setPreviewMode', 1)
			this.$store.commit('togglePreview')
			this.$store.commit('setMini', true)
		},
		back () {
			this.$router.push(this.pathback)
		},
		forward () {
			this.$router.push(this.pathforward)
		},
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
.forward {
	position: absolute;
	top: 1rem;
	left: 3.6rem;
	z-index: 1000;
}
.back {
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 1000;
}
.plus {
	background: transparent;
	position: fixed;
	transition: all .2s ease;
	bottom: 2rem;
	right: 1rem;
	z-index: 1000;
	.active {
		transform: rotate(45deg);
	}
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
.ful {
	height: 100%;
}

.bg {
	background: url(assets/img/beach.jpg);
	background-size: cover;
}
</style>
