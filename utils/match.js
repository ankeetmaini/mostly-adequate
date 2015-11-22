var _ = require('ramda');

var match = _.curry(function (pattern, string) {
  if (string.match(pattern)) return string;
});

module.exports = match;
