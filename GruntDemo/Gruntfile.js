module.exports = function (grunt) {
    var sassStyle = 'expanded';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine:{
                files:{
                    'app/css/style.css':['app/css/bg.css','app/css/fs.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'app/js/main.min.js': ['app/js/main.js']
                }
            }
        },
        jshint: {
            all: ['app/js/main.js']
        },
        watch: {
            scripts: {
                files: ['app/js/main.js','app/css/bg.css','app/css/fs.css'],
                tasks: ['jshint','uglify','cssmin']
            },
            livereload: {
                options: {
                    livereload: ''
                },
                files: [
                    'app/index.html',
                    'app/css/style.css',
                    'app/js/main.min.js'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('concatcss',['cssmin']);
    grunt.registerTask('concatjs',['uglify']);
    grunt.registerTask('hint',['jshint']);
    grunt.registerTask('watchit',['watch']);

    grunt.registerTask('default',['uglify']);
}