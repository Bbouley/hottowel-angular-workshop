(function () {
    'use strict';

    angular.module('app.components.peopleGrid')
    .directive('gsPeopleGrid', peopleGridDirective);

    function peopleGridDirective() {
        return {
            restrict : 'E',
            templateUrl : 'app/components/peopleGrid/peopleGrid.html',
            scope : {},
            controller : PeopleGridController,
            controllerAs : 'vm',
            bindToConroller : true
        };
    }

    PeopleGridController.$inject = ['dataservice', 'logger'];

    function PeopleGridController(dataservice, logger) {
        var vm = this;

        vm.people = [];

        vm.activate = activate;

        function getPeople() {
            return dataservice.getPeople()
            .then(function (data) {
                vm.people = data;
                logger.info('Activated People Grid View');
                return vm.people;
            });
        }

        function activate() {
            getPeople();
        }
    }

})();
