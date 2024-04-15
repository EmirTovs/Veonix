// основной модуль
import gulp from 'gulp';

//импорт путей
import { path } from './gulp/config/path.js';

// импрот общих плагинов
import { plugins } from './gulp/config/plugins.js';

// передаем значения в глобальую переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path : path,
    gulp : gulp,
    plugins: plugins
}

//импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { scssMedia1600 } from './gulp/tasks/scss1600.js';
import { scssMedia1000 } from './gulp/tasks/scss1000.js';
import { scssMedia640 } from './gulp/tasks/scss640.js';
import { scssMedia340 } from './gulp/tasks/scss340.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';


import  tinypng from 'gulp-tinypng-compress';

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

// наблюдатель
const watcher = () => {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.scssMedia1600, scssMedia1600);
    gulp.watch(path.watch.scssMedia1000, scssMedia1000);
    gulp.watch(path.watch.scssMedia640, scssMedia640);
    gulp.watch(path.watch.scssMedia340, scssMedia340);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

// последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, scssMedia1600, scssMedia1000,  scssMedia640, scssMedia340, js, images));
//посторонние сценарии 
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//сценарий по умолчанию
gulp.task('default', dev);