// cucumber.js

common = '--strict --require features --format pretty --tags ~@skip';

module.exports = {
  build: common + ' --format progress',
  'default': common,
  'node-4': common + ' --tags "not @node-6"',
  'es5': '--tags ~@es6'
};