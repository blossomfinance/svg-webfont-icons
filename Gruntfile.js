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
          fontPathVariables: true,
          stylesheets: ['css', 'less', 'scss'],
          syntax: 'bem',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon-',
            mixinPrefix: 'icon-'
          },
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont:icons']);
};
