<template lang="pug">
.avatar
	br
	br
	.zag Контрол Сотрудник
	.txt Проверка как выглядят аватарки и иконки в контроле
	br
	br

	v-col(cols="12" sm="4" offset="4")
		p
			v-avatar(size="23").av
				img(src="@/assets/img/user0.svg")
			span.ml-1 Орлов П.С.
		v-list
			v-list-item
				v-list-item-avatar.av
					img( src="@/assets/img/user0.svg" )
				v-list-item-content
					v-list-item-title Орлов П.
					v-list-item-subtitle.it Отдел, должность
			v-divider
			v-list-item
				v-list-item-avatar.av
					img( src="@/assets/img/user0.svg" )
				v-list-item-content
					v-list-item-title Орлов П.
					v-list-item-subtitle.it Отдел, должность
		br
		br
		v-autocomplete( v-model="friends" multiple :items="pers" chips color="blue-grey lighten-2" label="Сотрудник" item-text="name" item-value="name" )
			template( v-slot:selection="data" )
				v-chip( v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove(data.item)" )
					v-avatar( left )
						v-img(  src="@/assets/img/user0.svg" )
					span {{ data.item.name}}
			template( v-slot:item="data" )
				v-list-item-avatar.av
					img( src="@/assets/img/user0.svg" )
				v-list-item-content
					v-list-item-title( v-html="data.item.name" )
					v-list-item-subtitle.it Отдел, должность

</template>

<script>

export default {
	data () {
		return {
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
	background: #ccc;
}
</style>
