import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				doc: '#008AD1',
				task: '#6DAE50',
				dark: '#2C4159'
			}
		}
	}
})
