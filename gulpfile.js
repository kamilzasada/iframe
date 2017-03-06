var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(done) {
    browserSync.reload();
    done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('*.*', ['watch']);
});