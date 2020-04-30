const { src, dest } = require("gulp")
const rename = require("gulp-rename")
const ejs = require('gulp-ejs')

const compileEjs = () => {
  return src("_dev/ejs/index.ejs")
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(dest("dest/"))
}

exports.ejs = compileEjs;
