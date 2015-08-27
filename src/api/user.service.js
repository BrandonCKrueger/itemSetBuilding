(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('userService', userService);

    function userService($http, $q, apiConfig) {
        var factory = {
            register: register,
            getCredentials: getCredentials,
			login: login,
			logout: logout
        };
        return factory;

        function register(email, password, username) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: apiConfig.domain + '/register',
                data: {
                    email: email,
                    password: password,
                    username: username
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
        
        function getCredentials() {
            console.log('jojo');
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: apiConfig.domain + '/getCredentials'
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
		
		function login(email, password) {
			var deferred = $q.defer();

            $http({
                method: 'POST',
                url: apiConfig.domain + '/login',
                data: {
                email: email,
                password: password
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
        
        function logout() {
            var deferred = $q.defer();
            var url = apiConfig.domain + '/logout';

            $http({
                method: 'GET',
                url: url
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
