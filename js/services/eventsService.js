
app.factory('EventsService', ['$http', function( $http) {
    let events = [];
    function getEvents() {
        $http.get('../data/events.json')
            .success(function(data) {
                events = data;
            })
            .error(function(data) {
                console.log(data);
            })
    }
    getEvents();
    let serviceEvents = {};
    serviceEvents.getEventById = function(clubId) {
        let filteredEvents = events.filter((event) => {
            return event.clubid == clubId;
        })
        return filteredEvents;
    }
    return serviceEvents;
}])