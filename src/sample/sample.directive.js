(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('sample', sample);

    function sample() {
        return {
            restriction: 'EA',
            scope: {
                someVar: '='
            },
            controller: function($scope) {
                console.log('Sample directive');
            },
            template: ''
        };
    }

}(window.angular));
