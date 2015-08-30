(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('accountDirective', accountDirective);

    function accountDirective($templateCache) {
        return {
            restriction: 'EA',
            scope: {},
            controller: AccountController,
            controllerAs: 'accountVm',
            template: $templateCache.get('account/account.html')
        };
    }

    function AccountController($scope, $state, accountManager, itemSetDetailsService) {
        var vm = this;
        vm.account = null;
        vm.register = register;
        vm.login = login;
        vm.logout = logout;
		vm.closeModal = closeModal;
        vm.goToBuild = goToBuild;
        vm.goToRegister = goToRegister;
        vm.goToLogin = goToLogin;
        vm.showAccountInfo = false;
        vm.processing = false;

        accountManager.getCredentials().then(function(account) {
            vm.account = account;
            itemSetDetailsService.getItemBuildsByUserId(account.id).then(function(builds) {
                vm.myBuilds = builds;
            }).catch(function(error) {
                console.log(error);
            });
        }).catch(function(error) {
            console.log('An error occured while getting initial credentials');
            console.log(error);
        });

        function register() {
            accountManager.register(vm.email, vm.password, vm.username).then(function(account) {
                vm.account = account;
                vm.myBuilds = [];
                vm.processing = false;
            }).catch(function(error) {
                vm.serverError = error.error;
                vm.processing = false;
                console.log({error: error});
            });
        }

		function login() {
            vm.processing = true;
			accountManager.login(vm.email, vm.password).then(function(account) {
                vm.account = account;
                vm.processing = false;
                itemSetDetailsService.getItemBuildsByUserId(account.id).then(function(builds) {
                    vm.myBuilds = builds;
                }).catch(function(error) {
                    console.log({error: error});
                });
            }).catch(function(error) {
                vm.processing = false;
                vm.serverError = error.error;
            });
		}

        function logout() {
            accountManager.logout().then(function() {
                vm.account = null;
            }).catch(function(error) {
               console.log('Error while logging out');
            });
        }

        function closeModal() {
            vm.showAccountInfo = false;
        }

        function goToBuild(build) {
            $state.go('build', {buildId: build._id});
            closeModal();
        }

        function goToRegister() {
            vm.registerScreen = true;
            vm.serverError = null;
        }

        function goToLogin() {
            vm.registerScreen = false;
            vm.serverError = null;
        }
    }

}(window.angular));
