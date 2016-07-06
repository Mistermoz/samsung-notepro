module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: {
			dist: [ "css/styles.css", "js/scripts.js" ],

		},

		concat: {
			styles: {
				src: [
					"css/reset.css",
					"css/font-awesome.min.css",
					"css/default.css",
					"css/view/pages_home.css",
					"css/view/pages_spen.css",
					"css/view/pages_screen12.css",
					"css/view/pages_office.css",
					"css/view/pages_view360.css",
					"css/view/pages_video.css"
				],

				dest: "css/styles.css"
			},

			scripts: {
				src: [
					"js/vendor/jquery/jquery.js",
					"js/vendor/jquery/jquery-ui-1.10.4.custom.min.js",
					"js/vendor/skrollr/skrollr.min.js",
					"js/vendor/skrollr/skrollr.menu.js",
					"js/vendor/selectivizr/selectivizr.js",
					"js/vendor/css3finalize/css3finalize.js",
					"js/vendor/queryloader2/jquery.queryloader2.min.js",
					"js/vendor/sketch/sketch.min.js",
					"js/view/pages_home.js",
					"js/view/pages_screen12.js",
					"js/view/pages_office.js",
					"js/view/pages_spen.js",
					"js/default.js"
				],

				dest: "js/scripts.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("default", [ "clean", "concat" ]);
};
