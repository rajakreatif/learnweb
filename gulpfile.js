const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass');

function css() {
    return src('Asset/css/*.scss')
        .pipe(sass())
        .pipe(dest('Asset/css'))
}

exports.css = css;