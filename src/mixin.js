export default {
	data () {
		return {
			num: 300,
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false
			}
		}
	},
	created: function () {
	},
	methods: {
		onNodeSelected (node) {
			switch (node.id) {
			case 100:
				this.num = 80
				break
			default:
				this.num = this.getRandomInt(3, 16)
				break
			}
		},
		getRandomInt (min, max) {
			min = Math.ceil(min)
			max = Math.floor(max)
			return Math.floor(Math.random() * (max - min)) + min // Максимум не включается, минимум включается
		}
	}
}
