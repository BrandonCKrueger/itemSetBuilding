(function (angular) {
    'use strict';

    var moduleDependencies = [
        'templates-main',
        'ui.router',
        'ui.sortable',
        'ngAnimate',
        'angular-toArrayFilter'
    ];

    angular
        .module('itemSetApp', moduleDependencies)
        .config(setDefaultRoute);

    function setDefaultRoute($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
    }

}(window.angular));
