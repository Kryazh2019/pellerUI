app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
        $scope.eventsFilter = EventsService.getEvents($stateParams.id).then(response => {
            $scope.eventsFilter = response;
            console.log(response, 123);
        })




    $scope.showTickets = function(eventId) {
        $scope.tickets = TicketsService.getTickets(eventId).then(response => {
            $scope.tickets = response;
            console.log($scope.tickets);
        })

    }

}]);