const { src, dest, watch, series } = require("gulp");
const ejs = require('gulp-ejs');

const devEjsPath = "_dev/ejs/index.ejs"
const watchEjsPath = "_dev/ejs/**/*.ejs"
const destEjsPath = "dest/"

const compileEjs = () => {
  return src(devEjsPath)
    .pipe(ejs())
    .pipe(dest(destEjsPath))
};

const watchEjsFiles = () => watch(watchEjsPath, compileEjs)

exports.default = series(compileEjs, watchEjsFiles);
