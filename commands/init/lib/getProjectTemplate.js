const request = require('@filway-cli/request');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};