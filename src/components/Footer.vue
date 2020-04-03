<template lang="pug">
v-footer(app inset).justify-space-between
	.copy(v-if="sh") Карточек 133 /
		span.count Посчитать?
	.copy(v-else) Docsvision
	.copy.gr {{ info }}
	.copy.gr Веб-клиент v.00000.1

</template>

<script>

export default {
	props: ['info', 'card'],
	data () {
		return {
		}
	},
	computed: {
		sh () {
			if (this.$route.name === 'scroll' || this.$route.name === 'sticky') {
				return true
			} else return false
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-footer {
	/* background: #fff; */
	box-shadow: 0 -2px 4px #33333366;
	background: $dark;
	color: #fff;
	border-left: 1px solid $info;
	/* background: darken($dark, 30%); */
}
.copy {
	font-size: .8rem;
	.count {
		color: $info;
		text-decoration: underline;
		cursor: pointer;
		margin-left: .5rem;
	}
}
</style>
