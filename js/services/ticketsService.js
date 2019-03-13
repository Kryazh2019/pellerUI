app.factory('TicketsService', ['$http', function($http) {
    let filteredTickets = [];
    let service = {};
    service.getTickets = function(id) {
       return $http.get('../data/tickets.json')
           .then(function(data) {
               filteredTickets = data.data.filter((ticket) => {
                   return ticket.event == id;
               })
               return filteredTickets;
           }, function(data) {
               console.log(data);
           })
    }
    return service;
}])