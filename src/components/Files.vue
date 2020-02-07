<template lang="pug">
.files.mt-4
	v-expansion-panels(hover tile v-model="panel")
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Файлы (2)
					v-btn(icon small @click.stop="").plus
						v-icon mdi-plus

			v-expansion-panel-content
				v-simple-table.filetable
					thead
						tr
							th Имя
							th Версия
							th
					tbody
						tr(v-for="item in files" :key="item.name")
							td
								img(:src="iconPath(item.icon)")
								.name(@click="showPreview") {{ item.name }}
							td {{ item.v }}
							td(width="30").px-0
								v-btn(small icon)
									v-icon mdi-dots-vertical

</template>

<script>

export default {
	data () {
		return {
			panel: 0,
			files: [
				{ icon: 'word', name: 'Договор с ООО Ромашка.doc', v: '1.1' },
				{ icon: 'xls', name: 'Смета расходов.xls', v: '1.1' }
			]
		}
	},
	methods: {
		showPreview () {
			this.$store.commit('setPreviewMode', 0)
			this.$store.commit('setChanging', true)
			this.$store.commit('openPreview')
			this.$store.commit('setMini', true)
			let that = this
			setTimeout(function () {
				that.$store.commit('setChanging', false)
			}, 1500)
		},
		iconPath (e) {
			if (e === 'word') {
				return require(`@/assets/img/files/file-ext-word.png`)
			} else if (e === 'xls') {
				return require(`@/assets/img/files/file-ext-excel.png`)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-expansion-panels .v-expansion-panel {
	border-bottom: 1px solid #ccc;
	&::before {
		box-shadow: none;
	}
}
.v-expansion-panel--active > .v-expansion-panel-header {
	min-height: 44px;
}
.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}

.filetable td {
	color: $link;
	img {
		vertical-align: middle;
	}
}
.name {
	display: inline;
	margin-left: .8rem;
	cursor: pointer;
}

</style>
