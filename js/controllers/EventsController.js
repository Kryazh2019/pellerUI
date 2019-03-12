app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {

    $scope.events = EventsService.getEvents($stateParams.id);
    console.log($scope.events);


    //
    // $scope.showTickets = function(eventId) {
    //     $scope.tickets = TicketsService.getTicketById(eventId);
    //     console.log($scope.tickets);
    // }

}]);