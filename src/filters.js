(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .filter('addSpaces', addSpaces);

        function addSpaces() {
            return formatter;

            function formatter(myString) {
                if (myString) {
                    myString = myString.replace(/([a-z])([A-Z])/g, '$1 $2');
                }
                return myString;
            }
        }

}(window.angular));
