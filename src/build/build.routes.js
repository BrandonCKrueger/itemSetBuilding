(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .config(appConfig);

    function appConfig($stateProvider) {

        $stateProvider
            .state('build', {
                controller: 'BuildController as buildVm',
                templateUrl: 'build/build.html',
                url: '/build/:buildId',
                params: {
                    build: null
                }
            });
    }

}(window.angular));
