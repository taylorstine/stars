module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: ['public/dist/*'],

    compass: {
      options: {
        sassDir: 'scss',
        cssDir: 'public/dist/',
        outputStyle: 'expanded',
        importPath: ["./"],
        relativeAssets: true,
        bundleExec: true
      },
      dist: {},
      watch: {
        options: {
          watch: true
        }
      },
      stage: {},
      prod: {
        options: {
          outputStyle: 'compressed'
        }
      }
    },


    watch: {
      livereload: {
        files: ['public/dist/css/*.css', 'views/*.jade', 'views/**/*.jade', 'public/dist/js/*.js'],
        options: {
          livereload: 35749
        }
      },
    },


    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      default: {
        tasks: ["shell:webpack-client", "compass:watch", "watch"]
      },
    },

    shell: {
      'webpack-client': {
        command: 'webpack --config webpack.config.js --watch',
        options: {
          stdout: true,
          stderr: true,
          execOptions: {
            maxBuffer: 2000 * 1024
          }
        }
      },

    },
  });

  grunt.registerTask('default', function() {
    grunt.task.run(['clean', 'compass:dist', 'concurrent:default']);
  })
};

