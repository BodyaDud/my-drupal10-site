var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("gulp-autoprefixer");

// Source sass files
var SASS = "scss";
// Output directory
var CSS = "css";

// Building sass
gulp.task("sass", (done) => {
  gulp
    .src(SASS + "/**/*.scss")
    .pipe(sass.sync({}).on("error", sass.logError))
    .pipe(autoprefixer({}))
    .pipe(gulp.dest(CSS));
  done();
});

// Build task: 'gulp build'
gulp.task("build", gulp.series("sass"));
// Watch task: 'gulp watch'
gulp.task("watch", function () {
  return gulp.watch(SASS + "/**/*.scss", gulp.series("sass"));
});

// Default task: 'gulp'
gulp.task("default", gulp.series("build", "watch"));
