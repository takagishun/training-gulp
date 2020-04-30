const { parallel, series } = require('gulp');
const { ejs } = require('./ejs');
const { scss } = require('./scss');
const { server } = require('./server');
const { watch } = require('./watch');

exports.default = series(parallel(scss, ejs, watch), server);
