(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('accountManager', accountManager);

    function accountManager($rootScope, $q, $http, userService) {
		var _account = null;

        var factory = {
            getAccount: getAccount,
            getCredentials: getCredentials,
            register: register,
			login: login,
			logout: logout,
            addToMyBuilds: addToMyBuilds,
            addToMyFavBuilds: addToMyFavBuilds
        };
        return factory;

        function getAccount() {
            if(_account) {
                return _account;
            } else {
                return {};
            }
            
        }

        function getCredentials() {
            var deferred = $q.defer();

            userService.getCredentials().then(function(user) {
                _account = user;
                deferred.resolve(_account);
            });

            return deferred.promise;
        }

        function register(email, password, username) {
            var deferred = $q.defer();

            userService.register(email, password, username).then(function(user) {
                _account = user;
                deferred.resolve(_account);
            });

            return deferred.promise;
        }
		
		function login(username, password) {
			var deferred = $q.defer();

            userService.login(username, password).then(function(user) {
                _account = user;
                $rootScope.$broadcast('login', _account);
                deferred.resolve(_account);
            });

            return deferred.promise;
		}
        
        function logout() {
            var deferred = $q.defer();

            userService.logout().then(function(response) {
                _account = null;
                $rootScope.$broadcast('logout');
                deferred.resolve(_account);
            });

            return deferred.promise;
        }
        
        function addToMyBuilds(build) {
            if (_account) {
                if (!_account.myBuilds) {
                    _account.myBuilds = [];
                }
                _account.myBuilds.push(build);
            }
        }
        
        function addToMyFavBuilds(build) {
            if (_account) {
                if (!_account.myFavBuilds) {
                    _account.myFavBuilds = [];
                }
                _account.myFavBuilds.push(build);
            }
        }
    }

}(window.angular));
