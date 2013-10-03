'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: ['.tmp','app']
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
            },
            styles: {
                files: ['app/styles/*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'app/scripts/*.js']
        },
        githooks: {
            all: {
                'pre-commit': 'jshint'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            all: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        copy: {
            styles: {
                expand: true,
                dot: true,
                cwd: 'app/styles/',
                dest: '.tmp/styles/',
                src: '*.css'
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('default', ['copy:styles', 'autoprefixer', 'connect:server', 'watch']);

};
