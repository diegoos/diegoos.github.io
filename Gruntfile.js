module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			target:{
				files: [{
					expand: true,
					cwd :'css',
					src: ['dos.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},

		sass: {
			dist: {
				files: {
					'css/dos.css': 'css/scss/dos.scss'
				}
			}
		},

		watch: {
			all: {
				files: ['*/*.js', '*/*.css', '*/*/*.scss'],
				tasks: ['cssmin','sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Tasks
	grunt.registerTask('default', ['watch']);

};