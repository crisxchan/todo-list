const webpack = require('webpack');
require('dotenv').config({ path: './.env' });
const path = require('path');
const json5 = require('json5');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            util: require.resolve("util/"),
            path: require.resolve("path-browserify"),
        }
    },
    module: {
        rules: [
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        })
    ]
}