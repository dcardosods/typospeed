'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: 'app'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            all: {
                files: ['app/**/*'],
                tasks: []
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'app/scripts/*.js', '!app/scripts/vendor/*']
        },
        githooks: {
            all: {
                'pre-commit': 'jshint'
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-githooks');

    // Default task(s).
    grunt.registerTask('default', ['connect:server', 'watch']);

};
