app.factory('EventsService' , ['$http', function($http) {
    let filteredEvents = [];
    let service = {};
    service.getEvents = function(id) {
        return $http.get('../data/events.json')
            .then(function(data) {
                filteredEvents = data.data.filter((event) => {
                    return event.club == id;
                })
                return filteredEvents;
            }, function(data) {
                console.log(data);
            })

    }
    return service;
}])

// app.factory('EventsService', ['$http', function($http) {
//     function getEvents(clubId) {
//         let events = [];
//          $http.get('../data/events.json').then((response) => {
//            return events = response.data;
//         })
//         return events;
//     }
//     return {
//         getEvents: getEvents
//     }
// }])
// app.factory('EventsService', ['$http', function($http) {
//     let serviceEvents = {};
//     let events = [];
//     serviceEvents.getEventById = function(clubId) {
//         $http.get('../data/events.json')
//             .success(function(data) {
//                 events = data;
//                 let filteredEvents = events.filter((event) => {
//                     return event.club == clubId;
//                 })
//                 return filteredEvents;
//             })
//
//     }
//     return serviceEvents;
// }])
// app.factory('EventsService', ['$http', function( $http) {
//     let events = [];
//     function getEvents() {
//         $http.get('../data/events.json')
//             .success(function(data) {
//                 events = data;
//             })
//             .error(function(data) {
//                 console.log(data);
//             })
//     }
//     getEvents();
//     let serviceEvents = {};
//     serviceEvents.getEventById = function(clubId) {
//         let filteredEvents = events.filter((event) => {
//             return event.club == clubId;
//         })
//         return filteredEvents;
//     }
//     return serviceEvents;
// }])


