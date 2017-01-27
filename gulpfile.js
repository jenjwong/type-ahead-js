const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('index.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('css/styles.css', ['styles']);
});
