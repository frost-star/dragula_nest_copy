var gulp = require('gulp');

var ts = require('gulp-typescript');
var tsConfig = require('./typescript/tsconfig.json');

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

var runSequence = require('run-sequence');

// TypeScriptのコンパイルとwebpackの実行
gulp.task('ts', function () {
    // TypeScriptのコンパイル
    var tsResult = gulp.src(['./typescript/**/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./'));
    return tsResult;
});

// コマンドで「> gulp」と入力したときのタスク
gulp.task('default', ['ts']);
