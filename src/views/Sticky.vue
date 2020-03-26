<template lang="pug">
.sticky
	br
	v-btn Включить группировку
	br
	.zag Sticky headers in table
	br
	.d-flex
		.group
			.test laksjdlkajsd
		table.full
			thead
				tr.lip
					th One
					th One
					th One
					th One
					th One
			tbody
				tr(v-for="(item, i) in 50" :key="i").ro
					td Content
					td Content
					td Content
					td Content
					td Content
	br
	br
	br
	table.full
		thead
			tr.lip
				th Second
				th Second
				th Second
				th Second
				th Second
		tbody
			tr(v-for="(item, i) in 50" :key="i").ro
				td Content
				td Content
				td Content
				td Content
				td Content

</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.sticky {
	margin: 0 1rem;
}
.full {
	width: 100%;
	background: #fff;
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
		height: 500px;
		position: sticky;
		top: 0;
		background: white;
		box-shadow: 0 1px 3px #00000055;
	}
}
</style>
