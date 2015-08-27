(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('apiConfig', apiConfig);

    function apiConfig() {
        var factory = {
            domain: 'http://localhost:3000',
        };
        return factory;
    }

}(window.angular));
