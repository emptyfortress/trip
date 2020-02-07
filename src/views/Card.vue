<template lang="pug">
v-row(justify="center" :key="$route.params.id").mx-3.mt-5
	v-col(md="12" :lg="preview ? '12' : '9' " v-if="!fullWindow")
		v-row(justify="space-between")
			v-col(cols="12" :md="preview ? '12' : '2' " :lg="preview ? '12' : '2'" :class="preview ? 'order-md-first' : 'order-md-last text-right'" ).status
				span {{ card.status }}
			v-col
				.zag {{ card.title }}
		v-tabs.mytab
			v-tab Главная
			v-tab Подчиненные задания
			v-tab История
			v-tab-item(key="1")
				br
				v-row(justify="start")
					v-col
						v-btn(depressed color="primary" :block="$vuetify.breakpoint.smAndDown") В работу
						v-btn(depressed color="primary" :block="$vuetify.breakpoint.smAndDown") Согласовать
						v-btn(outlined color="primary" :block="$vuetify.breakpoint.smAndDown") Делегировать
						v-btn(outlined color="primary"  :block="$vuetify.breakpoint.smAndDown") Отклонить

				v-row.layout
					v-col(cols="12" lg="3" md="4" sm="12" order="1")
						table(:class="$vuetify.breakpoint.smAndDown ? 'big' : '' ").attributes
							tr(v-for="item in attr" :key="item.id")
								td.attr {{ item.attr }}
								td {{ item.value }}

					v-col(cols="12"  :lg="preview ? '8' : '3'" md="8" sm="12" :class="preview ? 'order-lg-2' : 'order-lg-last order-md-2 order-sm-last' ")
						v-card(flat hover).ful
							v-row(justify="space-between").mx-2.pt-3
								.tit
									i.icon-forum.mr-3
									| Обсуждение (0)
								v-btn(text icon)
									i.icon-up
							.action
								v-text-field(label="Оставить комментарий")

					v-col(:order="preview ? 'last' : '2' ")
						.descr Вам поступило задание на согласование командировки. Детали ниже или по ссылке.
						Files
						//- v-btn(@click="showPreview") Preview

			v-tab-item(key="2")
				span Задания
			v-tab-item(key="3")
				span История
</template>

<script>
import data from '@/data.js'
import Files from '@/components/Files'

export default {
	data () {
		return {
			items: data,
			attr: [
				{ id: 0, attr: 'Инициатор:', value: 'Волков А.В.' },
				{ id: 1, attr: 'Исполнитель:', value: 'Пуцин С.В.' },
				{ id: 2, attr: 'Срок:', value: '31.01.2020' },
				{ id: 3, attr: 'Аттрибут:', value: 'значение' },
				{ id: 4, attr: 'Аттрибут:', value: 'значение' }
			]
		}
	},
	computed: {
		card () {
			let a = this.$route.params.id
			return this.items.filter(item => item.id === parseInt(a))[0]
		},
		preview () {
			return this.$store.getters.preview
		},
		fullWindow () {
			return this.$store.getters.fullWindow
		}
	},
	methods: {
		showPreview () {
			this.$store.commit('togglePreview')
			this.$store.commit('setMini', true)
		}
	},
	components: {
		Files
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

/* .buttonsrow { */
/* 	margin-bottom: 2rem; */
/* 	.v-btn { */
/* 		margin-right: .5rem; */
/* 		margin-top: .5rem; */
/* 	} */
/* } */
.zag {
	color: black;
	text-align: left;
	font-size: 1.5rem;
	span {
		opacity: .5;
	}
}
.status {
	font-size: 1.1rem;
	/* text-align: left; */
	white-space: nowrap;
	span {
		transform: rotate(-3deg);
		color: $info;
		font-weight: 700;
		/* border-top: 0.2rem solid $info; */
		border-top: 4px double $info;
		border-left: 1px solid $info;
		border-right: 1px solid $info;
		border-bottom: 0.2rem solid $info;
		display: inline-block;
		padding: 0.20rem 0.9rem;
		text-transform: uppercase;
		/* border-radius: .3rem; */
		font-family: 'Courier';
		/* -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png'); */
		-webkit-mask-image: url('../assets/img/grunge.png');
		-webkit-mask-size: 944px 604px;
		mix-blend-mode: multiply;
		margin-top: .6rem;
	}
}
.big {
	margin-top: 4rem;
	i {
		font-size: 3.0rem;
		color: #888;
	}
}
.attributes {
	width: 100%;
	font-size: .9rem;
	margin: 0 auto;
	&.big {
		font-size: 1.1rem;
	}
	td {
		padding: 0 0.9rem;
		white-space: nowrap;
		&.attr {
			text-align: right;
		}
	}
}
.attr {
	opacity: .6;
}
.v-btn {
	margin-right: .25rem;
	margin-bottom: .25rem;
}
.layout {
}
.layout > div:first-child {
	min-width: 240px;
	border-right: 1px solid #ccc;
}
.descr {
	font-size: 1.1rem;
}
.ful {
	height: 100%;
	min-height: 120px;
	min-width: 220px;
	border: 1px solid #cdcdcd;
	padding-top: 0;
	position: relative;
	.tit {
		margin-top: .5rem;
		margin-left: .5rem;
		font-size: 1.1rem;
	}
	.action {
		margin: 0 1rem;
		position: absolute;
		/* bottom: 35%; */
		bottom: 1rem;
		left: 0;
		right: 0;
		height: 50px;
	}
}
</style>
