<template lang="pug">
div
	v-data-table(:headers="headers" calculate-widths :items="items" hide-default-header hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab

		template(v-slot:header="{ props: {headers}}")
			thead
				tr(v-stickto).stick
					th.zero
					th(v-for="header in headers" v-if="header.active" )
						drag(:transfer-data="header").drag1
							span {{ header.text }}
		template(v-slot:body="{ items }")
			tbody
				tr(v-for="item in items" :class="item.unread ? 'unread' : ''")
					td(@click="item.unread = !item.unread").px-0.drag.zero
					td(v-for="header in headers" :key="header.value" v-if="header.active" :class="header.class" )
						span {{ item[header.value] }}

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
	methods: {
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
	background: $yellow;
	width: 100%;
	box-shadow: 0 4px 5px #33333355;
	border-bottom: 1px solid #fff;
}

.drag1 {
	display: inline;
	padding: .2rem .5rem;
}
.drag {
	border-left: 8px solid transparent;
}
.v-data-table td.zero, .v-data-table th.zero {
	padding: 0;
	/* width: 20px; */
}
.unread {
	td {
		font-weight: bold;
		color: darken($accent, 30%);
		.v-btn .v-btn__content .v-icon { color: darken($accent, 30%); }
		&.drag {
			border-left: 8px solid darken($accent, 30%);
		}
	}
}
</style>
