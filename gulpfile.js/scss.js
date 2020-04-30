const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

const devSassPath = "_dev/scss/common.scss"
const watchSassPath = "_dev/scss/**/*.scss"
const destCssPath = "dest/assets/css"

const compileSass = () => {
  return src(devSassPath)
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(dest(destCssPath));
}

const watchSassFiles = () => watch(watchSassPath, compileSass);

exports.default = series(compileSass, watchSassFiles);
