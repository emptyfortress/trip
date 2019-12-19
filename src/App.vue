<template lang="pug">
v-app
	v-app-bar(app collapse-on-scroll dark flat :color="color" ).vio
		v-app-bar-nav-icon
		.d-flex.lft
			v-img( alt="Vuetify Logo" src="@/assets/img/logo-w.svg" transition="scale-transition" width="200" v-show="offsetTop")
		v-spacer
		v-btn( href=""  text v-show="offsetTop")
			span( class="mr-2" ) Nav
			//- v-icon mdi-open-in-new
	v-content(v-scroll="handleScroll" id="target")
		HelloWorld
		ul
			li(v-for="n in 50") n
		.test(v-stickto) This is header
		ul
			li(v-for="n in 50") n
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data: () => ({
		color: '#2C4159',
		offsetTop: true
		//
	}),
	methods: {
		handleScroll () {
			if (window.pageYOffset > 0) {
				this.offsetTop = false
			} else this.offsetTop = true
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.vio {
	/* background: $dark !important; */
}
.test {
	width: 100%;
	padding: 1rem;
	background: $yellow;
}
.lft {
	margin-left: 2rem;
}
.v-toolbar.v-toolbar--collapsed {
	max-width: 82px;
}
</style>
