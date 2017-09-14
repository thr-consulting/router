// import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const DEPLOY = process.env.DEPLOY === 'true';

const root = path.resolve(__dirname);

module.exports = {
	entry: {
		index: './lib/index.js',
		server: './lib/index.server.js',
	},
	target: 'web',
	devtool: 'source-map',
	externals: [nodeExternals()],
	output: {
		path: DEPLOY ? path.resolve(root) : path.resolve(root, 'dist'),
		filename: '[name].js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [
								['env', {modules: false, targets: {browsers: 'last 2 versions'}}],
								'react',
								'flow',
							],
							plugins: ['transform-class-properties', 'transform-object-rest-spread'],
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
				use: [
					{loader: 'url-loader', options: {limit: 10000}},
					{loader: 'image-webpack-loader'},
				],
			},
		],
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: true,
		// 	mangle: false,
		// 	compress: false,
		// 	comments: true,
		// }),
	],
};
