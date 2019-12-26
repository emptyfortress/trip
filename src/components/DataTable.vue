<template lang="pug">
div
	v-data-table(:headers="headers" :items="items" hide-default-header  hide-default-footer :items-per-page="per" :show-select="selectMode" item-key="id").tab
		template(v-slot:header="{ props: {headers}}")
			thead(@contextmenu.prevent="$refs.ctxMenu.open")
				tr(v-stickto).stick
					th.zero
					th
						v-checkbox(v-model="selectAll" primary hide-details @click.native="toggleAll" :indeterminate="check").checkhd
					th(v-for="header in headers" v-if="header.active" )
						drag(:transfer-data="header").drag1
							span {{ header.text }}
		template(v-slot:body="{ items }")
			tbody
				tr(v-for="item in items" :class="item.unread ? 'unread' : ''")
					td(@click="item.unread = !item.unread").px-0.drag.zero
					td
						v-checkbox(v-model="item.selected" :value="item.selected" :id="item.id.toString()" @click.prevent="item.selected = !item.selected" @click="doNothing")
					td(v-for="header in headers" :key="header.value" v-if="header.active" :class="header.class" )
						span {{ item[header.value] }}

	context-menu(ref="ctxMenu")
		h3 this is test
		li option
		li option
		li option
		li option
		li option

</template>

<script>
import data from '@/data.js'
import { SlickList, SlickItem } from 'vue-slicksort'
import contextMenu from 'vue-context-menu'

export default {
	data () {
		return {
			selectAll: false,
			items: data,
			selectMode: true,
			group: [],
			per: 30,
			grouping: true
		}
	},
	computed: {
		headers () {
			return this.$store.getters.headers
		},
		selectedItems () {
			return this.items.filter(item => item.selected)
		},
		check () {
			if (this.selectedItems.length === 0 || this.selectedItems.length === this.items.length) {
				return false
			} else return true
		}
	},
	methods: {
		doNothing (evt) {
			evt.stopPropagation()
		},
		toggleAll () {
			if (this.selectAll) {
				return this.items.map(item => { item.selected = true })
			} else {
				return this.items.map(item => { item.selected = false })
			}
		}
	},
	components: {
		SlickList,
		SlickItem,
		contextMenu
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
.checkhd {
	margin-top: -.3rem;
}
</style>
