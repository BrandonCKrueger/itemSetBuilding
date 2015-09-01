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
    
    function ChampionBanner($scope, $state, bannerManager, staticDataService, itemSetDetailsService, accountManager) {
        var vm = this;
        vm.build = null;
        vm.createItemSet = createItemSet;
        vm.copyItemSet = copyItemSet;
        vm.downloadItemSet = downloadItemSet;
        vm.starShadeClass = starShadeClass;
        vm.champion = bannerManager.getCurrentChampion();
        
        $scope.$on('$stateChangeSuccess', function updatePage(scope, state, params) {
            if (state.name === 'build') {
                stateChangedToBuild(params);
            } else if (state.name === 'champion') {
                stateChangedToChampion(params);
            } else {
                stateChangedToOther();
            }
        });

        function createItemSet() {
            var account = accountManager.getAccount();
            var buildTitle = 'New Build';
            if (account.username) {
                buildTitle = account.username + '\'s ' + buildTitle;
            }
            var build = {
                _id: 0,
                itemSetDetails: {
                    title: buildTitle,
                    type: 'custom',
                    map: 'any',
                    mode: 'any',
                    priority: false,
                    sortrank: 0,
                    blocks: []
                },
                who: {
                    createdDate: new Date(),
                    createdBy: null,
                    public: false
                },
                champion: vm.build.champion,
                role: 'General',
                authorNotes: ''
            };
            $state.go('build', {buildId: null, build: build});
        }

        function copyItemSet() {
            var account = accountManager.getAccount();
            var buildTitle = 'Copy of ' + vm.build.itemSetDetails.title;
            if (account.username) {
                buildTitle = account.username + '\'s ' + buildTitle;
            }
            var build = {
                itemSetDetails: vm.build.itemSetDetails,
                champion: vm.build.champion,
                role: vm.build.role,
                who: {
                    createdDate: new Date(),
                    createdBy: null,
                    public: false
                },
                authorNotes: ''
            };
            build.itemSetDetails.title = buildTitle;
            $state.go('build', {buildId: null, build: build});
        }

        function downloadItemSet() {
            vm.downloadBuild = true;
            itemSetDetailsService.exportBuild(vm.build._id);
        }

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
            if (params.buildId) {
                itemSetDetailsService.getItemBuildById(params.buildId).then(function(builds) {
                    vm.build = builds[0];
                    vm.build.noData = true;
                }).catch(function(error) {
                    console.log({error: error});
                });
            } else if (params.build) {
                vm.build = params.build;
                vm.build.noData = true;
            }
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
                vm.build = build;
            }).catch(function(error) {
                console.log({error: error});
            });
        }
    }

}(window.angular));
