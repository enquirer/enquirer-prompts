'use strict';

module.exports = function(enquirer) {
  enquirer.register('checkbox', require('prompt-checkbox'));
  enquirer.register('confirm', require('prompt-confirm'));
  enquirer.register('editor', require('prompt-editor'));
  enquirer.register('expand', require('prompt-expand'));
  enquirer.register('list', require('prompt-list'));
  enquirer.register('password', require('prompt-password'));
  enquirer.register('radio', require('prompt-radio'));
  enquirer.register('rawlist', require('prompt-rawlist'));
};
