<template lang="pug">
.stat
	span {{ title }}
</template>

<script>

export default {
	props: ['title']
}

</script>

<style scoped lang="scss">

.stat {
	/* display: inline-block; */
	font-size: 1.0rem;
	white-space: nowrap;
	/* text-align: left; */
	/* padding: .5rem; */
	cursor: pointer;
	/* color: $link; */
	span {
		letter-spacing: .5rem;
		/* border-top: 0.1rem solid #aaa; */
		/* border-bottom: 0.1rem solid #aaa; */
		display: inline-block;
		padding: .2rem 0;
		text-transform: uppercase;
		transition: .3s ease all;
	}
}
</style>
