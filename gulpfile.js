var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function(){
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
	'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./js/'))
});
gulp.task('default', ['js']);

gulp.task('styles', function(){
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./css'))
});

