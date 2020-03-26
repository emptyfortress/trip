<template lang="pug">
.sticky
	br
	v-btn(depressed color="info" @click="group = !group") Группировка
	br
	.zag Sticky headers in table
	p.text-center Это стандартные html tables + чистый css
	br
	.d-flex
		v-slide-x-transition(mode="out-in")
			.group(v-show="group")
				.test
					h3 Группы
						span 8
					v-btn(icon @click="group = !group").clo
						v-icon mdi-close
					br
					tree(ref="tree" :data="list" :options="treeOptions" @node:selected="onNodeSelected").tree-group
		table.full
			thead
				tr.lip
					th(v-for="n in 5") One
			tbody
				tr(v-for="(item, i) in num" :key="i").ro
					td(v-for="n in 5") Content
	br
	br
	table.full
		thead
			tr.lip
				th(v-for="n in 5") Second
		tbody
			tr(v-for="(item, i) in num1" :key="i").ro
				td(v-for="n in 5") Content

</template>

<script>

export default {
	data () {
		return {
			group: false,
			num: 50,
			num1: 50,
			list: [
				{ id: 0, text: 'Все' },
				{ id: 1, text: 'Item 2' },
				{ id: 2,
					text: 'Item 3',
					children: [
						{ id: 3, text: 'Item 3.1' },
						{ id: 4, text: 'Item 3.2' }
					] },
				{ id: 5, text: 'Item 4' },
				{ id: 6, text: 'Item 5' },
				{ id: 7,
					text: 'Item 6',
					children: [
						{ id: 8, text: 'Item 6.1' },
						{ id: 9, text: 'Item 6.2' }
					] },
				{ id: 10, text: 'Item  7' },
				{ id: 11, text: 'Item  8' },
				{ id: 12,
					text: 'Item  9',
					children: [
						{ id: 13, text: 'Item 9.1' },
						{ id: 14, text: 'Item 9.2' }
					] }
			],
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false,
				filter: {
					emptyText: 'Aaaaa! Где мои папки?!!',
					plainList: 0
				}
			}
		}
	},
	methods: {
		onNodeSelected (node) {
			switch (node.id) {
			case 1:
				this.num = 5
				break
			case 2:
				this.num = 7
				break
			case 3:
				this.num = 10
				break
			case 4:
				this.num = 1
				break
			case 5:
				this.num = 3
				break
			case 6:
				this.num = 20
				break
			case 7:
				this.num = 4
				break
			case 8:
				this.num = 6
				break
			case 9:
				this.num = 6
				break
			case 10:
				this.num = 6
				break
			case 11:
				this.num = 6
				break
			case 12:
				this.num = 6
				break
			case 13:
				this.num = 6
				break
			default:
				this.num = 50
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.sticky {
	margin: 0 1rem;
}
.full {
	width: 100%;
	background: #fff;
	transition: all .3s ease;
	th {
		background: #dedede;
		height: 2.5rem;
		position: sticky;
		top: 0;
		font-weight: 600;
		font-size: .75rem;
		color: #666;
	}
	.ro {
		height: 3rem;
		&:hover {
			background: #eee;
		}
		td {
			border-bottom: 1px solid #eee;
		}
	}
}
.group {
	width: 250px;
	margin-right: .5rem;
	.test {
		height: 100vh;
		position: sticky;
		top: 0;
		background: white;
		box-shadow: 0 1px 3px #00000055;
		overflow: auto;
	}
}
h3 {
	cursor: pointer;
	padding: 1rem;
	span {
		margin-left: 1rem;
		font-size: .9rem;
		background: $info;
		color: white;
		padding: .1rem .5rem;
		border-radius: 3rem;
	}
	.v-icon {
		margin-left: 2rem;
		vertical-align: bottom;
		color: $info;
	}
}
.clo {
	position: absolute;
	top: .6rem;
	right: .6rem;
}
.treenode {
	width: 100%;
}
.tree-children {
	padding-left: -24px !important;
}
</style>
