(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .config(appConfig);

    function appConfig($stateProvider) {

        $stateProvider
            .state('dashboard', {
                controller: 'DashboardController as dashboardVm',
                templateUrl: 'dashboard/dashboard.html',
                url: '/',
                resolve: {}
            });
    }

}(window.angular));
