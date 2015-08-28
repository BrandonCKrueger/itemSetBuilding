(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('itemSetDetailsService', itemSetDetailsService);

    function itemSetDetailsService($http, $q, apiConfig) {
        var factory = {
            getItemBuildById: getItemBuildById,

            getTopBuildsByChampionName: getTopBuildsByChampionName,
            getTopBuildsByChampionId: getTopBuildsByChampionId,
            getItemBuildsByChampionId: getItemBuildsByChampionId,
			getItemBuildsByUserId: getItemBuildsByUserId,
			getItemBuildsByUserName: getItemBuildsByUserName,

            insertItemSetBuild: insertItemSetBuild,
            updateItemSetBuild: updateItemSetBuild,
            exportBuild: exportBuild
        };
        return factory;

        function getItemBuildById(buildId) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: apiConfig.domain + '/api/itemSetBuild/' + buildId
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getTopBuildsByChampionName(championName, limit) {
            var deferred = $q.defer();

            if (!limit) {
                limit = 1;
            }

            $http({
                method: 'POST',
                url: apiConfig.domain + '/api/itemSetBuilds',
                params: {championName: championName},
                data: {
                    options: {
                        limit: limit,
                        skip: 0,
                        sort: {
                            field: "averageRating",
                            direction: -1
                        }
                    }
                }
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getTopBuildsByChampionId(championId, limit) {
            var deferred = $q.defer();

            if (!limit) {
                limit = 1;
            }

            $http({
                method: 'POST',
                url: apiConfig.domain + '/api/itemSetBuilds',
                params: {championId: championId},
                data: {
                    options: {
                        limit: limit,
                        skip: 0,
                        sort: {
                            field: "averageRating",
                            direction: -1
                        }
                    }
                }
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getItemBuildsByChampionId(championId) {
            var deferred = $q.defer();
            
            $http({
                method: 'GET',
                url: apiConfig.domain + '/api/itemSetBuilds',
                params: {championId: championId}
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getItemBuildsByUserId(userId) {
            var deferred = $q.defer();
            
            $http({
                method: 'GET',
                url: apiConfig.domain + '/api/itemSetBuilds',
                params: {userId: userId}
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getItemBuildsByUserName(userName) {
            var deferred = $q.defer();
            
            $http({
                method: 'GET',
                url: apiConfig.domain + '/api/itemSetBuilds',
                params: {userName: userName}
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
        
        function insertItemSetBuild(itemSetDetails, champion) {
            var deferred = $q.defer();
            var itemSetDetailsData = {
                'title': itemSetDetails.title,
                'type': itemSetDetails.type,
                'map': itemSetDetails.map,
                'mode': itemSetDetails.mode,
                'priority': itemSetDetails.priority,
                'sortrank': itemSetDetails.sortrank
            };
            var championData = {
                'championId': champion.championId,
                'championName': champion.championName
            };
            
            $http({
                method: 'POST',
                url: apiConfig.domain + '/api/itemSetBuild',
                data: {
                    itemSetDetails: itemSetDetailsData,
                    champion: championData
                }
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
        
        function updateItemSetBuild(buildId, itemSetDetails) {
            var deferred = $q.defer();
            var itemSetDetailsData = {
                'title': itemSetDetails.title,
                'type': itemSetDetails.type,
                'map': itemSetDetails.map,
                'mode': itemSetDetails.mode,
                'priority': itemSetDetails.priority,
                'sortrank': itemSetDetails.sortrank,
                'blocks': itemSetDetails.blocks,
                'authorNotes': itemSetDetails.authorNotes
            };
            
            $http({
                method: 'PUT',
                url: apiConfig.domain + '/api/itemSetBuild/' + buildId,
                data: {
                    itemSetDetails: itemSetDetailsData
                }
            }).then(function(response) {
                if (response && response.data && response.data.ok === 1) {
                    deferred.resolve(true);
                } else {
                    deferred.reject('An error occured while saving your item set');
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function exportBuild(buildId) {
            // todo: Does this need to be a window.location(..) ??
            var deferred = $q.defer();
            
            $http({
                method: 'GET',
                url: apiConfig.domain + '/api/exportBuild/' + buildId
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response.data);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

}(window.angular));
