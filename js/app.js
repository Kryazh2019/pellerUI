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
 }]);

