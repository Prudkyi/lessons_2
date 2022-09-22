// copy libres

export const libres = () => {
    return app.gulp.src(app.path.src.libres)
        .pipe(app.gulp.dest(app.path.build.libres))
        .pipe(app.plugins.browserSync.stream())
}