const { series } = require('gulp');
const { ejs } = require('./ejs');
const { scss } = require('./scss');

exports.default = series(ejs, scss);
