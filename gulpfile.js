var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  fs = require('fs'),
  babel = require('gulp-babel')
  ;


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

gulp.task('dist', function() {
  fs.exists('./dist', function(res){
    if (res) {
      fs.rmdirSync('./dist');
    }
    fs.mkdirSync('./dist');
    fs.mkdirSync('./dist/bin');

  })
});

gulp.task('comp', function(){
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});


