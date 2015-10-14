var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('build', function() {
  return browserify({entries: 'src/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('*.html', ['livereload']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8888
  });
});

gulp.task('livereload', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);
