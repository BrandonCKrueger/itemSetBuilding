(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('ChampionController', ChampionController);

    function ChampionController($stateParams, staticDataService, itemSetDetailsService) {
        var vm = this;

        staticDataService.getChampionByName($stateParams.championName).then(function(champion) {
            itemSetDetailsService.getItemBuildsByChampionId(champion.id).then(function(response) {
                var builds = [];
                for(var i = 0; i < response.length; i++) {
                    builds.push({
                        id: response[i]._id,
                        rating: response[i].averageRating,
                        commentCount: response[i].commentCount,
                        title: response[i].itemSetDetails.title,
                        author: response[i].who.createdBy.user,
                        date: response[i].who.lastEdit
                    });
                }
                vm.builds = builds;
            }).catch(function(error) {
                console.log({'Error:':error});
            });
        }).catch(function(error) {
            console.log({'Error:':error});
        });

        staticDataService.getChampionByName($stateParams.championName).then(function(champion) {
            vm.champion = champion;
        }).catch(function(response) {
            console.log({'Error': response});
        });

        console.log('Looking for Champions: ' + $stateParams.championName);
    }

}(window.angular));
