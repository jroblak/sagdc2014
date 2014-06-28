var gulp = require('gulp')
  , gutil = require('gulp-util')
  , rimraf = require('gulp-rimraf')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
  , minifycss = require('gulp-minify-css')
  , minifyhtml = require('gulp-minify-html')
  , processhtml = require('gulp-processhtml')
  , jshint = require('gulp-jshint')
  , streamify = require('gulp-streamify')
  , uglify = require('gulp-uglify')
  , connect = require('gulp-connect')
  , source = require('vinyl-source-stream')
  , browserify = require('browserify')
  , watchify = require('watchify')
  , gulpif = require('gulp-if')
  , paths;

var watching = false;

paths = {
  assets: 'src/assets/**/*',
  css:    'src/css/*.css',
  libs:   [
    './src/js/lib/phaser.js'
  ],
  js:     ['src/js/*.js', 'src/js/**/*.js', '!src/js/{lib, lib/*.js}'],
  entry: './src/js/main.js',
  dist:   './dist/'
};

gulp.task('clean', function () {
  return gulp.src(paths.dist, {read: false})
    .pipe(rimraf({ force: true }))
    .on('error', gutil.log);
});

gulp.task('copy', ['clean'], function () {
  gulp.src(paths.assets)
    .pipe(gulp.dest(paths.dist + 'assets'))
    .on('error', gutil.log);
});

gulp.task('copylibs', ['clean'], function () {
  gulp.src(paths.libs)
    .pipe(gulpif(!watching, uglify({outSourceMaps: false})))
    .pipe(gulp.dest(paths.dist + 'js/lib'))
    .on('error', gutil.log);
});

gulp.task('compile', ['clean'], function () {
  var bundleMethod = watching ? watchify : browserify;
  var bundler = bundleMethod({ entries: [paths.entry] });

  var bundlee = function() {
    bundler
      .bundle({ debug: true })
      .pipe(source('main.min.js'))
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
      .pipe(gulpif(!watching, streamify(uglify({outSourceMaps: false}))))
      .pipe(gulp.dest(paths.dist))
      .on('error', gutil.log);
  };

  if (watching) {
    bundler.on('update', bundlee)
  }

  return bundlee();
});

gulp.task('minifycss', ['clean'], function () {
 gulp.src(paths.css)
    .pipe(minifycss({
      keepSpecialComments: false,
      removeEmpty: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist))
    .on('error', gutil.log);
});

gulp.task('processhtml', ['clean'], function() {
  return gulp.src('src/index.html')
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest(paths.dist))
    .on('error', gutil.log);
});

gulp.task('minifyhtml', ['processhtml'], function() {
  gulp.src('dist/index.html')
    .pipe(minifyhtml())
    .pipe(gulp.dest(paths.dist))
    .on('error', gutil.log);
});

gulp.task('html', function(){
  gulp.src('src/*.html')
    .pipe(connect.reload())
    .on('error', gutil.log);
});

gulp.task('connect', function () {
  connect.server({
    root: ['./src'],
    port: 9000,
    livereload: false
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/index.html', paths.css, paths.js], ['html']);
  watching = true;
});

gulp.task('default', ['connect', 'watch', 'build']);
gulp.task('build', ['clean', 'copy', 'copylibs', 'compile', 'minifycss', 'processhtml', 'minifyhtml']);
