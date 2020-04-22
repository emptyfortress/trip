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
	//- hr
	li
		i.icon-setup
		span Настройки
		i.icon-next.next
	li
		i.icon-xls
		i.icon-next.next
		span Экспорт в .xsl

</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.ac {
	color: $link;
}

</style>
