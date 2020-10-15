const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const { watch, series, task } = require("gulp");
const spawn = require("child_process").spawn;
const path = require("path");

function compileSass() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("dist/css"));
}

function compileEs() {
  return gulp
    .src("libs/**/*.js")
    .pipe(
      babel({
        presets: [["@babel/preset-env", { modules: false }]],
      })
    )
    .pipe(gulp.dest("dist/libs"));
}

function copy() {
  return gulp
    .src(
      [
        "css**/*.*",
        "demo/**/*.*",
        "fonts**/*.*",
        "img**/*.*",
        "js**/*.*",
        "libs/**/*.css",
        "libs/**/*.svg",
        "libs/**/*.png",
        "libs/**/*.jpg",
        "libs/**/*.gif",
        "editor.html",
      ],
      { base: "." }
    )
    .pipe(gulp.dest("dist"));
}

function watchSass() {
  gulp.watch("scss/**/*.scss", compileSass);
}

task("clean", function () {
  return spawn("rm", ["-rf", path.join(__dirname, "dist")]);
});

task("default", series("clean", copy, compileEs, compileSass));
