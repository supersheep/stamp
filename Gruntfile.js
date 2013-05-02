module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        jshint: {
            options:{
                asi:true
            },
            all: ['Gruntfile.js']
        },
        clean: ["dest"],
        coffee:{
            options:{
                compress:true
            },
            compile:{
                files:[{expand: true, cwd:"src/js/", src: ['**/*.coffee'], dest: 'dest/js/', filter: 'isFile',  ext: '.min.js'}] 
            }
        },
        stylus:{
            options:{
                compress:true
            },
            compile: {
                files:[{expand: true, cwd:"src/css/", src: ['**/*.styl'], dest: 'dest/css/', ext:".min.css", filter: 'isFile'}]  
            }
        },
        copy:{
            imgs:{
                files:[{expand: true, src:["src/img/*.png"], dest:"dest/img/"}]
            },
            jslib:{
                files:[{expand: true, src:["src/js/lib/*.js"], dest:"dest/js/lib/"}]
            }
        },
        watch:{
            styl: {
                files: ['src/css/**/*.styl'],
                tasks: ['stylus']
            },
            coffee:{
                files: ['src/js/**/*.coffee'],
                tasks: ['coffee']
            },
            options: {
              nospawn: true
            }
        }
    });


    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default",["jshint","clean","coffee","stylus","copy"]);
};