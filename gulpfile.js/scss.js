const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

const compileScss = () => {
  return src("_dev/scss/common.scss")
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(dest("dest/assets/css"));
}

exports.scss = compileScss;
