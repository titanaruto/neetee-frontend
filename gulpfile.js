var syntax = 'sass', // выберете используемый синтаксис sass или scss, и перенастройте нужные пути в файле gulp.js и папки в вашего шаблоне wp
    gulpversion = '4'; // Выберете обязателньо свою версию Gulp: 3 или 4

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    cleancss = require('gulp-clean-css'),
    ftp = require('vinyl-ftp'),
    imagemin = require('gulp-imagemin'),
    svgstore = require('gulp-svgstore'),
    notify = require('gulp-notify'),
    pngquant = require('imagemin-pngquant'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    rsync = require('gulp-rsync'),
    sass = require('gulp-sass'),
    webp = require('gulp-webp'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    jp2 = require('gulp-jpeg-2000'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps');


// Незабываем менять 'wp-gulp.loc' на свой локальный домен
gulp.task('browser-sync', function () {
    browsersync({
        proxy: "neot.local",
        notify: false,
        // open: false,
        // tunnel: true,
        // tunnel: "gulp-wp-fast-start", //Demonstration page: http://gulp-wp-fast-start.localtunnel.me
    })
});


// Обьединяем файлы sass, сжимаем и переменовываем
gulp.task('styles', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        //.pipe(rename({ suffix: '.min', prefix : '' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../backend/public/assets/css'))
        .pipe(browsersync.stream())
});
gulp.task('styles-admin', function () {
    return gulp.src('src/scss/admin-main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        //.pipe(rename({ suffix: '.min', prefix : '' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../backend/public/assets/css/admin'))
        .pipe(browsersync.stream())
});
gulp.task('fonts', () => {
    return gulp.src('src/webfonts/**/*').pipe(gulp.dest('src/webfonts'));
});


// Обьединяем файлы скриптов, сжимаем и переменовываем
gulp.task('scripts', function () {
    return gulp.src([
        // 'src/js/lib/swiper-bundle.min.js',
        'src/js/script.js',
        // 'src/js/nouislider.min.js',
        // 'src/js/filter.js',
        // 'src/js/header.js',
        // 'src/js/lib/picturefill.min.js',
        // 'src/js/lib/slider-product.js',
        'src/js/sliders.js',
        // 'src/js/lib/slider-down.js',

    ])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../backend/public/assets/js'))
        .pipe(browsersync.reload({stream: true}))
});
gulp.task('admin-scripts', function () {
    return gulp.src([
        'src/js/admin-script.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../backend/public/assets/js/admin'))
        .pipe(browsersync.reload({stream: true}))
});

gulp.task('sprite', () => {
    return gulp
        .src('src/img/icons/*.svg')
        .pipe(svgstore({inlineSvg: true}))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('../backend/public/assets/img/icons'));
});
gulp.task('jp2', function () {
    return gulp.src(['src/img/**/*.{jpg,jpeg,png}', '!src/img/**/*.svg'])
        .pipe(cache(imagemin()))
        .pipe(jp2()) // Cache Images
        .pipe(gulp.dest('../backend/public/assets/img/jp2'));
});
gulp.task('image-mini', function () {
    return gulp.src(['src/img/**/*.{jpg,jpeg,png}', '!src/img/**/*.svg'])
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('../backend/public/assets/img/minific'));
});
gulp.task('webp', function () {
    return gulp.src(['src/img/**/*.{jpg,jpeg,png}', '!src/img/**/*.svg'])
        .pipe(cache(imagemin()))
        .pipe(webp()) // Cache Images
        .pipe(gulp.dest('../backend/public/assets/img/webp'));
});
// сжимаем картинки в папке uploads, и туда же возвращаем в готовом виде
gulp.task('imgmin-gif', function () {
    return gulp.src('src/img/*.gif')
        .pipe(gulp.dest('../backend/public/assets/img/gif'));
});


// Отгрузка всего сайта на хостинг
gulp.task('deploy-site', function () {
    var conn = ftp.create({
        host: '11.111.111.111', // or domain
        user: 'user ftp',
        password: 'password ftp',
        parallel: 10,
        log: gutil.log
    });
    var globs = [
        'src/**', // Путь до готовой папки вашего сайта к отгрузки на хостинг
        //'src/.htaccess',
    ];
    return gulp.src(globs, {buffer: false})
        .pipe(conn.dest('/var/www/karbosnab-new.loc/')); // Путь до папки сайта на хостинге
});


// Отгрузка только шаблона на хостинг
gulp.task('deploy-theme', function () {
    var conn = ftp.create({
        host: '11.111.111.111', // or domain
        user: 'user ftp',
        password: 'password ftp',
        parallel: 10,
        log: gutil.log
    });
    var globs = [
        'src/**', // Путь до шаблона у вас на компьютере
    ];
    return gulp.src(globs, {buffer: false})
        .pipe(conn.dest('/var/www/karbosnab-new.loc/public/')); // Путь до шаблона на хостинге
});


// Отгрузка или всего сайта, или какой то папки по SSH, настроите нужный путь сами
gulp.task('rsync', function () {
    return gulp.src('src/**')
        .pipe(rsync({
            root: 'src/',
            hostname: 'user123@domain.com',
            destination: 'www/domain.com/',
            // include: ['*.htaccess'], // Hidden files to include in the deployment
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }));
});


if (gulpversion == 3) {
    gulp.task('watch', ['styles', 'scripts', 'browser-sync'], function () {
        gulp.watch(['src/scss/**/*.scss'], ['styles']); // Наблюдение за sass файлами в папке sass в теме
        gulp.watch(['src/js/**/*.js'], ['scripts']); // Наблюдение за JS файлами js в теме
        gulp.watch('src/**/*.php', browsersync.reload) // Наблюдение за sass файлами php в теме
    });
    gulp.task('default', ['watch']);
}


if (gulpversion == 4) {
    gulp.task('watch', function () {
        gulp.watch('src/scss/**/*.scss', gulp.parallel('styles-admin')); // Наблюдение за sass файлами в папке sass в теме
        gulp.watch('src/scss/**/*.scss', gulp.parallel('styles')); // Наблюдение за sass файлами в папке sass в теме
        gulp.watch(['src/js/**/*.js'], gulp.parallel('scripts')); // Наблюдение за JS файлами в папке js
        gulp.watch(['src/js/**/*.js'], gulp.parallel('admin-scripts')); // Наблюдение за JS файлами в папке js
        gulp.watch('src/**/*.php', browsersync.reload);// Наблюдение за sass файлами php в теме
    });

    gulp.task('default', gulp.parallel('webp', 'image-mini', 'imgmin-gif', 'sprite', 'fonts', 'styles', 'styles-admin', 'scripts', 'admin-scripts', 'browser-sync', 'watch'));
}
