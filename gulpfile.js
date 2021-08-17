const gulp = require('gulp');
const minify = require('gulp-minify');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['./test/*.spec.js'], {read: false}).pipe(mocha({reporter: 'nyan'}))
});

gulp.task('minify', function(){
  return gulp.src('./index.js')
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('test', 'minify'));