app.controller('eventsController',
    ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {
       $scope.error = false;
        $scope.eventsFilter = EventsService.getEvents($stateParams.id)
            .then(function successCallback(response) {
                $scope.error = false;
                $scope.eventsFilter = response;
                console.log("hello2 " + response);
            })
            .catch(function activateError(error) {
                $scope.error = true;
                console.log("hello"+ error);
            });




    // $scope.showTickets = function(eventId) {
    //     $scope.tickets = TicketsService.getTickets(eventId).then(response => {
    //         $scope.tickets = response;
    //         console.log($scope.tickets);
    //     })

    // }

}]);
