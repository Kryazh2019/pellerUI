app.service('EventsService', function ($http) {
    function getEvents(clubId) {
        return $http.get('../data/events.json').then((response) => {
            let filteredResponse = [];
            if (!!response && response.length > 0) {
                filteredResponse = response.filter((event) => {
                    return event.club === clubId;
                });
            }
            return filteredResponse;
        }, (error) => {
            return error;
        });
    }

    return {
        getEvents: getEvents
    }
})


// app.factory('EventsService', ['$http', function($http) {
//     function getEvents(clubId) {
//         return $http.get('../data/events.json').then((response) => {
//             let filteredResponse = [];
//             if(response.length > 0) {
//                 filteredResponse = response.filter((event) => {
//                     return event.clubid === clubId;
//                 });
//             }
//             return filteredResponse;
//         }, (error) => {
//             return error;
//         });
//     }
//
//     return {
//         getEvents: getEvents
//     }
//
// }])
//
// app.service('EventsService', ['$http', function($http) {
//     return {
//         getEvents: function(clubId) {
//             let filteredResponse = [];
//             return $http.get('../data/events.json').then((response) => {
//                  filteredResponse = Object.keys(response).filter((event) => {
//                     return event.clubid === clubId;
//                 });
//                 return filteredResponse;
//                 console.log(filteredResponse);
//             })
//         }
//     }
// }])

// app.factory('EventsService', ['$http', function($http) {
//     function getEvents(clubId) {
//         let filteredResponse = [];
//         $http.get('../data/events.json').then((response) => {
//              filteredResponse = Object.keys(response).filter((event) => {
//                 return event.club === clubId;
//             })
//         });
//         return filteredResponse;
//     }
//     return {
//         getEvents: getEvents
//     };
// }])




    // .service('nameStorage', function () {
    //     var _name = 'Bob';
    //     return {
    //         setName: function (name) {
    //             _name = name;
    //         }

//     let serviceEvents = {};
//     serviceEvents.getEventById = function(clubId) {
//         let filteredEvents = events.filter((event) => {
//             return event.clubid == clubId;
//         })
//         return filteredEvents;
//     }
//     return serviceEvents;
// }])