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
              files: ['app/**'],
              tasks: []
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Default task(s).
    grunt.registerTask('default', ['connect:server', 'watch']);

};
