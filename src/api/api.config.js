(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('apiConfig', apiConfig);

    function apiConfig() {
        var factory = {
            // domain: 'http://localhost:3000'
            domain: 'http://api-itemsetbuilder.rhcloud.com'
        };
        
        return factory;
    }

}(window.angular));
