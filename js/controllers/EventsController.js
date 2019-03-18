app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
        $scope.eventsFilter = EventsService.getEvents($stateParams.id).then(response =>
        {
            if( response != undefined ){
                $scope.eventsFilter = response;
            } else {
                console.log('Sorry... Something went wrong.');
                console.log(response);
            }


        })




    $scope.showTickets = function(eventId) {
        $scope.tickets = TicketsService.getTickets(eventId).then(response => {
            $scope.tickets = response;
            console.log($scope.tickets);
        })

    }

}]);