(function() {
    'use strict';

    angular.module('app.components.messages')
    .directive('gsMessages', messagesDirective);

    function messagesDirective() {
        return {
            restrict : 'E',
            templateUrl : 'app/components/messages/messages.html',
            scope : {
                title : '@',
                color : '@'
            },
            controller : messagesController,
            controllerAs : 'vm',
            bindToController : true
        };
    }

    messagesController.$inject = ['dataservice', 'logger'];

    function messagesController(dataservice, logger) {
        var vm = this;

        vm.messageCount = 0;
        vm.activate = activate();

        function activate() {
            getMessageCount();
        }

        function getMessageCount() {
            return dataservice.getMessageCount()
            .then(function (data) {
                vm.messageCount = data;
                logger.info('Recieved messages');
                return vm.messageCount;
            });
        }

    }
})();
