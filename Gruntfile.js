module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      all: 'dist',
    },
    copy: {
      prod: {
        expand: true,
        cwd: 'src',
        src: '{images,scripts,vendor}/**/*',
        dest: 'dist',
      }
    },
    jshint: {
      build: {
        options: {
          jshintrc: '.jshintrc',
        },
        src: '*.js',
      },
      deck: {
        options: {
          jshintrc: 'src/scripts/.jshintrc',
        },
        src: 'src/scripts/**/*.js',
      },
    },
    stylus: {
      all: {
        src: 'src/styles/deck.styl',
        dest: 'dist/deck.css',
      },
    },
    deck: {
      dev: {
        options: {
          template: 'src/templates/deck.jade',
          pretty: true,
        },
        expand: true,
        cwd: 'src/decks',
        src: '*.md',
        ext: '.html',
        dest: 'dist',
      },
      prod: '<%= deck.dev %>',
    },
    'gh-pages': {
      site: {
        options: {
          base: 'dist',
          clone: 'dist/gh-pages',
        },
        src: ['**/*'],
      },
    },
    watch: {
      styles: {
        files: '<%= stylus.all.src %>',
        tasks: ['stylus:all'],
      },
      scripts_build: {
        files: '<%= jshint.build.src %>',
        tasks: ['jshint:build'],
      },
      scripts_deck: {
        files: '<%= jshint.deck.src %>',
        tasks: ['jshint:deck'],
      },
      content: {
        files: [
          '<%= deck.dev.options.template %>',
          'src/decks/*.md',
        ],
        tasks: ['deck:dev'],
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          '<%= jshint.deck.src %>',
          'dist/*',
        ],
        tasks: [],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  var jade = require('jade');
  grunt.registerMultiTask('deck', 'Compile slide decks.', function() {
    var options = this.options();
    var tmpl = grunt.file.read(options.template);
    delete options.template;
    var tmplFn = jade.compile(tmpl, options);
    this.files.forEach(function(f) {
      var content = grunt.file.read(f.src);
      var matches = content.match(/^htmltitle:\s*(.*)$/m);
      var title = matches ? matches[1] : '???';
      var output = tmplFn({
        content: content,
        title: title,
        grunt: grunt,
      });
      grunt.file.write(f.dest, output);
    });
  });

  grunt.registerTask('dev', 'Build deck for authoring.',
    ['clean', 'jshint', 'deck:dev', 'stylus', 'watch']);
  grunt.registerTask('prod', 'Build deck for deployment.',
    ['clean', 'jshint', 'deck:prod', 'stylus', 'copy']);
  grunt.registerTask('deploy', 'Deploy site via gh-pages.',
    ['prod', 'gh-pages']);
  grunt.registerTask('default', ['dev']);
};
