var gulp = require('gulp');
var jshint = require('gulp-jshint');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

gulp.task('bin', function() {
});


