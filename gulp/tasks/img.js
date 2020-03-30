module.exports = function() {
    $.gulp.task('img:dev', function() {
    return $.gulp.src('src/img/*')
        .pipe($.gulp.dest('build/img/'))
    });

    $.gulp.task('img:build', function() {
    return $.gulp.src('src/img/*')
        .pipe($.gp.image())
        .pipe($.gulp.dest('build/img/'))
    });
}