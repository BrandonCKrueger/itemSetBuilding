(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('ChampionController', ChampionController);

    function ChampionController($stateParams) {
        var vm = this;

        vm.builds = [
            {
                id: 1,
                rating: 5,
                commentCount: 1200,
                title: 'First Title',
                author: 'First Author',
                date: '08/06/15'
            },
            {
                id: 2,
                rating: 4,
                commentCount: 89,
                title: 'Second Build Second Build Second Build Second Build Second Build Second Build',
                author: 'Second Author',
                date: '08/06/15'
            },
            {
                id: 3,
                rating: 5,
                commentCount: 1200,
                title: 'First Title',
                author: 'First Author',
                date: '08/06/15'
            },
            {
                id: 4,
                rating: 4,
                commentCount: 89,
                title: 'Second Build',
                author: 'Second Author',
                date: '08/06/15'
            }
        ]

        console.log('Looking for Champions: ' + $stateParams.championName);
    }

}(window.angular));
