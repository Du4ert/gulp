module.exports = function() {
    $.gulp.task('script', function() {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 
        ])
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gulp.dest('build/js/main.js'))
        .pipe($.bs.reload({
            stream: true
        }));
    })
}