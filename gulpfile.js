// References gulp and Plugins

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    // plumber = require('gulp-plumber');
 
// Scripts Task
// Uglifies 

// Get any file in js folder and make it minified 

gulp.task('scripts',function(){
   gulp.src('js/*') // you can use (*.js)
   // .pipe(plumber())
   .pipe(uglify())
   .pipe(gulp.dest('minjs'));
});

// You can choose this one when you use the terminal by writing " gulp scripts "
// Get any file in js folder and make it minified 
// when you use default than mean you will run using just "gulp"

// gulp.task('default',function(){
//    gulp.src('js/*')
//    .pipe(uglify())
//    .pipe(gulp.dest('minjs'));
// });


// Install and assign sass to css

gulp.task('sass', function () {
  return sass('scss/**/*.scss')
	// .pipe(plumber())
    .on('error', function (err) { console.log(err.message); })
    // .pipe(sass({
    // 	style: 'compressed'
    // }))
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});

// Watch Task
// Watches JS

gulp.task('watch', function(){
	gulp.watch('js/*.js',['scripts']);   
	gulp.watch('scss/**/*.scss', ['sass']);   
});

// To run from the above codes just use these snippet 
// Then run using just "gulp" because we use default
gulp.task('default',['scripts' , 'sass', 'watch']);
