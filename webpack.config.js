'use strict'

var webpack = require('webpack')

module.exports = {
	entry: './app/main.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	context: __dirname,
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		noParse: '/node_modules/reactstrap-tether/dist/js/tether.js',
		loaders: [
			{
				test: /jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}
