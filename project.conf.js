var dirs = {
    output: 'dist/',
    source: 'src/',
    test: 'test/',
    bower: 'bower_components/',
    npm: 'node_modules/'
};

module.exports = {

    out: {
        dir: dirs.output,
        cssFile: dirs.output + 'css/app.css',
        cssMapFile: dirs.output + 'css/app.css.map',
        cssMapUrl: 'css/app.css.map',
        fontDir: dirs.output + '/fonts',
        htmlMainFile: dirs.output + 'index.html',
        htmlTemplateFile: dirs.output + 'js/templates.js',
        imageDir: dirs.output + '/images',
        jsDir: dirs.output + 'js/',
        jsAppClientFile: dirs.output + 'js/internal.js',
        jsThirdPartyClientFile: dirs.output + 'js/external.js'
    },

    in: {
        dir: dirs.source,
        fontFiles: dirs.bower + 'font-awesome/fonts/**/*',
        htmlMainFile: dirs.source + 'index.html',
        htmlTemplateFiles: [
            dirs.source + '**/*.html',
            '!' + dirs.source + 'index.html'
        ],
        imageFiles: dirs.source + 'images/**/*',
        jsAppClientFiles: [
            dirs.source + 'app.js',
            dirs.source + '**/*.js',
            '!' + dirs.source + '**/*.spec.js'
        ],
        jsAppTestFiles: dirs.source + '**/*.spec.js',
        jsThirdPartyClientFiles: [
            dirs.bower + 'jquery/dist/jquery.min.js',
            dirs.bower + 'jquery-ui/jquery-ui.min.js',
            dirs.bower + 'angular/angular.js',
            dirs.bower + 'angular-ui-router/release/angular-ui-router.js',
            dirs.bower + 'bootstrap/dist/js/bootstrap.js',
            dirs.bower + 'lodash/lodash.js',
            dirs.bower + 'angular-dragdrop/src/angular-dragdrop.min.js',
            dirs.bower + 'angular-ui-sortable/sortable.min.js',
            dirs.bower + 'angular-animate/angular-animate.min.js'
        ],
        jsThirdPartyTestFiles: [
            dirs.npm + 'angular-mocks/angular-mocks.js'
        ],
        lessFiles: dirs.source + '/**/*.less',
        lessMainFile: dirs.source + 'styles/app.less'
    },

    dev: {
        serverProtocol: 'http',
        serverHostname: 'localhost',
        serverPort: 8000,
        serverLivereload: true
    }
};
