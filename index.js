var through2 = require('through2');

module.exports = function(cb) {
  var _src = '';
  return through2(function(chunk, enc, callback) {
    _src += chunk.toString();
    callback();
  }, function(callback) {
    cb.bind(this, _src, callback)();
  });
};