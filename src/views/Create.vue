<template lang="pug">
.create
	.zag Создать документ
	v-row(justify="center" align="stretch").myrow
		v-col(cols="12" :md="5")
			v-card(flat).mycard
				v-text-field(outlined label="Тема"  dense autofocus clearable)
				.d-flex
					v-menu(v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px")
						template(v-slot:activator="{ on }")
							v-text-field(v-model="date" outlined dense prepend-icon="mdi-calendar" label="Дата регистрации" readonly v-on="on" clearable)
						v-date-picker(v-model="date" @input="menu2 = false")
					v-text-field(outlined prepend-icon="mdi-account" label="Подготовил"  dense clearable).ml-8
				v-text-field(outlined label="Описание"  dense clearable)
				.fls
					i.icon-skrepka
					span Прикрепить файлы
				v-card-actions.mt-5
					v-spacer
					v-btn(text) Отмена
					v-btn(depressed color="primary") Создать
</template>

<script>

export default {
	data () {
		return {
			// date: new Date().toISOString().substr(0, 10),
			date: '',
			menu: false,
			modal: false,
			menu2: false
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.create {
}
.myrow {
}
.col {
	margin-right: 1rem;
}
.full {
}
.mycard {
	padding: 2rem;
	background: transparent;
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
	i {
		font-size: 2.0rem;
	}
	&:hover {
		background: #b7d2c0;
	}
}
</style>
