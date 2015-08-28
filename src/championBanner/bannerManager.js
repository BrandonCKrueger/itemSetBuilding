(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('bannerManager', bannerManager);

    function bannerManager($q, staticDataService, itemSetDetailsService) {
		var _currentChampion = {
            id: 1,
            name: 'Annie'
        };
        var _topBuilds = {};

        var factory = {
            getCurrentChampion: getCurrentChampion,
			setCurrentChampion: setCurrentChampion,
            getRandomChampionBannerBuild: getRandomChampionBannerBuild,
            getCurrentChampionBannerBuild: getCurrentChampionBannerBuild
        };
        return factory;

        function getCurrentChampion() {
            return _currentChampion;
        }

		function setCurrentChampion(champion) {
			_currentChampion = champion;
		}
        
        function getRandomChampionBannerBuild() {
            return staticDataService.getRandomChampion();
        }

        function getCurrentChampionBannerBuild() {
            var deferred = $q.defer();

            itemSetDetailsService.getTopBuildsByChampionId(_currentChampion.id).then(function(topBuilds) {
                var build = null;
                var topBuild = topBuilds[0];
                if (topBuild) {
                    build = topBuild;
                } else {
                    build = {
                        champion: {
                            championId: _currentChampion.id,
                            championName: _currentChampion.name,
                        },
                        noData: true
                    };
                }
                _topBuilds[_currentChampion.name] = build;
                deferred.resolve(build);
            }).catch(function(error) {
                console.log('An error occured while getting the top build for ' + _currentChampion.name);
                console.log(error);
            });

            return deferred.promise;
        }
    }

}(window.angular));
