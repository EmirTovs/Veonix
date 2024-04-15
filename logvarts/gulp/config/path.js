import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist/assets';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        cssMedia: `${buildFolder}/css/media/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        html: `./dist/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/**/*.scss`,
        scssMedia1600: `${srcFolder}/scss1600/**/*.scss`,
        scssMedia1000: `${srcFolder}/scss1000/**/*.scss`,
        scssMedia640: `${srcFolder}/scss640/**/*.scss`,
        scssMedia340: `${srcFolder}/scss340/**/*.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        scssMedia1600: `${srcFolder}/scss1600/**/*.scss`,
        scssMedia1000: `${srcFolder}/scss1000/**/*.scss`,
        scssMedia640: `${srcFolder}/scss640/**/*.scss`,
        scssMedia340: `${srcFolder}/scss340/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}