<template lang="pug">
.stamp
	.top
		img(src="@/assets/img/shield.png" width="36")
		.main Документ подписан
			br
			| электронной подписью
	table.bottom
		tr
			td Сертификат:
			td 192848191034920911445930
		tr
			td Владелец:
			td Синицын Константин Семенович
		tr
			td Действителен:
			td с 01.09.2019 до 31.12.2020

</template>

<style scoped lang="scss">
.stamp {
	display: inline-block;
	font-family: Arial, serif;
	padding: .5rem;
	border: 3px double blue;
	border-radius: 6px;
	color: blue;
	img {
		/* display: block; */
	}
}
.top {
	display: flex;
	justify-content: space-around;
	border-bottom: 2px dotted blue;
	padding-bottom: .3rem;
}
.main {
	font-size: .75rem;
	text-transform: uppercase;
	display: inline-block;
}
.bottom {
	margin-top: 3px;
	font-size: 0.64rem;
	white-space: nowrap;
	line-height: 100%;
	td {
		padding: 0 1px;
	}
}
.bold {
	font-weight: bold;
}
</style>
