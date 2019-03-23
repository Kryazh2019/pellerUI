app.controller('ticketController',
    ['$scope', '$stateParams', 'TicketsService',
    function($scope, $stateParams, TicketsService) {
       $scope.error = false;
       
       $scope.tickets = TicketsService.getTicket($stateParams.ticketId)
        .then(response => {
            $scope.tickets = response;
            console.log("Билеты" + $scope.tickets);
            console.log($stateParams.ticketId);
        })

}]);
