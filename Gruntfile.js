/**
 * **@requires**
 * - [lodash](http://github.com/lodash/lodash
 *
 * @module Gruntfile
 * @requires [Lo-Dash](http://lodash.com), [RequireJS](http://requirejs.org)
 * @returns {Function}
 */ 
module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash');
    var requirejs = require('requirejs');

    grunt.initConfig({
        dirs: {
            dist: 'dist/<%= pkg.version %>',
            lib: 'lib',
            src: 'src',
            test: 'test'
        },
        pkg: grunt.file.readJSON('package.json')
    });

    // Install dependencies (BOWER)
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.config('bower', {
        install: {
            options: {
                cleanBowerDir: true,
                cleanTargetDir: true
            }
        }
    });

    // Generate documentation (YUIDOC)
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.registerTask('develop', [ 'bower', 'yuidoc' ]);

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.config('copy', {
        // Copy the source code to temp directory for compiling templates
        srcToTmpl: {
            cwd: '<%= dirs.src %>',
            dest: '<%= dirs.dist %>/tmpl',
            expand: true,
            src: '**'
        },
        // Copy source to top of dist/
        minToDist: {
            cwd: '<%= dirs.dist %>/min',
            dest: '<%= dirs.dist %>',
            expand: true,
            src: '**'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.config('handlebars', {
        compile: {
            files: {
                '<%= dirs.dist %>/tmpl/tmsTemplates.js': [
                    '<%= dirs.dist %>/tmpl/domain/resources/invoice/**/*.handlebars',
                    '<%= dirs.dist %>/tmpl/domain/resources/creditMemo/**/*.handlebars'
                ],
                '<%= dirs.dist %>/tmpl/studentTemplates.js': [
                    '<%= dirs.dist %>/tmpl/domain/services/sessionSchedulingService/**/*.handlebars'
                ],
                '<%= dirs.dist %>/tmpl/teacherTemplates.js': [
                    '<%= dirs.dist %>/tmpl/domain/services/availabilitySchedulingService/**/*.handlebars'
                ]
            },
            options: {
                amd: true,
                namespace: function (fileName) {
                    var parsingPos = fileName.indexOf('/view/templates/');
                    var aggregate, template;

                    if ( parsingPos < 0 ) {
                        throw new Error('Cannot parse namespace for ' + fileName);
                    }
                    
                    return [
                        fileName.substr(0, parsingPos).split('/').pop(),
                        fileName.substr(parsingPos + '/view/templates/'.length).split('.').shift()
                    ].join('.');
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.config('clean', {
        distDir: [ '<%= dirs.dist %>/tmpl', '<%= dirs.dist %>/min' ]
    });

    grunt.registerTask('requirejs',  'Optimize JS and CSS source with RequireJS', function () {
        var dirs = grunt.config('dirs');
        var done = this.async();

        grunt.log.writeln('Building...');

        requirejs.optimize(
            {
                dir: dirs.dist + '/min',
                modules: [
                    { name: 'tms' },
                    { name: 'student' },
                    { name: 'teacher' }
                ],
                appDir: dirs.dist + '/tmpl',
                baseUrl: '.',
                mainConfigFile: dirs.dist + '/tmpl/requireConfig.js',
                useStrict: true
            }, function (output) {
                grunt.verbose.subhead('Build output');

                grunt.verbose.writeln(output);

                grunt.log.ok('Build complete.');

                done();
            }, function (err) {
                grunt.fail.fatal('Build failure: ' + err);
            }
        );

    });
        
    grunt.registerTask('dist', 'Compile templates and optimize source', [
        'copy:srcToTmpl',
        'handlebars',
        'requirejs',
        'copy:minToDist',
        'clean:distDir'
    ]);

    grunt.registerTask('default', [ 'develop', 'dist' ]);
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    cleanBowerDir: true,
                    cleanTargetDir: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};
