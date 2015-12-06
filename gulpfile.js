var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/css/index.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
});

gulp.task('build', function() {
  return browserify({entries: 'src/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', ['stylesheets', 'build'], function() {
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('*.html', ['livereload']);
  gulp.watch('src/**/*.css', ['stylesheets']);
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
