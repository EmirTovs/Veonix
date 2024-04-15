import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import postcss from 'gulp-postcss';
import pxtoviewport from 'postcss-px-to-viewport';

const sass = gulpSass(dartSass);

postcss.atRule = postcss.AtRule

export const scssMedia = () => {
    var processors = [
		pxtoviewport({
			unitToConvert: 'px', 
			viewportWidth: 680, 
			unitPrecision: 5, 
			viewportUnit: 'vw', 
			fontViewportUnit: 'vw', 
			
			propList: ['*'], 
			selectorBlackList:["@keyframes"], 
			minPixelValue: 1, 
			mediaQuery: true, 
			replace: true, 
			landscape: false,
		})
	];
    
    return app.gulp.src(app.path.src.scssMedia, {sourcemaps: true})
                .pipe(app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "SCSS",
                        messege: "Error: <%+ error.messege %>"
                    })
                ))
                .pipe(app.plugins.replace(/@img\//g, '../img/'))
                .pipe(sass({
                    outputStyle: 'expanded'
                }))
                .pipe(groupCssMediaQueries())
                // .pipe(webpcss({
                //     webpClass: '.webp',
                //     noWebpClass: '.no-webp',
                // }))
                .pipe(autoprefixer({
                    grid: true,
                    overrideBrowserList: ['last 3 versions'],
                    cascade: true
                }))
                
                //если нужен не сжытый файл стилей
                .pipe(app.gulp.dest(app.path.build.cssMedia))
                //сжатый
                // .pipe(cleanCss())
                // .pipe(rename({
                //     extname: ".min.css"
                // }))
                
                .pipe(app.gulp.dest(app.path.build.cssMedia))
                .pipe(app.plugins.browsersync.stream())
                .pipe(postcss(processors))
			    .pipe(app.gulp.dest(app.path.build.cssMedia))
}   



