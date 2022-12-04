import gulp from 'gulp';
import config from '../config.js';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import clone from 'gulp-clone';

const clonesink = clone.sink();

gulp.task('images', () => {
  return gulp
    .src(`${config.src.img}/**/*.{jpg,png,jpeg}`)
    .pipe(imagemin()) //minify PNG, JPG, JPEG images
    .pipe(webp()) // convert images to webp and save a copy of the original format
    .pipe(clonesink) // start stream
    .pipe(clonesink.tap()) // close stream and send both formats to dist
    .pipe(gulp.dest(config.dest.img));
});

const build = (gulp) => gulp.parallel('images');
const watch = (gulp) => () => {
  gulp.watch(`${config.src.img}/**/*.{jpg,png,jpeg}`, gulp.parallel('images'));
};

module.exports.build = build;
module.exports.watch = watch;
