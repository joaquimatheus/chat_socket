var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    ts = require('gulp-typescript');
    

var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"))
})

gulp.task('default', gulp.series('build'))

gulp.task('serve', () => {
    gulp.watch('./server/**/*.ts')

    livereload.listen();

    nodemon({
        exec: 'ts-node ./server/index.ts',
        ext: 'ts'
    }).on('restart', () => {
        setTimeout(() => {
            console.log('reload!')
            livereload.reload();
        }, 500);
    });
});

gulp.task('watch', gulp.series('build', 'serve'))
