const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};