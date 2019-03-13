app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
    $scope.events = EventsService.getEvents($stateParams.id).then(response => {
        $scope.eventsFilter = response.data;
        console.log($scope.eventsFilter, 222);
    });


    //
    // $scope.showTickets = function(eventId) {
    //     $scope.tickets = TicketsService.getTicketById(eventId);
    //     console.log($scope.tickets);
    // }

}]);