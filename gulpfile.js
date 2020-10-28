const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const { watch, series, task } = require("gulp");
const spawn = require("child_process").spawn;
const path = require("path");
const named = require("vinyl-named");
const webpack = require("webpack-stream");
var rename = require("gulp-rename");

const IMPORT_FILES = [
  "./src/libs/builder/blocks-bootstrap4.js", 
  "./src/libs/builder/initTemplate.js", 
  './src/libs/core/index.js'
];

function getFileName(path) {
  return path.replace(/(.*\/)*([^.]+).*/gi, "$2");
}

function getFilePath(path) {
  return path.replace(/^(\.\/)|(\.\w+)$/gi, '');
}

function compileSass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("dist/css"));
}

function compileEs() {
  return gulp
    .src("src/libs/**/*.js")
    .pipe(
      babel({
        presets: [["@babel/preset-env", { modules: false }]],
        plugins: ["@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
      })
    )
    .pipe(gulp.dest("dist/libs"));
}

function compileEsWithWebpack() {
  const entry = IMPORT_FILES.reduce((sum,filePath) => {
    sum[getFilePath(filePath)] = filePath
    return sum
  }, {})

  return gulp
    .src(IMPORT_FILES, { base: "./src" })
    .pipe(
      webpack({
        entry,
        mode: "development",
        devtool: "none",
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                  plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
                },
              },
            },
          ],
        },
        output: {
          filename: '[name].js',
        }
      })
    )
    .pipe(rename(path => {
      path.dirname = path.dirname.replace(/^(src)\//, '')
    }))
    .pipe(gulp.dest("dist"));
}

function copy() {
  return gulp
    .src(
      [
        "favicon.ico",
        "src/css**/*.*",
        "src/demo*/**/*.*",
        "src/fonts**/*.*",
        "src/img**/*.*",
        "src/js**/*.*",
        "src/template*/**/*.*",
        "src/libs*/**/*.css",
        "src/libs*/**/*.svg",
        "src/libs*/**/*.png",
        "src/libs*/**/*.jpg",
        "src/libs*/**/*.gif",
        "src/editor.html",
      ]
      // { base: "" }
    )
    .pipe(gulp.dest("dist"));
}

function watchSass() {
  gulp.watch("src/scss/**/*.scss", compileSass);
}

task("clean", function () {
  return spawn("rm", ["-rf", path.join(__dirname, "dist")]);
});

task("default", series("clean", copy, compileEs, compileEsWithWebpack, compileSass));
task("build", series("clean", copy, compileEs, compileEsWithWebpack, compileSass));
task("dev", function() {
  watch(['src*/**/*.*', '!src*/**/*.md'], series(copy, compileEs, compileEsWithWebpack, compileSass))
})
