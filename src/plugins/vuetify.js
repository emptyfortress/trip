import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				docolor: '#008AD1',
				taskcolor: '#6DAE50',
				dark: '#2C4159'
			}
		}
	}
})
