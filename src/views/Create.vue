<template lang="pug">
.create
	v-row(justify="center" align="stretch").myrow
		v-col(cols="12" :md="6" :sm="12" v-if="file")
			.preview
				v-img(src="@/assets/img/pdf.png")
		v-col(cols="12" :md="6" :sm="12")
			.zag Новый документ
			v-card(flat).mycard
				v-card(flat).mycard1
					.mb-5 Вид:
						span.ml-3 На ознакомление
					v-text-field(label="Тема"  dense autofocus clearable)
					.d-flex
						v-text-field(label="Рег.номер" dense prepend-icon="mdi-cached").mr-8
						v-menu(v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px")
							template(v-slot:activator="{ on }")
								v-text-field(v-model="date" dense prepend-icon="mdi-calendar" label="Дата регистрации" readonly v-on="on" clearable)
							v-date-picker(v-model="date" @input="menu2 = false")
						v-text-field(prepend-icon="mdi-account" label="Подготовил"  dense clearable).ml-8
					v-text-field(label="Описание"  dense clearable)
				v-expansion-panels(v-model="panel" multiple).mt-4
					v-expansion-panel
						v-expansion-panel-header.blockhd Файлы ({{files.length}})
						v-expansion-panel-content
							.fls
								i.icon-skrepka
								span Прикрепить файлы
							v-simple-table(dense).full
								tbody
									tr(v-for="item in files" :key="item.id" :class="item.id === file ? 'act' : ''" @click="setFile(item.id)")
										td.px-0
											img(:src="iconPath(item.icon)").ic
										td.pl-0 {{ item.name }}
										td {{ item.size }}
										td.text-right.px-0
											v-btn(icon small @click.stop="deleteFile(item)")
												i.icon-trash-line
					v-expansion-panel
						v-expansion-panel-header.blockhd.rel Получатели (0)
							v-btn(icon).plus
								v-icon mdi-plus
						v-expansion-panel-content Данные отсутствуют.
				v-card-actions.mt-5
					//- v-switch(label="Превью" v-model="preview")
					v-spacer
					v-btn(text) Отмена
					v-btn(depressed color="primary") Создать

</template>

<script>

export default {
	data () {
		return {
			// date: new Date().toISOString().substr(0, 10),
			preview: false,
			file: null,
			date: '',
			menu2: false,
			panel: [0],
			files: [
				{ id: 1, icon: 'word', name: 'Договор с ООО Ромашка.doc', size: '23kB', cl: 'act' },
				{ id: 2, icon: 'word', name: 'Приложение.doc', size: '11kB' },
				{ id: 3, icon: 'xls', name: 'Смета расходов.xls', size: '34kB' }
			]
		}
	},
	methods: {
		iconPath (e) {
			if (e === 'word') {
				return require(`@/assets/img/files/file-ext-word.png`)
			} else if (e === 'xls') {
				return require(`@/assets/img/files/file-ext-excel.png`)
			}
		},
		setFile (e) {
			this.file = e
		},
		deleteFile (e) {
			this.file = null
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.create {
}
.myrow {
	transition: .3s ease all;
}
.col {
	margin-right: 1rem;
}
.full {
	width: 100%;
	tr {
		cursor: pointer;
	}
}
.mycard {
	padding: 2rem;
	background: transparent;
	padding-top: 1rem;
}
.mycard1 {
	padding: 2rem;
	box-shadow: 0 1px 6px rgba(0,0,0,.2);
	padding-bottom: 1rem;
}
.v-input {
	height: 52px;
}
.fls {
	cursor: pointer;
	border: 3px dotted #666;
	border-radius: .7rem;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	margin-bottom: 1rem;
	i {
		font-size: 1.6rem;
	}
	&:hover {
		background: #b7d2c0;
	}
}
.plus {
	position: absolute;
	right: 3rem;
}
.preview {
	width: 100%;
	height: calc(100vh - 170px);
	background: #ccc;
	margin-top: 1rem;
	overflow: auto;
}
.icon-trash-line {
	font-size: 1.0rem;
}
.ic {
	height: 19px;
	transform: translateY(3px);
}
.zag {
	color: #333;
	text-align: left;
	margin-left: 2rem;
}
.act {
	background: #d1e8fb;
}
.theme--light.v-expansion-panels .v-expansion-panel--active {
	box-shadow: 0 1px 6px rgba(0,0,0,.2);
}
</style>
