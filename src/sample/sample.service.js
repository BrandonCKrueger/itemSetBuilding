(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('sampleService', sampleService);

    function sampleService() {
        var factory = {
            someFunction: someFunction
        };
        return factory;

        function someFunction() {
            return true;
        }
    }

}(window.angular));
