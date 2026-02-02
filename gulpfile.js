const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('src/styles/main.scss')
    .pipe(
      sass({ outputStyle: 'compressed' })
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('dist/css'));
}


function images() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

function watch(done) {
  gulp.watch('src/styles/**/*.scss', styles);
  gulp.watch('src/images/**/*', images);
  done();
}

exports.default = gulp.series(styles, images);
exports.watch = watch;
