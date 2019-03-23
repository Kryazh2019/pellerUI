app.factory('TicketsService', ['$http', function($http) {

    let service = {};
    service.getTickets = function(id) {
       return $http.get('../data/tickets.json')
           .then(function(data) {
               let filteredTickets = data.data.filter((ticket) => {
                   return ticket.event == id;
               })
               return filteredTickets;
           }, function(error) {
               throw new Error(error.status);
           })
    }
    service.getTicket = function(id) {
        return $http.get('../data/tickets.json')
            .then(function(data) {
                let filteredTicket = data.data.filter((ticket) => {
                    return ticket.id == id;
                })
                return filteredTicket;
            }, function(error) {
                throw new Error(error.status);
            })
    }
    return service;
}])