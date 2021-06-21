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

 const mix = require('laravel-mix');
 const tailwindcss = require('tailwindcss');
 
 mix.js('resources/js/site.js', 'public/js')
     .sass('resources/sass/app.scss', 'public/css')
     .options({
         processCssUrls: false,
         postCss: [tailwindcss('./tailwind.config.js')],
     });
 
     // webpack.config.js
 module.exports = {
     // ...
     module: {
       rules: [
         {
           // ...
           use: [
             // ...
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: [
                   require('tailwindcss'),
                   require('autoprefixer'),
                 ],
               },
             },
           ],
         }
       ],
     }
   }