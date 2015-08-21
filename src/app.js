(function (angular) {
    'use strict';

    var moduleDependencies = [
        'templates-main',
        'ui.router',
        'ngDragDrop',
        'ui.sortable',
        'ngAnimate'
    ];

    angular
        .module('itemSetApp', moduleDependencies)
        .config(setDefaultRoute);

    function setDefaultRoute($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
    }

}(window.angular));
