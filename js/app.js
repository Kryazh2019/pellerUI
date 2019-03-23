var app = angular.module('pellerTest', ['ui.router']);

 app.config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider) {
     $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     })
     $stateProvider
         .state('homePage', {
            url: '/',
             templateUrl:'./pages/home.html',
             controller: 'homeController'
         })
         .state('clubs', {
             url: '/clubs',
             templateUrl:'./pages/clubs.html',
             controller: 'clubsController'
         })
         .state('events', {
             url:'/clubs/:id',
             templateUrl:'./pages/events.html',
             controller: 'eventsController'
         })
         .state('eventsId', {
             url:'/event/:eventId',
             templateUrl:'./pages/event.html',
             controller: 'eventController'
         })
         .state('tickets', {
             url:'/ticket/:ticketId',
             templateUrl:'../pages/ticket.html',
             controller:'eventController'
         })
 }]);


