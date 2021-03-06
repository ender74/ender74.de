'use strict'

import React from 'react'
import gulp from 'gulp'
import gutil from 'gulp-util'
import template from 'gulp-template'
import uglify from 'gulp-uglify';
import htmlreplace from 'gulp-html-replace'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import streamify from 'gulp-streamify'

import { Provider } from 'react-intl-redux'
import App from './src/views/app/components/App'
import Start from './src/views/app/start/Start'
import store from './src/views/app/store'

require('intl')

var path = {
    HTML: 'src/templates/index.html',
    STATIC: 'src/static/**/*.*',
    ALL: ['src/**/*.js', 'src/static/**/*.*'],
    ENTRY_POINT: ['src/start.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/',
    DEST: 'dist',
    TEMPLATE_INDEX: 'src/templates/index.html',
    STATIC_INDEX: 'index.html'
}

function bundler() {
    const transformer = babelify.configure({
        presets: ["@babel/preset-env", "@babel/react"]
    })
    var props = {
        cache: {}, packageCache: {}, fullPaths: true,
        entries: [path.ENTRY_POINT],
        transform: [transformer],
        debug: true
    }
    return browserify(props)
}

function baseBuild() {
    return browserify({
        entries: [path.ENTRY_POINT]
    }).
        transform(babelify.configure({
            presets: ["@babel/preset-env", "@babel/react"]
        }))
        .bundle()
        .pipe(source(path.MINIFIED_OUT));
}

gulp.task('build-watch', function (done) {
    gulp.watch(path.STATIC, ['copy'])
    const myBundler = watchify(bundler())
    const bundle = function () {
        myBundler.bundle()
            .on('error',function(e){
                gutil.log(e);
            })
            .pipe(source(path.MINIFIED_OUT))
            .pipe(gulp.dest(path.DEST_BUILD))
        console.log("updated")
    }
    myBundler.on('update', bundle)
    bundle();
    done();
})

gulp.task('copy', function (done) {
    gulp.src([path.STATIC, path.HTML])
        .pipe(gulp.dest(path.DEST));
    done();
})

gulp.task('build-dev', function (done) {
    baseBuild()
        .pipe(gulp.dest(path.DEST_BUILD));
    done();
})

gulp.task('build', function (done) {
    baseBuild()
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(path.DEST_BUILD));
    done();
})

gulp.task('renderStatic', function () {
    var staticContent = <Provider store={store}><App><Start /></App></Provider>
    var staticReact = require('./src/renderToString')(
        staticContent)

    return gulp.src(path.TEMPLATE_INDEX).
        pipe(template({ staticReact: staticReact })).
        pipe(gulp.dest(path.DEST_BUILD))
})

gulp.task('release', gulp.series('copy', 'build'));

gulp.task('watch', gulp.series('copy', 'build-watch'));

gulp.task('dev', gulp.series('copy', 'build-dev'));

gulp.task('default', gulp.series('watch'))
