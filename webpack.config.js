var path = require('path');
var webpack = require('webpack');
var glob = require('glob');

module.exports = {
    // エントリーポイント
    entry:{
      './webroot/js': './typescript/app.ts'
    },
    // 出力するファイル名
    output: {
        filename: '[name]/bundle.js'
    },
    // 依存関係
    resolve: {
        root:[path.join(__dirname,'node_modules')],
        extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
    },
    // TypeScriptを読み込むためのloader
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};
