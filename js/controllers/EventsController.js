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

// $http
//     .get(url)
//     .success(function(data) {
//         // Handle data
//     })
//     .error(function(data, status) {
//         // Handle HTTP error
//     })
//     .finally(function() {
//         // Execute logic independent of success/error
//     })
//     .catch(function(error) {
//         // Catch and handle exceptions from success/error/finally functions
//     });



    $scope.showTickets = function(eventId) {
        $scope.tickets = TicketsService.getTickets(eventId).then(response => {
            $scope.tickets = response;
            console.log($scope.tickets);
        })

    }

}]);
// if( response != undefined ){
//     $scope.eventsFilter = response;
// } else {
//     $scope.error = true;
// }
//
// $scope.error = false;
// $scope.eventsFilter = response;
// console.log("hello2 " + response)

// $scope.error = true;
// console.log("hello"+ response);

// .then(function successCallback(response) {
//     $scope.error = false;
//     $scope.eventsFilter = response;
//     console.log("hello2 " + response)
// }, function errorCallback(response) {
//     $scope.error = true;
//     console.log("hello"+ response);
// })