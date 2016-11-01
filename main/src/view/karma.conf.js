// Karma configuration
// Generated on Wed Jun 11 2014 09:51:52 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'app/**/*.js',
      'app/tests/*.js'
    ],

    // list of files to exclude
    exclude: ['app/js/app.module.js'],

    //broserify setup
    browserify: {
      debug: true,
      transform: [
        ['stringify'],
        ['sassify'],
        ["babelify", {presets: ["es2015"]}],
        ['browserify-istanbul', {
          ignore: ['**/*.spec.js']
        }]
      ]
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/!(third-party)/*.js': [ 'browserify', 'babel' ],
      'app/tests/unit/*.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      // filename: function (file) {
      //   return file.originalPath.replace(/\.js$/, '.es5.js');
      // },
      // sourceFileName: function (file) {
      //   return file.originalPath;
      // }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      reporters: [
        { type: 'text' } //output to console
        // { type: 'html', dir: 'target/coverage/' }
      ]
    },

    // web server port
    port: 9876,

    // plugins
    plugins: [
      'karma-firefox-launcher',
      'karma-browserify',
      'karma-spec-reporter',
      'karma-jasmine',
      'karma-coverage',
      'karma-babel-preprocessor'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Firefox'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};