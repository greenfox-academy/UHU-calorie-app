'use strict';

var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var ava = require('gulp-ava');


gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('test', () => {
	gulp.src('test.js')
		.pipe(ava());
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
  gulp.watch('./*.js', ['test']);
});

gulp.task('default', ['watch']);
