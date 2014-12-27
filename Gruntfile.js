module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        autoprefixer: {

            options: {
                // Task-specific options go here.
            },

            // prefix the specified file
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'css/style.css',
                dest: 'css/devStyle.css'
            }
        },


        watch: {
            less: {
                files: 'less/style.less',
                tasks: ['less']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);

};