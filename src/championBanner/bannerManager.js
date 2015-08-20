(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('bannerManager', bannerManager);

    function bannerManager($q) {
		var _currentChampion = 'Annie';
        var _topBuilds = [
            {
                championName: 'Annie',
                buildName: 'This is the top rated Annie item set',
                rating: 5,
                commentCount: 150
            }
        ];
        
        var factory = {
            getCurrentChampion: getCurrentChampion,
			setCurrentChampion: setCurrentChampion,
            getCurrentChampionBannerBuild: getCurrentChampionBannerBuild
        };
        return factory;

        function getCurrentChampion() {
            return _currentChampion;
        }
		
		function setCurrentChampion(champion) {
			_currentChampion = champion;
		}
        
        function getCurrentChampionBannerBuild() {
            var deferred = $q.defer();

            for (var i = 0; i < _topBuilds.length; i++) {
                if (_topBuilds[i].championName == _currentChampion) {
                    deferred.resolve(_topBuilds[i]);
                }
                else {
                    // TODO: Get Top build
                    // _topBuilds.push(response);
                    // deferred.resolve(response);
                }
            }

            return deferred.promise;
        }
    }

}(window.angular));
