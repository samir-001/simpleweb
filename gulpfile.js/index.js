const { src ,dest, series,watch}= require("gulp")
const sass = require("gulp-sass")(require("sass"))

function buildStyles() {
    return src('./src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./src/style'));
  };
exports.default = ()=>{
    watch("./src/sass/**/*.scss",series(buildStyles))
}