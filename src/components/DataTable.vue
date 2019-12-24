<template lang="pug">
div
	v-data-table(:headers="headers" calculate-widths :items="items" hide-default-header hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab

		template(v-slot:header="{ props: {headers}}")
			thead
				tr(v-stickto).stick
					th(v-for="header in headers" v-if="header.active" )
						drag(:transfer-data="header").drag1
							span {{ header.text }}
		template(v-slot:body="{ items }")
			tbody
				tr(v-for="item in items")
					td {{ item.title }}
					td {{ item.executor }}
					td {{ item.author }}
					td {{ item.deadline }}
					td {{ item.created }}
					td {{ item.files }}
					td {{ item.status }}

</template>

<script>
import data from '@/data.js'
import { SlickList, SlickItem } from 'vue-slicksort'

export default {
	data () {
		return {
			items: data,
			selectMode: false,
			group: [],
			per: 30,
			grouping: true
		}
	},
	computed: {
		headers () {
			return this.$store.getters.headers
		}
	},
	components: {
		SlickList,
		SlickItem
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.stick {
	background: #eee;
}
.stick.stickto-auto-generated-sticker {
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}

.drag1 {
	display: inline !important;
	padding: .2rem .5rem;
}
</style>
