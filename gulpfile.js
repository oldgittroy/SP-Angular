var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')();
var babel = require('gulp-babel');

gulp.task('default', function () {
    //$.util.log('***Task: ', $.util.colors.magenta('gulp build-hspug'));
});

gulp.task('build-hspug', function () {
   var dev = [
       './src/myController.js',
       './src/index.js',
   ]; 
   
   gulp.src(dev)
   .pipe(babel())
   .pipe($.concat('test.js'))
   //.pipe(gulp.dest('./'))
   ;
   
   
});