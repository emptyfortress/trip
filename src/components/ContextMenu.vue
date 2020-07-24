<template lang="pug">
div
	li(@click="$emit('showToolbar')").ac
		i.icon-toolbar-1
		span Toolbar
	li
		i.icon-empty
		span Reset
	li
		i.icon-read
		span Прочитать все
	li
		i.icon-refresh
		span Обновить
	li
		i.icon-select
		span Выбрать
	li(@click="$emit('showGroup')").ac
		i.icon-multi
		span Группировка
	li
		i.icon-search-1
		span Поиск в таблице
	li.first
		i.icon-view
		span Представление
		i.icon-next.next
		.second
			li.big1 Настроено в УД
			li(v-for="item in views").big {{ item }}
	li
		i.icon-setup
		span Настройки
		i.icon-next.next
	li
		i.icon-xls
		i.icon-next.next
		span Экспорт в .xsl
</template>

<script>

export default {
	data () {
		return {
			views: [
				'Мое крутое представление',
				'Просрочено',
				'Все скопром',
				'Настроено в УД'
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.ac {
	color: $linkcolor;
}
.first {
	position: relative;
}
.second {
	position: absolute;
	top: 0;
	left: 100%;
	background: #fff;
	border: 1px solid #ccc;
	box-shadow: 2px 3px 6px rgba(0,0,0,.5);
	border-radius: 4px;
	z-index: -1;
	li {
		white-space: nowrap;
		padding: .6rem 1rem !important;
		&.big1 {
			background: #ccc;
		}
		&.big1::before {
			content: "";
			width: 8px;
			height: 8px;
			background: teal;
			border-radius: 8px;
			display: inline-block;
			margin-right: 1rem;
		}
	}
}

</style>
