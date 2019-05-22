var gulp = require("gulp"),
	watch = require('gulp-watch'),
	webpack = require('webpack');


gulp.task('watch', function () {
	gulp.watch('./public/*.css', gulp.series('build-scripts'));
	gulp.watch('./public/*.js', gulp.series('build-scripts'));
});

gulp.task('build-scripts', done => {
	webpack(require('./webpack.config.js'),
		(err, stats) => {
			//console.log(stats);
			if (err) throw new util.PluginError('webpack', err);
		});
	done();
});