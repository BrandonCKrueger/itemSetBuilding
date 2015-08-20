(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .filter('formatChampionName', formatChampionName);

        function formatChampionName() {
            return formatter;

            function formatter(championName) {
                if (championName) {
                    championName = championName.replace(/([a-z])([A-Z])/g, '$1 $2');
                }
                return championName
            }
        }

}(window.angular));
