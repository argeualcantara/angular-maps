var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var sassify = require('sassify');

gulp.task('watch', () => {
  gulp.watch('app/**/js/**/*.js', ['copy']);
  gulp.watch('app/**/js/**/*.html', ['copy']);
  gulp.watch('app/**/js/**/*.scss', ['copy']);
  watch('dist').pipe(connect.reload());
})

gulp.task('connect', ['copy'], function () {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 4000
  });
});

gulp.task('stop-server', function() {
  connect.serverClose();
});

gulp.task('browserify', function () {
  return browserify({ entries: ['./app/js/app.module.js'] })
  .transform("babelify", {presets: ["es2015"]})
  .transform(stringify(['.html']))
  .transform(sassify, {
    'auto-inject': true, // Inject css directly in the code
    base64Encode: false, // Use base64 to inject css
    sourceMap: false // Add source map to the code
  })
  // Bundles it and creates a file called bundle.js
  .bundle()
  .pipe(source('js/bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['browserify'], function() {
  return gulp.src('./app/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy', 'connect', 'watch']);