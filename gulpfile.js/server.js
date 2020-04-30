const browserSync = require('browser-sync')

const browserInit = () => {
  return browserSync.init({
    server: {
      baseDir: "dest/",
      index: 'index.html'
    },
    port: 3000
  });
}

const browserReload = () => {
  return browserSync.reload()
}

exports.server = browserInit
exports.serverReload = browserReload