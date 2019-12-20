<template lang="pug">
v-navigation-drawer(v-model="drawer" clipped app overflow dark :color="color")
	v-list
		v-list-item( v-for="([icon, text], i) in menu" :key="i" link )
			v-list-item-icon
				v-icon {{ icon }}
			v-list-item-content
				v-list-item-title {{ text }}

</template>

<script>

export default {
	data () {
		return {
			color: '#2C4159'
		}
	},
	computed: {
		drawer () { return this.$store.getters.drawer }
	}
}

</script>
