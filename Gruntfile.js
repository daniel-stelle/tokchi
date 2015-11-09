module.exports = function(grunt) {
	var pkg = grunt.file.readJSON("package.json");

	grunt.initConfig({
		uglify : {
			options : {
				banner : '//! Tokchi ' + pkg.version + ' - ' + pkg.copyright + ', https://github.com/tiguchi/tokchi - MIT license\n',
			},
			my_target : {
				files : {
					'build/jquery.tokchi.min.js' : [ 'src/jquery.tokchi.js' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [ 'uglify' ]);
};