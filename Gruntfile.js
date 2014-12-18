module.exports = function(grunt) {

    // Author: Michael Oakley (michael.oakley@nrel.gov)

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Copy over 3rd party libraries installed via bower
        copy: {
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src:  '**/*',
                        dest: 'public/libs/bootstrap/'
                    },
                    {
                        expand: true, // enable options like flatten
                        flatten: true,
                        src:  'bower_components/jquery/dist/*',
                        dest: 'public/libs/jquery/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src:  'bower_components/modernizr/modernizr.min.js',
                        dest: 'public/libs/modernizr/'
                    }
                    ,{   // Copy over the AddThis CSS to be concat and minned with the other CSS files
                        expand: true,
                        flatten: true,
                        src:  'public/libs/addthis/css/*',
                        dest: 'public/css/src/'
                    }
                ]
            }
        },

        // Concat our files
        concat: {

            // /public/js/src/*.js --> /public/js/app.js
            js: {
                options: {
                    separator: ';',
                    banner: '/*!\n' +
                            ' * DEVELOPMENT VERSION\n' +
                            ' * EERE Template v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
                            ' * <%= grunt.template.today("yyyy-mm-dd h:MM") %>\n'+
                            ' */\n'
                },
                src:  'public/js/src/*.js',
                dest: 'public/js/app.js'
            },

            // /public/css/src/*.css --> /public/css/app.css
            css: {
                options: {
                    banner: '/*!\n' +
                            ' * DEVELOPMENT VERSION\n' +
                            ' * EERE Template v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
                            ' * <%= grunt.template.today("yyyy-mm-dd h:MM") %>\n'+
                            ' */\n'
                },
                files: {
                    'public/css/app.css':
                        [
                        'public/css/src/bootstrap.eere.css',
                        'public/css/src/addthis.css',
                        'public/css/src/banners.css',
                        'public/css/src/footer.css',
                        'public/css/src/forms.css',
                        'public/css/src/sidenav.css',
                        'public/css/src/tables.css',
                        'public/css/src/topnav.css',
                        'public/css/src/typography.css',
                        'public/css/src/components.css'
                        ]
                }
            }
        },

        uglify: {
            // /public/js/app.js --> /public/js/app.min.js
            js: {
                options: {
                    banner: '/*!\n' +
                            ' * EERE Template v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
                            ' * Build date: <%= grunt.template.today("yyyy-mm-dd h:MM") %>\n'+
                            ' * Build author: <%= pkg.author %>\n' +
                            ' */\n',
                    compress: { drop_console: true}
                },
                src:  'public/js/app.js',
                dest: 'public/js/app.min.js'
            },

            // /public/src/*.js --> /public/js/app.min.js
            release: {
                options: {
                    banner: '/*!\n' +
                            ' * EERE Template v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
                            ' * Build date: <%= grunt.template.today("yyyy-mm-dd h:MM") %>\n'+
                            ' * Build author: <%= pkg.author %>\n' +
                            ' */\n',
                    compress: { drop_console: true}
                },
                files: {
                    'public/js/app.min.js': ['public/js/src/*.js']
                }
            }
        },

        cssmin: {

            release: {
                options: {
                    keepSpecialComments: 0,
                    banner: '/*!\n' +
                            ' * EERE Template v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
                            ' * Build date: <%= grunt.template.today("yyyy-mm-dd h:MM") %>\n'+
                            ' * Build author: <%= pkg.author %>\n' +
                            ' */\n'
                },
                expand: true,
                cwd:  'public/css/src/',
                files: { 'public/css/app.min.css':['public/css/app.css']}

                // files: {
                //     'public/css/app.min.css':
                //         [
                //         'public/css/src/bootstrap.eere.css',
                //         'public/css/src/addthis.css',
                //         'public/css/src/banners.css',
                //         'public/css/src/footer.css',
                //         'public/css/src/sidenav.css',
                //         'public/css/src/typography.css',
                //         ]
                // }

            }
        },

        // Watch for changes in our custom code. (useful for development)
        watch: {
            js: {
                files: ['public/js/src/*.js'],
                tasks: ['concat:js', 'uglify']
            },
            css: {
                files: ['public/css/src/*.css'],
                tasks: ['concat:css', 'cssmin:release']
            }
        }

    });

    // Grunt tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint'); // todo


    // Tasks to handle just CSS or JS files.
    grunt.registerTask('css', [ 'watch:css']);
    grunt.registerTask('js',  [ 'concat', 'uglify', 'copy']);

    // run the dev task (copy 3rd party libs over, concat css and js files)
    grunt.registerTask('dev',     ['concat:css', 'concat:js']   );

    // run all the "release" subtasks to generate a production ready build from dev build
    grunt.registerTask('release', ['copy:release',  'uglify:release', 'cssmin:release']);


    // Default task
    grunt.registerTask('default', ['copy:release',  'uglify:release', 'cssmin:release']);

};
