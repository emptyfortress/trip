module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	'rules': {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': [ 'error', 'tab' ],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
