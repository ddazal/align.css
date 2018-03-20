const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const pump = require('pump')
const rename = require('gulp-rename')

gulp.task('css', function (cb) {
	pump([
		gulp.src('./src/align.css'),
		postcss([
			cssnext(),
			cssnano()
		]),
		rename('align.min.css'),
		gulp.dest('./dist/')
	], cb)
})

gulp.task('watch', function () {
	gulp.watch('./src/align.css', ['css'])
})

gulp.task('default', ['css'])