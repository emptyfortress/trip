<template lang="pug">
v-menu( offset-y transition="slide-y-transition" )
	template( v-slot:activator="{ on }" )
		.statu(v-on="on")
			span {{ title }}
		//- v-btn( color="primary" dark v-on="on" )  Dropdown
	v-list
		v-list-item( v-for="(item, index) in items" :key="index" @click="" )
			v-list-item-title {{ item.title }}
</template>

<script>

export default {
	props: ['title'],
	data () {
		return {
			items: [
				{ title: 'Взять в работу' },
				{ title: 'Отправить на согласование' },
				{ title: 'Отправить на ознакомление' },
				{ title: 'Делегировать' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.statu {
	/* margin-right: .5rem; */
	/* margin-top: .5rem; */
	display: inline-block;
	font-size: 1.1rem;
	white-space: nowrap;
	text-align: center;
	padding: .5rem;
	cursor: pointer;
	color: $link;
	span {
		letter-spacing: .5rem;
		border-top: 0.1rem solid $link;
		border-bottom: 0.1rem solid $link;
		display: inline-block;
		padding: .2rem 0;
		text-transform: uppercase;
		transition: .3s ease all;
	}
	&:hover {
		span {
			letter-spacing: .9rem;
			/* background: #ddf0ff; */
		}
		/* background: #fff; */
		/* box-shadow: 0 0 10px rgba(0,0,0,.3); */
	}
}
.v-list-item v-list-item--link theme--light {
	&:hover {
		background: #ccc;
	}
}
</style>
