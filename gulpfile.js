var gulp = require('gulp');
var config = require('./gulp.config')();
var concat = require('gulp-concat')
var babel = require('gulp-babel');

gulp.task('default', function () {

});

gulp.task('build-hspug', function () {
   var dev = [
       './src/myController.js',
       './src/index.js',
   ]; 
   
   gulp.src(dev)
   .pipe(babel())
   .pipe(concat('h-spug.js'))
   .pipe(gulp.dest('./dist'))
   ;
   
   
});