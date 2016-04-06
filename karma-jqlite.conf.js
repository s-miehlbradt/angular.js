'use strict';

var angularFiles = require('./angularFiles');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS: jqLite', logFile: 'karma-jqlite.log'});

  config.set({
    files: angularFiles.mergeFilesFor('karma'),
    exclude: angularFiles.mergeFilesFor('karmaExclude'),

    junitReporter: {
      outputFile: 'test_out/jqlite.xml',
      suite: 'jqLite'
    },
      //istanbul coverage using clover format
    reporters: ['coverage'],
      preprocessors: angularFiles.mergeFilesFor('karma'),

      // configure the reporter
      coverageReporter: {
          type : 'clover',
          dir : 'coverage/'
      }
  });
};
