var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    clean = require('gulp-clean');

var cssName = require('./package.json').name,
    dest = "./dist/";

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  //process.exit(1);
};

var copy = function(source, destination){
  return gulp.src(source)
        .pipe(gulp.dest(destination));
}

var lessFunc = function(){
  return gulp.src(['./less/'+cssName+'.less','./less/ios-skin.less'])
      .pipe(less({ compress: false }))
      .pipe(plumber())
      //.on('error', error )
      .pipe(gulp.dest(dest));
}

gulp.task('clean', function () {
    return gulp.src(['./dist/*', './less/iconfont.less'], {read: false})
        .pipe(clean()).on('error', error );
});

gulp.task('fonts', ['clean'],function(){ // 将字体文件拷贝到dist文件夹下
    copy('./node_modules/gfs-icons/iconfont/*', dest+'/iconfont');
    copy('./node_modules/gfs-icons/*.less', './less');
});

gulp.task('less', ['fonts'], lessFunc);

gulp.task('lessc', lessFunc);

gulp.task('min-styles', ['less'], function() {
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

gulp.task('default', ['fonts','min-styles']);
gulp.task('dev',['fonts','less'], function() {
  gulp.watch('./less/**/*.less', ['lessc']);
});
