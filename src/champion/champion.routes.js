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
            
        function onEnter($state, staticDataService, bannerManager) {
            // var champion = staticDataService.getChampionByName($state.params.championName);
            // bannerManager.setCurrentChampion(champion);
        }
    }

}(window.angular));
