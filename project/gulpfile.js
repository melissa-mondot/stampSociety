var syntax = "scss"; // Syntax: sass or scss;

var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cleancss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  pngquant = require("imagemin-pngquant"),
  mozjpeg = require("imagemin-mozjpeg"),
  fileinclude = require("gulp-file-include"),
  gulpRemoveHtml = require("gulp-remove-html"),
  wait = require("wait-stream");

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false,
    open: false
    // online: false, // Work Offline Without Internet Connection
    // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
  });
});

gulp.task("styles", function(done) {
  gulp
    .src("app/assets/" + syntax + "/main.scss")
    .pipe(plumber())
    .pipe(wait(5))
    .pipe(sass({ outputStyle: "expand" }).on("error", notify.onError()))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(gulp.dest("app/assets/css"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("js", function(done) {
  return gulp
    .src([
      "app/assets/libs/*/**",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify()) // Minify js
    .pipe(gulp.dest("app/assets/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("html-reload", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", function() {
  gulp.watch("app/assets/" + syntax + "/*." + syntax + "", gulp.series("styles"));
  gulp.watch(["app/assets/libs/**/*.js", "app/assets/js/common.js"], gulp.series("js"));
  gulp.watch("app/*.html", gulp.series("html-reload"));
});

gulp.task("imagemin", function(done) {
  gulp
    .src("app/assets/img/*")
    .pipe(
      imagemin([
        pngquant(),
        mozjpeg({
          progressive: true,
          quality: 60
        })
      ])
    )
    .pipe(gulp.dest("dist/assets/img"));
  done();
});

gulp.task("buildhtml", function(done) {
  gulp
    .src(["app/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@"
      })
    )
    .pipe(gulpRemoveHtml())
    .pipe(gulp.dest("dist/"));
  done();
});

gulp.task("removedist", function(done) {
  del.sync("dist");
  done();
});

gulp.task("buildCss", function(done) {
  gulp.src(["app/assets/css/main.min.css"]).pipe(gulp.dest("dist/assets/css"));
  done();
});

gulp.task("buildFiles", function(done) {
  gulp.src(["app/.htaccess", "app/mail.php"]).pipe(gulp.dest("dist"));
  done();
});

gulp.task("buildLibsSource", function(done) {
  gulp.src("app/assets/libs/**/*").pipe(gulp.dest("dist/libs"));
  done();
});

gulp.task("buildFonts", function(done) {
  gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
  done();
});

gulp.task("buildJs", function(done) {
  gulp.src("app/assets/js/**/*").pipe(gulp.dest("dist/assets/js"));
  done();
});

gulp.task(
  "build",
  gulp.series(
    "removedist",
    "buildhtml",
    "imagemin",
    "styles",
    "js",
    "buildCss",
    "buildFiles",
    "buildLibsSource",
    "buildFonts",
    "buildJs"
  ),
  function() {
    var buildCss = gulp
      .src(["app/css/main.min.css"])
      .pipe(gulp.dest("dist/assets/css"));

    var buildFiles = gulp
      .src(["app/.htaccess", "app/mail.php"])
      .pipe(gulp.dest("dist"));

    var buildLibsSource = gulp
      .src("app/assets/libs/**/*")
      .pipe(gulp.dest("dist/assets/libs"));

    var buildFonts = gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));

    var buildJs = gulp.src("app/assets/js/**/*").pipe(gulp.dest("dist/assets/js"));
  }
);

gulp.task("default", gulp.parallel("watch", "styles", "browser-sync"));
