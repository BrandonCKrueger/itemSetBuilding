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
        .config(setDefaultRoute)
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        }]);

    function setDefaultRoute($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
    }
    
    

}(window.angular));
