(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('ChampionController', ChampionController);

    function ChampionController($stateParams, staticDataService, itemSetDetailsService) {
        var vm = this;
        vm.starShadeClass = starShadeClass;

        staticDataService.getChampionByName($stateParams.championName).then(function(champion) {
            itemSetDetailsService.getItemBuildsByChampionId(champion.id).then(function(response) {
                var builds = [];
                for(var i = 0; i < response.length; i++) {
                    builds.push({
                        id: response[i]._id,
                        role: response[i].role,
                        averageRating: response[i].averageRating,
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

        function starShadeClass(averageRating, lowerBound) {
            if (averageRating < lowerBound + 0.5) {
                return 'fa-star-o';
            } else if (averageRating < lowerBound + 1) {
                return 'fa-star-half-o';
            } else {
                return 'fa-star';
            }
        }
    }

}(window.angular));
