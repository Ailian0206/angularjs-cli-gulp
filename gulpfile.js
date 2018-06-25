var gulp = require('gulp'),
	concat 		= require('gulp-concat'), 		//合并文件
    minifycss 	= require('gulp-minify-css'),	//压缩css
	htmlmin     = require('gulp-htmlmin'), 		//压缩html
	uglify 		= require('gulp-uglify'), 		//压缩js
    rename 		= require('gulp-rename'),		//重命名
    imagemin    = require('gulp-imagemin'),		//压缩图片
	stripDebug  = require('gulp-strip-debug'),
	del 		= require('del');				//每次打包清除dist
	

var config = {
	input:{
		html:['./tpls/*.html'],
		js:['./source/service/*.js', './source/directive/*.js', './source/controller/*.js'], // 有先后的依赖关系
		css:['./source/css/*.css'],
		images:['./images/*']
	},
	output:{
		html:'./dist/tpls',
		css:'./dist/css',
		js:'./dist/js',
		images:'./dist/images'

	}
};


gulp.task('clean',function(){
	return del(config.output.html,config.output.css,config.output.js,config.output.images);
});

gulp.task('html', function () {
	var options = {
		removeComments: true,
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		removeEmptyAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		minifyJS: true,
		minifyCSS: true
	};
	return gulp.src(config.input.html)
		.pipe(htmlmin(options))
		.pipe(gulp.dest(config.output.html))//gulp dest是输出
});

gulp.task('js', function (done) {
	return gulp.src(config.input.js)
		.pipe(concat('app.bundle.js'))
	    .pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(stripDebug())
		.pipe(gulp.dest(config.output.js));
});

gulp.task('css', function () {
	return gulp.src(config.input.css)
		.pipe(rename({suffix:'.min'}))
		.pipe(minifycss())
		.pipe(concat('app.bundle.css'))
		.pipe(gulp.dest(config.output.css));
});

//压缩图片
gulp.task('images', function(){
	return gulp.src(config.input.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.output.images));
});


gulp.task('default', ['clean', 'html','js','css','images']);
