<template lang="pug">
v-app
	v-app-bar( dark ).vio
		div( class="d-flex align-center" )
			v-img( alt="Vuetify Logo" src="@/assets/img/logo-w.svg" transition="scale-transition" width="200" )
		v-spacer
		v-btn( href=""  text )
			span( class="mr-2" ) Nav
			//- v-icon mdi-open-in-new
	v-content
		HelloWorld
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
		//
	})
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.vio {
	background: $dark !important;
	box-shadow: none;
}
</style>
