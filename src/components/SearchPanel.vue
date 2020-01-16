<template lang="pug">
.d-flex.justify-start.mt-5
	//- v-container
	.pan
		.mx-5
		.zag Настройки поиска
		v-item-group(mandatory)
			v-row
				v-col(cols="12" md="6")
					v-item(v-slot:default="{active, toggle}")
						v-card(:color="active ? 'primary' : '' " height="42" @click="toggle").toggle
							.txt В текущей папке
							v-scroll-y-transition(mode="out-in")
								.act(v-if="active")
									v-icon(color="white" large) mdi-check-bold
				v-col(cols="12" md="6")
					v-item(v-slot:default="{active, toggle}")
						v-card(:color="active ? 'primary' : '' " height="42" @click="toggle").toggle
							.txt Везде
							v-scroll-y-transition(mode="out-in")
								.act(v-if="active")
									v-icon(color="white" large) mdi-check-bold
	.mx-5
		.zag История
		ul
			li(v-for="n in 10")
				a(href="").reverse Текст запроса в поле поиска

</template>

<script>

export default {
	data () {
		return {

		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.toggle {
	box-shadow: none;
	background: #ddd;
	position: relative;
}
.pan {
	width: 50%;
}
.v-item--active {
	color: #fff;

}
.txt {
	line-height: 42px;
	margin-left: 1rem;
}
.act {
	position: absolute;
	top: .1rem;
	right: 1rem;
}

</style>
