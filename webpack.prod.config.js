const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: {
		// phaser custom build (lighter)
		// WIP engine: './lib/phaser.custom.ts',
		// this is our entry point, the main TypeScript file
		game: './src/game.ts'
	},
	output: {
		// this is the path of the output bundle, the /dist folder
		path: path.resolve(__dirname, 'dist'),
		// and this is our output file, the one which bundles all libraries
		filename: '[name]-[contenthash].bundle.js',
	},
	resolve: {
		// list of extensions to resolve (in specific order)
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'assets'),
    	publicPath: '/assets'
		},
    compress: true,
		hot: true,
    port: 3000
  },
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Copium 226'
		})
	]
};