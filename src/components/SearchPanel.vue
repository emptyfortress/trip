<template lang="pug">
.d-flex.justify-start.mt-5
	.pan
		.mx-5
		.zag Настройки поиска
		v-item-group(mandatory)
			v-row
				v-col(cols="12" md="6")
					v-item(v-slot:default="{active, toggle}" )
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
		v-item-group(v-model="model")
			v-row
				v-col(cols="12" sm="6")
					v-item(v-slot:default="{active, toggle}")
						v-card(:color="active ? 'primary' : '' " height="42" @click="test").toggle
							.txt Расширенный поиск
							v-scroll-y-transition(mode="out-in")
								.act(v-if="active")
									v-icon(color="white" large) mdi-check-bold

	.full
		transition(name="slide-fade" mode="out-in")
			.mx-5(v-if="!advanced" key="1")
				.zag История
				ul
					li(v-for="n in 10")
						a(href="").reverse Текст запроса в поле поиска
			.mx-5(v-else key="2")
				.zag Панель расширенного поиска
				v-card.panel

</template>

<script>

export default {
	data () {
		return {
			advanced: false,
			model: null
		}
	},
	methods: {
		test () {
			this.advanced = !this.advanced
			switch (this.model) {
			case null:
				this.model = 0
				break
			case 0:
				this.model = null
				break
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-card.toggle {
	box-shadow: none;
	background: #ddd;
	position: relative;
}
.pan {
	width: 45%;
}
.v-item--active {
	color: #fff;
	.txt {
		color: #fff;
	}
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
.panel {
	width: 100%;
	height: 500px;
	background: #eee;
}
.full {
	width: 100%;
}

.reverse {
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
}
.zag {
	font-size: 1.3rem;
}
</style>
