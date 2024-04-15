var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var jsmin = require('gulp-jsmin');

var gutil = require('gulp-util');
var ftp = require('gulp-ftp');

var rename = require('gulp-rename');
var tinypng = require('gulp-tinypng-compress');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');


var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');

gulp.task('vw', function () {
 
    var processors = [
        pxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 1440,
            unitPrecision: 5,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',  // vmin is more suitable.
             
            propList: ['*'],
            selectorBlackList:["@keyframes"],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            landscape: false, 
         
        })
    ];
 
    return gulp.src(['app/scss/*.scss'])
        .pipe(postcss(processors))
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
});


gulp.task('js', function() {
    return gulp.src('app/js/*.js')
      .pipe(concat('main.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/assets/js'));
  });

gulp.task('sass', function(done) {
    gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/assets/css")) 
    
    .pipe(browserSync.stream())


    done();
});

gulp.task('autoprefixer', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false,
            grid: true,
            
        }))
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('css', gulp.series('sass'));
gulp.task('jss', gulp.series('js'));
gulp.task('serve', function(done) {

    browserSync.init({
        server: "dist/"
    });
    

    gulp.watch("app/js/*.js", gulp.series('jss'));
    gulp.watch("app/scss/*.scss", gulp.series('css'));
    gulp.watch("app/scss/*.scss", gulp.series('vw'));
    gulp.watch("dist/*/*.html").on('change', () => {
      
        browserSync.reload();
        done();
    });
    gulp.watch("dist/*/*/*.html").on('change', () => {
      
        browserSync.reload();
        done();
    });
    gulp.watch("dist/*.html").on('change', () => {
      
      browserSync.reload();
      done();
    });
    gulp.watch("app/scss/*.scss").on('change', () => {
      
        browserSync.reload();
      done();
    });
    gulp.watch("dist/assets/js/*.js").on('change', () => {
      
        browserSync.reload();
        done();
    });
  

    done();
});

 


gulp.task('tinypng', function () {
    gulp.src('dist/assets/img/**/*{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'Rlk7PQLFm380tVLBlCjdcgblJqh9s5Lh',
            // sigFile: '.tinypng-sigs',
            // log: true,
            // Boolean: true
        }))
        .pipe(gulp.dest('dist/img_tinypng/'));
        
});


  gulp.task('mytask', function(){
    gulp.src('app/*.*')
        .pipe(gulp.dest('dist/'));
  });
  


gulp.task('default', gulp.series('sass', 'serve'));

gulp.task('final', gulp.series('sass', 'serve'));



gulp.task('hr', () => {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({ sortClassName: true }))
    .pipe(gulp.dest('dist/out'));
});




