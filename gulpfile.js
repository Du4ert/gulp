'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('clean', 'html', 'fonts', 'sass', 'script:lib', 'script', 'img:build'),
    //$.gulp.parallel('watch', 'serve')
));

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('html', 'fonts', 'sass', 'script:lib', 'script', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));