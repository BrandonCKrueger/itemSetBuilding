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
    
    function ChampionBanner($scope, bannerManager, staticDataService, itemSetDetailsService) {
        var vm = this;
        vm.starShadeClass = starShadeClass;
        vm.champion = bannerManager.getCurrentChampion();
        
        $scope.$on("$stateChangeSuccess", function updatePage(scope, state, params) {
            if (state.name === 'build') {
                stateChangedToBuild(params);
            } else if (state.name === 'champion') {
                stateChangedToChampion(params);
            } else {
                stateChangedToOther();
            }
        });

        function starShadeClass(averageRating, lowerBound) {
            if (averageRating < lowerBound + 0.5) {
                return 'fa-star-o';
            } else if (averageRating < lowerBound + 1) {
                return 'fa-star-half-o';
            } else {
                return 'fa-star';
            }
        }
        
        // private functions
        function stateChangedToBuild(params) {
            itemSetDetailsService.getItemBuildById(params.buildId).then(function(builds) {
                vm.build = builds[0];
            }).catch(function(error) {
                console.log({error: error});
            });
        }

        function stateChangedToChampion(params) {
            staticDataService.getChampionByName(params.championName).then(function(champion) {
                bannerManager.setCurrentChampion(champion);
                bannerManager.getCurrentChampionBannerBuild().then(function(build) {
                    vm.build = build;
                }).catch(function(error) {
                    console.log({error: error});
                });
            }).catch(function(error) {
                console.log({error: error});
            });
        }

        function stateChangedToOther() {
            var champion = staticDataService.getRandomChampion();
            bannerManager.setCurrentChampion(champion);
            bannerManager.getCurrentChampionBannerBuild().then(function(build) {
                console.log(build);
                vm.build = build;
            }).catch(function(error) {
                console.log({error: error});
            });
        }
    }

}(window.angular));
