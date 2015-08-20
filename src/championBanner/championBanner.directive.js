(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('championBanner', championBanner);

    function championBanner($templateCache) {
        return {
            restriction: 'EA',
            controller: ChampionBanner,
            controllerAs: 'championBannerVm',
            template: $templateCache.get('championBanner/championBanner.html')
        };
    }
    
    function ChampionBanner(bannerManager) {
        var vm = this;
        
        bannerManager.getCurrentChampionBannerBuild().then(function(build) {
            vm.build = build;
        });
        
        console.log('Champion Banner for champion: ' + bannerManager.getCurrentChampion());
    }

}(window.angular));
