app.controller('eventController',
['$scope', '$stateParams', 'EventsService','TicketsService',
function($scope, $stateParams, EventsService, TicketsService) {
    showticket = false;
    $scope.error = false;
    $scope.eventInfo = EventsService.getEvents($stateParams.eventId)
        .then(function successCallback(response) {
            $scope.error = false;
            $scope.eventInfo = response;
            console.log("Мероприятия " + $scope.eventInfo);
        })
        .catch(function activateError(error) {
            $scope.error = true;
            console.log("Catch callback " + error);
        });


    $scope.tickets = TicketsService.getTickets($stateParams.eventId)
        .then(response => {
            $scope.tickets = response;
            console.log("Билеты" + $scope.tickets);
        })
    
    
    $scope.showTickets = function(id) {
        $scope.tickets = TicketsService.getTicket(id)
        .then(response => {
            $scope.tickets = response;
            console.log("Билеты123123" + $scope.tickets);
        })
    }
    

}])