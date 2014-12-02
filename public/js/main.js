require.config({
    paths: {
        'domReady': '../js/lib/requirejs-domready/domReady',
        'angular': '../js/lib/angular/angular',
        'angular-route': '../js/lib/angular-route/angular-route'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
          deps: ['angular']
        }
    },
    deps: ['./bootstrap']
});
