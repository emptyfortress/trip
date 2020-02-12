<template lang="pug">
	vue-draggable-resizable(:x="myx" :y="myy" :w="300" :h="280" @dragging="onDrag" @resizing="onResize" :parent="true" class-name="drag" ).elevation-5
		v-btn(icon small @click="toggleChat").cl
			v-icon mdi-close
		.overline Комментарии к файлу
		v-list( three-line ).scr
			template( v-for="(item, index) in comm" )
				v-subheader( v-if="item.header" :key="item.header" v-text="item.header" ).hd
				v-divider( v-else-if="item.divider" :key="index" :inset="item.inset" )
				v-list-item( v-else :key="item.title" @click="" )
					v-list-item-avatar.myavatar
						v-img( src="@/assets/img/user0.svg" )
					v-list-item-content
						v-list-item-title( v-html="item.title" )
						v-list-item-subtitle( v-html="item.subtitle" )
			v-text-field(label="Комментировать" clearable hide-details)

</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
	props: [ 'myx', 'myy' ],
	data () {
		return {
			x: this.myx,
			y: this.myy,
			comm: [
				{
					title: 'Орлов П.С.',
					subtitle: "<span class='text--primary'>Сегодня, 12:03</span> &mdash; Исследование латерально дает показатель адсорбируемости натрия."
				},
				{ divider: true, inset: false },
				{
					title: 'Синицын Г.К.',
					subtitle: "<span class='text--primary'>Сегодня, 14:10</span> &mdash; При переходе к следующему уровню организации почвенного покрова желтозём стекает в почвенно-мелиоративный бурозём."
				},
				{ divider: true, inset: false }
			]
		}
	},
	components: {
		VueDraggableResizable
	},
	methods: {
		toggleChat () {
			this.$store.commit('toggleChat')
		},
		onResize: function (x, y, width, height) {
			this.x = x
			this.y = y
			this.width = width
			this.height = height
		},
		onDrag: function (x, y) {
			this.x = x
			this.y = y
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.scr {
	height: 100%;
	overflow-y: auto;
	/* width: 100%; */
}
.v-list-item {
	padding: 0;
}
.myavatar {
	background: #ccc;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
	margin-right: 10px;
}

.drag {
	background: #fff;
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 5px;
}
.cl {
	position: absolute;
	top: .5rem;
	right: .5rem;
}
</style>
