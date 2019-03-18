app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
       $scope.error = false;
        $scope.eventsFilter = EventsService.getEvents($stateParams.id).then(response =>
        {
            if( response != undefined ){
                $scope.eventsFilter = response;
            } else {
                $scope.error = true;
            }


        })




    $scope.showTickets = function(eventId) {
        $scope.tickets = TicketsService.getTickets(eventId).then(response => {
            $scope.tickets = response;
            console.log($scope.tickets);
        })

    }

}]);