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
        
        function insertItemSetBuild(itemSet) {
            var deferred = $q.defer();

            var payload = {
                itemSetDetails: {
                    title: itemSet.itemSetDetails.title,
                    type: itemSet.itemSetDetails.type,
                    map: itemSet.itemSetDetails.map,
                    mode: itemSet.itemSetDetails.mode,
                    priority: itemSet.itemSetDetails.priority,
                    sortrank: itemSet.itemSetDetails.sortrank,
                    blocks: itemSet.itemSetDetails.blocks
                },
                champion: {
                    championId: itemSet.champion.championId,
                    championName: itemSet.champion.championName
                },
                role: itemSet.role,
                authorNotes: itemSet.authorNotes
            };

            $http({
                method: 'POST',
                url: apiConfig.domain + '/api/itemSetBuild',
                data: payload
            }).then(function(response) {
                if (response.status === 200) {
                    deferred.resolve(response);
                } else {
                    deferred.reject(response);
                }
            }).catch(function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
        
        function updateItemSetBuild(itemSet) {
            var deferred = $q.defer();

            var payload = {
                itemSetDetails: {
                    title: itemSet.itemSetDetails.title,
                    type: itemSet.itemSetDetails.type,
                    map: itemSet.itemSetDetails.map,
                    mode: itemSet.itemSetDetails.mode,
                    priority: itemSet.itemSetDetails.priority,
                    sortrank: itemSet.itemSetDetails.sortrank,
                    blocks: itemSet.itemSetDetails.blocks
                },
                champion: {
                    championId: itemSet.champion.championId,
                    championName: itemSet.champion.championName
                },
                role: itemSet.role,
                authorNotes: itemSet.authorNotes
            };
            $http({
                method: 'PUT',
                url: apiConfig.domain + '/api/itemSetBuild/' + itemSet._id,
                data: payload
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
