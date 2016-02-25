'use strict'

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
import react_render from 'gulp-react-render'

var path = {
    HTML: 'src/static/index.html',
    STATIC: ['src/static/**/*.*'],
    ALL: ['src/**/*.js', 'src/static/**/*.*'],
    ENTRY_POINT: ['src/main.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/',
    DEST: 'dist',
    TEMPLATE_INDEX: 'src/templates/index.html',
    STATIC_INDEX: 'index.html'
}

gulp.task('copy', function () {
    gulp.src(path.STATIC)
        .pipe(gulp.dest(path.DEST));
})

gulp.task('build-dev', function () {
    browserify({
        entries: [path.ENTRY_POINT]
    }).
        transform(babelify.configure({
            presets: ["es2015", "react"]
        }))
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(gulp.dest(path.DEST_BUILD));
})

gulp.task('build', function () {
    browserify({
        entries: [path.ENTRY_POINT]
    }).
        transform(babelify.configure({
            presets: ["es2015", "react"]
        }))
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(path.DEST_BUILD));
})

gulp.task('renderStatic', function () {
    var staticReact = require('./src/renderToString')

    return gulp.src(path.TEMPLATE_INDEX).
        pipe(template({ staticReact: staticReact })).
        pipe(gulp.dest(path.DEST_BUILD))
})

gulp.task('release', ['copy', 'build', 'renderStatic']);

gulp.task('dev', ['copy', 'build-dev', 'renderStatic']);

gulp.task('default', ['dev'])