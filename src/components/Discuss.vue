<template lang="pug">
.disc
	v-checkbox(v-model="newd" label="new design").check
	div(v-if="newd")
		.bigdate 27 апреля 2020
		.message(v-for="item in messages")
			v-avatar(color="#ccc" size="32").av
				img(:src=`"@/assets/img/user" + item.icon + ".svg"`)
			.mess
				.attr
					span.user {{ item.user }}
					span.date {{ item.date }}
				.text {{ item.text }}
			.hid
				i.icon-edit.mr-3
				i.icon-trash-line
		.bigdate 28 апреля 2020
		.message(v-for="item in messages")
			v-avatar(color="#ccc" size="32").av
				img(:src=`"@/assets/img/user" + item.icon + ".svg"`)
			.mess
				.attr
					span.user {{ item.user }}
					span.date {{ item.date }}
				.text {{ item.text }}
			.hid
				i.icon-edit.mr-3
				i.icon-trash-line
	div(v-else)
		.bigdate 27 апреля 2020
		.message1(v-for="item in filters")
			.d-flex.attr1
				i.icon-user-solid.mr-1
				.user1 {{ item.user }}
				.date1 {{ item.date }}
				.ml-4
					i.icon-edit
					i.icon-trash-line
			.text {{ item.text }}

</template>

<script>

export default {
	data () {
		return {
			newd: false,
			messages: [
				{ id: 0, icon: '0', user: 'Орлов Г.Н.', date: '15:33', text: 'Фирменное наименование принципиально обязывает вексель, когда речь идет об ответственности юридического лица.' },
				{ id: 1, icon: '1', user: 'Лебедева И.П.', date: '16:01', text: 'В самом общем случае обязанность формирует гражданско-правовой Кодекс.' },
				{ id: 2, icon: '2', user: 'Воробьев А.А.', date: '16:05', text: 'Фрахтование наследует причиненный ущерб. Вексель латентно арендует правомерный взаимозачет. Законодательство, при ближайшем рассмотрении, запрещает международный вексель.' },
				{ id: 3, icon: '3', user: 'Гусев Т.П.', date: '17:14', text: 'Перестрахование доказывает нормативный акцепт.' }
			]
		}
	},
	computed: {
		filters () {
			return this.messages.filter((item) => item.id < 3)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.message {
	display: flex;
	padding: .5rem 0;
	border-radius: 6px;
	margin-left: 1rem;
	border-top: 1px solid #ddd;
	width: 100%;
	position: relative;
	&:hover {
		background: #eee;
	}
	.av {
		transform: translateY(5px);
	}
	.hid {
		cursor: pointer;
		padding: .5rem;
		background: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 1rem;
		display: none;
	}
	&:hover .hid {
		display: block;
	}
}
.bigdate {
	/* text-align: center; */
	font-size: .8rem;
	font-weight: 600;
	margin-bottom: 1rem;
	margin-top: 1rem;
}
.mess {
	margin-left: 1rem;
	width: 100%;
}
.attr {
	font-size: .8rem;
	font-style: italic;
	opacity: .7;
	.date {
		margin-left: 2rem;
	}
}
.attr1 {
	font-size: .85rem;
	opacity: .7;
	.date1 {
		margin-left: 1rem;
	}
}
.text {
	line-height: 120%;
	margin-top: 4px;
	font-size: .93rem;
}
.check {
	position: absolute;
	top: .1rem;
	right: 9rem;
}
.message1 {
	max-width: 300px;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	.text {
		padding: 1rem;
		background: #B0EBFC;
		border-radius: 10px;
	}
}

</style>
