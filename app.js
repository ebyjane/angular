'use strict';
var jq = jQuery.noConflict();
/*var serviceBase1 = 'http://beta.api.takeajob.com/index.php/';

var serviceBase = 'http://beta.api.takeajob.com/index.php/v1/';*/


var serviceBase = 'http://api.takeajob.com/index.php/v1/';
var serviceBase1 = 'http://api.takeajob.com/index.php/';

var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaApp.site',
  'spaApp.book',
  'spaApp.company',
  'spaApp.summary',
  'spaApp.coverletter',
  'spaApp.itskill',
  'ngAnimate',
  'ngCookies',
  'spaApp.moredetails',
  'spaApp.login',
  'spaApp.messagingsystem',
  'spaApp.jobalert',
  'spaApp.snapshot',
  'spaApp.visibility',
  'spaApp.employerordesignation',
  'spaApp.communicationsettings',
]);
var spaApp_site = angular.module('spaApp.site', ['ngRoute','ngTouch','ngAnimate', 'ngCookies']);
var spaApp_book = angular.module('spaApp.book', ['ngRoute']);
var spaApp_company = angular.module('spaApp.company', ['ngRoute']);
var spaApp_summary = angular.module('spaApp.summary', ['ngRoute','ngCookies']);
var spaApp_coverletter = angular.module('spaApp.coverletter', ['ngRoute','ngCookies']);
var spaApp_itskill = angular.module('spaApp.itskill', ['ngRoute', 'ngCookies']);
var spaApp_moredetails = angular.module('spaApp.moredetails', ['ngRoute']);
var spaApp_login = angular.module('spaApp.login', ['ngRoute', 'ngCookies']);
var spaApp_jobalert = angular.module('spaApp.jobalert', ['ngRoute', 'ngCookies']);
var spaApp_snapshot = angular.module('spaApp.snapshot', ['ngRoute', 'ngCookies']);
var spaApp_messagingsystem = angular.module('spaApp.messagingsystem', ['ngRoute']);
var spaApp_visibility = angular.module('spaApp.visibility', ['ngRoute']);
var spaApp_employerordesignation = angular.module('spaApp.employerordesignation', ['ngRoute', 'ngCookies']);
var spaApp_communicationsettings = angular.module('spaApp.communicationsettings', ['ngRoute']);

spaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/site/index'});
}]);
spaApp.value("image_url", 'https://takeajob.s3.amazonaws.com/'); 
spaApp.value("localImageUrl", 'http://192.168.1.222/saga/ApplicationTeam/takeajob/3_0/employer_takeajob/'); 
spaApp.value("beta_image_url", 'https://takeajob.s3.amazonaws.com/'); 
										
   spaApp.run(function($window,$rootScope,$cookies,$location) {
         
		/*$rootScope.$on("$locationChangeStart", function(event, next, current){
       
        if($cookies.access_token == null)
            $location.path('site/index');     
       });*/
		
		
		
		$rootScope.closepage = function() {
			window.history.back();
        };
		$rootScope.logout = function() {
			  $cookies.access_token = null	
			  $location.path('jobseeker/login');
		};	
        $rootScope.exitApp = function() {
			  $location.path('site/jobSearch');
		};	
		$rootScope.online = navigator.online;
      $window.addEventListener("offline", function() {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);

      $window.addEventListener("online", function() {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
    }); 
	spaApp.directive('validFile',function(){
  return {
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      el.bind('change',function(){
		  var fsize= this.files[0].size;
		  
		 
		  if (fsize > 2000000) {
				alert('File is too large.');
				return false;                    
		  } 
		  
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
});
	
	