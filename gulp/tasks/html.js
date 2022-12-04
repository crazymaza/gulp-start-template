import gulp from 'gulp';
import config from '../config.js';
import webpHTML from 'gulp-xv-webp-html';

gulp.task("html", () => {
  return gulp.src([`${config.dest.html}/**/*.html`])
    .pipe(webpHTML(['.jpg', '.svg', '.png']))
    .pipe(gulp.dest(config.dest.html))
})

const build = (gulp) => gulp.parallel('html');
const watch = (gulp) => () => {
  gulp.watch(`${config.dest.html}/**/*.html`, gulp.parallel('html'));
};

module.exports.build = build;
module.exports.watch = watch;
