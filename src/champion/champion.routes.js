(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .config(appConfig);

    function appConfig($stateProvider) {

        $stateProvider
            .state('champion', {
                controller: 'ChampionController as championVm',
                templateUrl: 'champion/champion.html',
                url: '/champion/:championName',
                onEnter: onEnter
            });
            
        function onEnter($state, bannerManager) {
            bannerManager.getCurrentChampion($state.params.championName);
        }
    }

}(window.angular));
