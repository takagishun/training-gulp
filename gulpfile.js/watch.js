const { watch } = require("gulp")
const { serverReload } = require("./server")
const { scss } = require("./scss")
const { ejs } = require("./ejs")

const watchFiles = (cb) => {
  watch("_dev/scss/**/*.scss", scss);
  watch("_dev/scss/**/*.scss", serverReload);
  watch("_dev/ejs/**/*.ejs", ejs)
  watch("_dev/ejs/**/*.ejs", serverReload)
  cb()
}

exports.watch = watchFiles