<template lang="pug">
.avatar
	br
	br
	.zag Контрол Сотрудник
	.txt Проверка как выглядят аватарки и иконки в контроле
	br
	br
	v-row
		v-col(cols="12" sm="3")
			p
				v-avatar(size="23").av
					img(src="@/assets/img/volkov.jpeg")
				span.ml-1 Воробьев Г.А.
				v-avatar(size="23").av.ml-5.rel
					img(src="@/assets/img/volkov.jpeg")
					.status
				span.ml-1 Орлов П.С.
			v-list
				v-list-item
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gree
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gr
					v-list-item-avatar
						img( src="@/assets/img/volkov.jpeg" )
						.status
					v-list-item-content
						v-list-item-title Орлов П.Т.
						v-list-item-subtitle.it Отдел, должность
			br
			br
			v-autocomplete( v-model="friends" multiple :items="pers" chips color="blue-grey lighten-2" label="Сотрудник" item-text="name" item-value="name" )
				template( v-slot:selection="data" )
					v-chip( v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove(data.item)" )
						v-avatar( left ).rel
							v-img(  src="@/assets/img/volkov.jpeg" )
							.status
						span {{ data.item.name}}
				template( v-slot:item="data" )
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
						.status
					v-list-item-content
						v-list-item-title( v-html="data.item.name" )
						v-list-item-subtitle.it Отдел, должность

		v-col(cols="12" sm="3")
			p
				v-avatar(size="23").av
					img(src="@/assets/img/volkov.jpeg")
				span.ml-1 Воробьев Г.А.
				v-avatar(size="23").av.ml-5.rel
					img(src="@/assets/img/volkov.jpeg")
					.status1
				span.ml-1 Орлов П.С.
			v-list
				v-list-item
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status1
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gree
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status1
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gr
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
						.status1
					v-list-item-content
						v-list-item-title Орлов П.Т.
						v-list-item-subtitle.it Отдел, должность
			br
			br
			v-autocomplete( v-model="friends1" multiple :items="pers" chips color="blue-grey lighten-2" label="Сотрудник" item-text="name" item-value="name" )
				template( v-slot:selection="data" )
					v-chip( v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove1(data.item)" )
						v-avatar( left ).rel
							v-img(  src="@/assets/img/volkov.jpeg" )
							.status1
						span {{ data.item.name}}
				template( v-slot:item="data" )
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
						.status1
					v-list-item-content
						v-list-item-title( v-html="data.item.name" )
						v-list-item-subtitle.it Отдел, должность

		v-col(cols="12" sm="3")
			p
				v-avatar(size="23").av
					img(src="@/assets/img/volkov.jpeg")
				span.ml-1 Воробьев Г.А.
				v-avatar(size="23").av.ml-5.rel
					img(src="@/assets/img/volkov.jpeg")
					.status2
				span.ml-1 Орлов П.С.
			v-list
				v-list-item
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status2
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gree
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
						.status2
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gr
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
						.status2
					v-list-item-content
						v-list-item-title Орлов П.Т.
						v-list-item-subtitle.it Отдел, должность
			br
			br
			v-autocomplete( v-model="friends2" multiple :items="pers" chips color="blue-grey lighten-2" label="Сотрудник" item-text="name" item-value="name" )
				template( v-slot:selection="data" )
					v-chip( v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove2(data.item)" )
						v-avatar( left ).rel
							v-img(  src="@/assets/img/volkov.jpeg" )
							.status2
						span {{ data.item.name}}
				template( v-slot:item="data" )
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
						.status2
					v-list-item-content
						v-list-item-title( v-html="data.item.name" )
						v-list-item-subtitle.it Отдел, должность

		v-col(cols="12" sm="3")
			p
				v-avatar(size="23").av
					img(src="@/assets/img/volkov.jpeg")
				span.ml-1 Воробьев Г.А.
				v-avatar(size="23").av.ml-5
					img(src="@/assets/img/volkov.jpeg")
				span.ml-1
					.status3
				| Орлов П.С.
			v-list
				v-list-item
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
					v-list-item-content
						v-list-item-title Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gree
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
					v-list-item-content
						v-list-item-title
							.status3
							span Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
				v-divider
				v-list-item(dark).gr
					v-list-item-avatar.av.rel
						img( src="@/assets/img/volkov.jpeg" )
					v-list-item-content
						v-list-item-title
							.status3
							span Воробьев Г.А.
						v-list-item-subtitle.it Отдел, должность
			br
			br
			v-autocomplete( v-model="friends3" multiple :items="pers" chips color="blue-grey lighten-2" label="Сотрудник" item-text="name" item-value="name" )
				template( v-slot:selection="data" )
					v-chip( v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove3(data.item)" )
						v-avatar( left ).rel
							v-img(  src="@/assets/img/volkov.jpeg" )
						span
							.status4
						| {{ data.item.name}}
				template( v-slot:item="data" )
					v-list-item-avatar.av
						img( src="@/assets/img/volkov.jpeg" )
					v-list-item-content
						v-list-item-title
							.status3
							span {{ data.item.name }}
						v-list-item-subtitle.it Отдел, должность
</template>

<script>

export default {
	data () {
		return {
			friends: [],
			friends1: [],
			friends2: [],
			friends3: [],
			pers: [
				{ 'name': 'Абрамов' },
				{ 'name': 'Авдеев' },
				{ 'name': 'Агафонов' },
				{ 'name': 'Аксёнов' },
				{ 'name': 'Александров' },
				{ 'name': 'Алексеев' },
				{ 'name': 'Андреев' },
				{ 'name': 'Анисимов' },
				{ 'name': 'Антонов' }
			]
		}
	},
	methods: {
		remove (item) {
			const index = this.friends.indexOf(item.name)
			if (index >= 0) this.friends.splice(index, 1)
		},
		remove1 (item) {
			const index = this.friends1.indexOf(item.name)
			if (index >= 0) this.friends1.splice(index, 1)
		},
		remove2 (item) {
			const index = this.friends2.indexOf(item.name)
			if (index >= 0) this.friends2.splice(index, 1)
		},
		remove3 (item) {
			const index = this.friends3.indexOf(item.name)
			if (index >= 0) this.friends3.splice(index, 1)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.field {
	.v-input input {
		padding-left: 5rem;
	}
}
.chip--select-multi {
	background: #d1e3f7;
	border: 1px solid #99bee8;
}
.av {
	/* border: 4px solid red; */
	/* background: #99bee8; */
}
.status {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border: 2px solid orange;
	border-radius: 50px;
}

.status1 {
	width: 12px;
	height: 12px;
	position: absolute;
	bottom: 0;
	right: 0;
	background: orange;
	border: 2px solid #fff;
}
.status2 {
	width: 5px;
	height: 100%;
	position: absolute;
	bottom: 0;
	left: -5px;
	background: orange;
}
.status3 {
	width: 9px;
	height: 9px;
	background: orange;
	display: inline-block;
	margin-right: .3rem;
	border-radius: 5px;
}
.status4 {
	width: 9px;
	height: 9px;
	background: orange;
	display: inline-block;
	margin-right: .3rem;
	border-radius: 5px;
}
.gr {
	background: $dark;
}
.gree {
	background: #76B65A;
}
</style>
