const path = require('path');

module.exports = {
  mode: "development",
	entry: './src/__tests__/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: path.resolve(__dirname, 'dist/cjs.js'),
            options: {
              configPath: '.prettierrc',
              ignorePath: '.prettierignore',
            }
          }
        ],
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      },
		]
	},
	devServer: {
		port: 3000,
		host: "localhost",
	},
	devtool: 'inline-source-map'
};