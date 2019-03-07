app.controller('eventsController', ['$scope', '$stateParams', 'EventsService', 'TicketsService',
    function($scope, $stateParams, EventsService, TicketsService) {

    $scope.events = EventsService.getEventById($stateParams.id);

    console.log($scope.events);

    $scope.showTickets = function(eventId) {
        $scope.tickets = TicketsService.getTicketById(eventId);
        console.log($scope.tickets);
    }

    // $scope.showTickets = function() {
    //     $http.get('../app/data/tickets.json').success(function (data) {
    //         let tickets = data;
    //
    //         let arrT = tickets;
    //
    //         let arr = arrT.filter(function(elem) {
    //             return elem.event == 1;
    //         });
    //         $scope.arrTickets = arr;
    //         console.log($scope.arrTickets);
    //
    //     })
    // }

}]);