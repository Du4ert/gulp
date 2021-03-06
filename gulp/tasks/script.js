 module.exports = function() {
    $.gulp.task('script:lib', function() {
    return $.gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        //'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        //'node_modules/slick-carousel/slick/slick.min.js',
        ])
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gp.if($.env === 'production', $.gp.terser()))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });

    $.gulp.task('script', function() {
        return $.gulp.src('src/js/main.js')
        .pipe($.gp.if($.env === 'development', $.gp.sourcemaps.init()))
        .pipe($.gp.if($.env === 'production', $.gp.terser()))
        .pipe($.gp.if($.env === 'development', $.gp.sourcemaps.write()))
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
}