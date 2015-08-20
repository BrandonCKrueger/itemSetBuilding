(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .config(appConfig);

    function appConfig($stateProvider) {

        $stateProvider
            .state('champions', {
                controller: 'ChampionsController as championsVm',
                templateUrl: 'champions/champions.html',
                url: '/champions',

                resolve: {}
            });
    }

}(window.angular));
