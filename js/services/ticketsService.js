
app.factory('TicketsService', ['$http', function( $http) {
    let tickets = [];
    function getTickets() {
        $http.get('../data/tickets.json')
            .success(function(data) {
                tickets = data;
            })
            .error(function(data) {
                console.log(data);
            })
    }
    getTickets();
    let serviceTickets = {};
    serviceTickets.getTicketById = function(eventId) {
        let filteredTickets = tickets.filter((event) => {
            return event.event == eventId;
        })
        return filteredTickets;
    }
    return serviceTickets;
}])