<template lang="pug">
.ed
	.zag.mt-5 Edit in place
	.wh
		.zagrow
			div Заголовок таблицы
			v-btn(icon @click="addRow")
				v-icon mdi-plus
		table
			thead
				th(v-for="column in columns") {{ column.name }}
			tbody(is="transition-group" name="list")
				tr( v-for="(item, i) in items" :key="i").ro
					td
						.line(contenteditable @click="hide1") {{ item.org }}
					td.rel
						.block
							.editor(v-show="showByRow === i" @click="showByRow = i; showByFio = null")
								v-btn(icon dark v-for="icon in icons" :key="icon.id")
									v-icon {{ icon.name }}

							.edit(v-if="showByRow === i" contenteditable v-click-outside="hide") {{ item.fio }}
							.view(v-else @click="showByRow = i; showByFio = null") {{ item.fio }}

					td.nowrap
						.block()
							//- .edit(v-show="showByFio === i" contenteditable v-click-outside="hide1") {{ item.mail }}
							.line1.rel(@click="showByFio = i" contenteditable)
								span {{ item.mail }}
								v-btn(icon v-show="showByFio === i" @click="showByFio = i" ).action1
									i.icon-book
							.action
								v-btn(icon small @click="deleteRow(i)" v-show="showByFio === null")
									v-icon() mdi-trash-can-outline

</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
	data () {
		return {
			showByRow: null,
			showByFio: null,
			columns: [
				{ name: 'Строка' },
				{ name: 'Rich text' },
				{ name: 'Справочник' }
			],
			items: [
				{ org: 'Это строка', fio: 'Длинный блок некоторого текста', mail: 'Орлов П.И.', phone: '222-34-25' },
				{ org: 'Тоже строка', fio: 'Блок текста', mail: 'Гусев В.В.', phone: '' }
			],
			icons: [
				{ id: 0, name: 'mdi-format-text' },
				{ id: 1, name: 'mdi-format-size' },
				{ id: 2, name: 'mdi-format-bold' },
				{ id: 3, name: 'mdi-format-italic' },
				{ id: 4, name: 'mdi-format-list-bulleted' },
				{ id: 5, name: 'mdi-format-list-numbered' },
				{ id: 6, name: 'mdi-format-align-left' },
				{ id: 7, name: 'mdi-format-align-center' },
				{ id: 8, name: 'mdi-format-align-right' }
			]
		}
	},
	methods: {
		addRow (e) {
			this.items.push({ org: 'Строка', fio: 'пусто', mail: 'пусто' })
		},
		deleteRow (e) {
			this.items.splice(e, 1)
		},
		hide () {
			this.showByRow = null
		},
		hide1 () {
			this.showByFio = null
		},
		fio (e) {
			this.showByFio = e
		}
	},
	directives: {
		ClickOutside
	}
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.ed {
	width: 650px;
	margin: 0 auto;
}
.wh {
	background: #fff;
	padding: 1rem;
	margin-top: 5rem;
}
table {
	width: 100%;
	border-collapse: collapse;
	th {
		font-weight: normal;
		font-size: .8rem;
		color: #666;
		border-bottom: 1px solid #ccc;
		text-align: left;
		padding: 4px;
	}
}
.ro {
	height: 3rem;
	position: relative;
	&:hover {
		background: #eee;
	}
	td {
		border-bottom: 1px solid #eee;
		height: 3rem;
		/* padding: 6px 1rem; */
	}
}
.zagrow {
	display: flex;
	justify-content: space-between;
}

/* animation  */
.list-enter-active, .list-leave-active {
	transition: all .3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(-60px);
}
.action1 {
	background: #eee;
	position: absolute;
	right: 0;
	top: 7px;
	cursor: pointer;
	i {
		font-size: 1.0rem;
		transform: translateX(-3px);
	}
}
.action {
	display: none;
	background: #eee;
	position: absolute;
	right: 0;
	top: 0;
	text-align: right;
	line-height: 41px;
	cursor: pointer;
}
tr:hover .action {
	display: block;
}
.line {
	min-height: 3rem;
	padding: 11px 5px;
}
.line1 {
	min-height: 3rem;
	padding: 11px 5px;
	padding-right: 30px;
}
.block {
	width: 100%;
	height: 100%;
	position: relative;
	.editor {
		display: block;
		width: 100%;
		min-width: 350px;
		height: 34px;
		background: #666;
		position: absolute;
		top: -36px;
		left: 0;
		z-index: 300;
		border-radius:  6px 6px 0 0;
		pointer-events: none;
		pointer-events: none;
	}
	.edit {
		/* position: absolute; */
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100%;
		padding: 11px 5px;
		box-shadow: 0 2px 6px rgba(0,0,0, .2);
		border: 1px solid #666;
	}
	.view {
		padding-top: 11px;
	}
}
.nowrap {
	white-space: nowrap;
	position: relative;
}
</style>
