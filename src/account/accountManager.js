(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('accountManager', accountManager);

    function accountManager($q, $http) {
		var _account = null;
        _account = {
            username: 'Polixo',
            myBuilds: [
                { id: 1, name: 'Build #1'},
                { id: 2, name: 'Build #2'}
            ],
            myFavBuilds: [
                { id: 3, name: 'Build #3'},
                { id: 4, name: 'Build #4'}
            ]
        }; // todo: Remove hardcoded
		
        var factory = {
            getAccount: getAccount,
			login: login,
			logout: logout,
            addToMyBuilds: addToMyBuilds,
            addToMyFavBuilds: addToMyFavBuilds
        };
        return factory;

        function getAccount() {
            return _account;
        }
		
		function login(username, password) {
			var deferred = $q.defer();
            
            deferred.resolve(_account);
            // $http({
            //     method: 'POST',
            //     url: 'login'
            // }).then(function(account) {
            //     _account = account;
            //     deferred.resolve(_account);
            // }).catch(function(error) {
            //     deferred.reject(error);
            // });

            return deferred.promise;
		}
        
        function logout() {
            var deferred = $q.defer();
            
            // $http({
            //     method: 'POST',
            //     url: 'logout'
            // }).then(function(response) {
            //     _account = null;
            //     deferred.resolve(null);
            // }).catch(function(error) {
            //     deferred.reject(error);
            // });

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
