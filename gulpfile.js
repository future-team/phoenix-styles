var gulp = require('gulp'),
    webpack = require('webpack'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    minifycss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    webpackConfig = require('./webpack.config.js');

var dest = "./dist/";

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  //process.exit(1);
};

gulp.task('clean', function () {
    return gulp.src(['./dist/*'], {read: false})
        .pipe(clean()).on('error', error );
});

gulp.task('webpack', ['clean'], function (done) {
    webpack(webpackConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        done();
    });
});

gulp.task('min-styles', ['webpack'], function() {
  gulp.src(['./dist/*.css'])
      // .pipe(concat(cssName+'.css') // 合并文件为all.css
      .pipe(gulp.dest(dest)) // 输出all.css文件
      .pipe(rename({ suffix: '.min' })) // 重命名all.css为 all.min.css
      .pipe(minifycss()) // 压缩css文件
      .pipe(gulp.dest(dest)); // 输出all.min.css
});

/* gulp.task('js', function() {
    gulp.src(['./js/*.js'])
        .pipe(concat(cssName+'.js'))
        .pipe(gulp.dest(dest));
}); */

gulp.task('default', ['min-styles']);
gulp.task('dev',['webpack'], function() {
  gulp.watch('./less/**/*.less', ['webpack']);
});
