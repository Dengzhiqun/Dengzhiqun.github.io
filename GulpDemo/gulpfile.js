var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
//创建任务
gulp.task("sass",function () {
    console.log("在命令行中输入gulp henry，就会执行当前任务")
})
//scss转css
gulp.task("sass",function () {
    return gulp.src("app/scss/style.scss").pipe(sass()).pipe(gulp.dest("app/css"));
})
//js转压缩min.js
gulp.task("uglify",function () {
    return gulp.src("app/js/main.js").pipe(uglify()).pipe(rename({suffix:".min"})).pipe(gulp.dest("app/minjs"));
})
//创建自动执行任务
gulp.task("auto",function () {
    //任务主要做的事情是，持续观察文件路径是否发生变化
    gulp.watch("app/js/main.js",['uglify']);
    gulp.watch("app/scss/style.scss",['sass']);
})
//实现自动执行
gulp.task('default',['auto']);