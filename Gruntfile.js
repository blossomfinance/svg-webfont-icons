'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        destLess: 'dist/less',
        destScss: 'dist/scss',
        options: {
          syntax: 'bem',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon-',
            mixinPrefix: 'icon-'
          },
          stylesheets: ['css', 'less', 'scss']
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  // grunt.registerTask('default', ['webfont:css', 'webfont:scss']);
  grunt.registerTask('default', ['webfont:icons']);
};
