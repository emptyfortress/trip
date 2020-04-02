module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/focus/'
		: '/',
	chainWebpack: config => {
		config.module.rule('eslint').use('eslint-loader').options({
			fix: true
		})
	},
	"transpileDependencies": [
		"vuetify"
	]
}
