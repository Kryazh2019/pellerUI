app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
        EventsService.getEvents().then((response) => {
            $scope.events = response.data;
        })

    console.log($scope.events);


    //
    // $scope.showTickets = function(eventId) {
    //     $scope.tickets = TicketsService.getTicketById(eventId);
    //     console.log($scope.tickets);
    // }

}]);