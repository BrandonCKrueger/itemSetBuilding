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
		vm.login = login;
        vm.logout = logout;
		vm.closeModal = closeModal;
        vm.goToBuild = goToBuild;
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

		function login() {
            vm.processing = true;
			accountManager.login(vm.email, vm.password).then(function(account) {
                vm.account = account;
                vm.processing = false;
                itemSetDetailsService.getItemBuildsByUserId(account.id).then(function(builds) {
                    vm.myBuilds = builds;
                }).catch(function(error) {
                console.log(error);
                });
            }).catch(function(error) {
               console.log('Error while logging in'); 
               console.log(error);
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
    }

}(window.angular));
