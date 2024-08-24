const mix = require("laravel-mix");

mix
  .sass("resources/sass/app.scss", "assets/css")
  .options({ autoprefixer: false, processCssUrls: false })
  .js("resources/js/app.js", "assets/js")
  .sourceMaps()
  .browserSync({
    proxy: "http://localhost/learning/efundd-html/",
  });
