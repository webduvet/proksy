var gulp = require('gulp');
var jshint = require('gulp-jshint');
var fs = require('fs');


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


