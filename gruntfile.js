module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compress: {
            main: {
                options: {
                    archive: 'dist/medkumo_sdk.zip',
                    dot: true
                },
                expand: true,
                cwd: 'dist/',
                src: ['**', '.*'],
                dest: 'medkumo_sdk/'
            }
        },

        copy: {
            main: {
                files: [
								{
                    expand: true,
                    src: ['css/*'],
                    dest: 'dist/'
                },
								{
                    expand: true,
                    src: ['images/*'],
                    dest: 'dist/'
                },
								{
                    expand: true,
										src: ['medkumo.js'],
                    dest: 'dist/'
                },
								{
										 expand: true,
										 src: ['lib/*'],
										 dest: 'dist/'
							 	},
                {
                    expand: true,
                    src: ['*.html'],
                    dest: 'dist/'
                }
							],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
