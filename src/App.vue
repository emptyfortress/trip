<template lang="pug">
v-app
	Drawer
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
		//- v-btn( href="" icon  v-show="offsetTop")
		//- 	i.icon-user
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
					Grid
					br
					br
					br
					.second(v-stickto) Это заголовок второго грида
					ul
						li(v-for="n in 50") Некоторый текст
				.d-flex.justify-start.mt-5(v-else key="seach")
					.mx-5
						.zag История
						ul
							li(v-for="n in 10")
								a(href="").reverse Текст запроса в поле поиска
					v-container
						.mx-5
						.zag Настройки поиска
						v-item-group(mandatory)
							v-row
								v-col(v-for="n in 3" :key="n" cols="12" md="4")
									v-item(v-slot:default="{active, toggle}")
										v-card(dark :color="active ? 'primary' : ''" height="50" @click="toggle")
											v-scroll-y-transition(mode="out-in")
												.flex-grow.text-center(v-if="active") Active
											v-scroll-y-reverse-transition(mode="out-in")
												.flex-grow.text-center() В текущей папке
	Footer
	Dialog
	v-btn(dark fab color="pink").plus
		v-icon(dark) mdi-plus
	v-alert(v-show="scroll" transition="scale-transition").up
		v-btn(fab color="white" @click="$vuetify.goTo(0)")
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
		mini () { return this.$store.getters.mini },
		searchMode () { return this.$store.getters.searchMode }
	},
	methods: {
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
.zag {
	font-size: 1.3rem;
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
.reverse {
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}

}
</style>
