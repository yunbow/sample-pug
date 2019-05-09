var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function () {
    gulp.src(
        ['./src/**/*.pug', '!./src/**/_*.pug']
    )
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
});