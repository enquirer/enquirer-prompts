'use strict';

module.exports = function(enquirer) {
  enquirer.register('checkbox', require('enquirer-prompt-checkbox'));
  enquirer.register('confirm', require('enquirer-prompt-confirm'));
  enquirer.register('expand', require('enquirer-prompt-expand'));
  enquirer.register('input', require('enquirer-prompt-input'));
  enquirer.register('list', require('enquirer-prompt-list'));
  enquirer.register('password', require('enquirer-prompt-password'));
  enquirer.register('rawlist', require('enquirer-prompt-rawlist'));
};
