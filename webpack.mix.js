const mix = require('laravel-mix');
mix.options({
    processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.styles([
    'themes/mazegeek/assets/css/module/burger.css',
    'themes/mazegeek/assets/css/module/buttons.css',
    'themes/mazegeek/assets/css/module/contact-modal.css',
    'themes/mazegeek/assets/css/module/container.css',
    'themes/mazegeek/assets/css/module/header.css',
    'themes/mazegeek/assets/css/module/intro-main.css',
    'themes/mazegeek/assets/css/module/modal.css',
    'themes/mazegeek/assets/css/module/navigation.css',
    'themes/mazegeek/assets/css/module/video.css',
    'themes/mazegeek/assets/css/module/testimonial-main.css',
    'themes/mazegeek/assets/css/module/how-we-work.css'
], 'themes/mazegeek/assets/dist/css/module.css');



mix.styles([
    'themes/mazegeek/assets/css/module/styles1.css',
    'themes/mazegeek/assets/css/module/font.css',
    'themes/mazegeek/assets/css/icomoonl.css',
    'themes/mazegeek/assets/css/module/calendly.css'

], 'themes/mazegeek/assets/dist/css/mazegeek.css');



