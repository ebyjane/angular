'use strict';

spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'index'
	})
	.when('/site/jobSearch', {
		templateUrl: 'views/site/jobSearch.html',
		controller: 'searchJobs'
	})
	
	.when('/site/resumeHeading', {
		templateUrl: 'views/site/resumeHeading.html',
		controller: 'resumeHeading'
	})
	.when('/site/termsAndConditions', {
		templateUrl: 'views/site/termsAndConditions.html',
		controller: 'termsAndConditions'
	})
	.when('/site/privacy', {
		templateUrl: 'views/site/privacy.html',
		controller: 'privacy'
	})
	.when('/site/otpVerification', {
		templateUrl: 'views/site/OTPVerification.html',
		controller: 'OTPVerification'
	})
	
	.when('/site/forgotPassword', {
		templateUrl: 'views/site/forgotPassword.html',
		controller: 'forgotPassword'
	})
	.when('/site/jobsFound', {
		templateUrl: 'views/site/jobsFound.html',
		controller: 'completeProfile'
	})
	.when('/site/profileMenu', {
		templateUrl: 'views/site/profileMenu.html',
		controller: 'profileMenu'
	})
	.when('/site/settings', {
		templateUrl: 'views/site/settings.html',
		controller: 'settings'
	})
	.when('/site/notificationSettings', {
		templateUrl: 'views/site/notificationSettings.html',
		controller: 'notificationSettings'
	})
	
	.when('/site/changePassword', {
		templateUrl: 'views/site/changepassword.html',
		controller: 'jobSearch'
	})
	.when('/site/communicationSettings', {
		templateUrl: 'views/site/communicationsettings.html',
		controller: 'communicationSettings'
	})
	
	
	.when('/site/save', {
		templateUrl: 'views/site/saveJobs.html',
		controller: 'savedJobs'
	})
	
	.when('/site/inbox', {
		templateUrl: 'views/site/inbox.html',
		controller: 'inbox'
	})
	.when('/site/aboutus', {
		templateUrl: 'views/site/aboutus.html',
		controller: 'aboutus'
	})
	.when('/site/faq', {
		templateUrl: 'views/site/faq.html',
		controller: 'faq'
	})
	.when('/site/completeProfile', {
		templateUrl: 'views/site/complete_your_profile.html',
		controller: 'completeProfile'
	})
	
	
	.when('/site/contactus', {
		templateUrl: 'views/site/contactUs.html',
		controller: 'contactUs'
	})
	.when('/site/recruiterMessage', {
		templateUrl: 'views/site/recruiterMessages.html',
		controller: 'recruiterMessage'
	})
	
	
	.when('/site/contactDetails', {
		templateUrl: 'views/site/contactDetails.html',
		controller: 'contactDetails'
	})
	.when('/site/moreDetails', {
		templateUrl: 'views/site/more_details.html',
		controller: 'moreDetails'
	})
	.when('/site/workexperience', {
		templateUrl: 'views/site/workExperience.html',
		controller: 'workexperience'
	})
	.when('/site/snapshot', {
		templateUrl: 'views/site/snapshot.html',
		controller: 'snapshot'
	})
	/* .when('/site/tenth', {
		templateUrl: 'views/site/10th_education.html',
		controller: 'tenth'
	})
	.when('/site/twelth', {
		templateUrl: 'views/site/12th_education.html',
		controller: 'twelth'
	}) */
	
	.when('/site/profileperformance', {
		templateUrl: 'views/site/profilePerformance.html',
		controller: 'profileperformance'
	})
	.when('/site/appliedJobs', {
		templateUrl: 'views/site/appliedjobs.html',
		controller: 'appliedJobs'
	})
	.when('/site/changePhone', {
		templateUrl: 'views/site/changePhoneNumber.html',
		controller: 'changePhone'
	})
	.when('/site/changeEmail', {
		templateUrl: 'views/site/changeEmailID.html',
		controller: 'changeEmail'
	})
	.when('/site/educationlink', {
		templateUrl: 'views/site/education_link.html',
		controller: 'educationlink'
	})
	/* .when('/site/education', {
		templateUrl: 'views/site/education.html',
		controller: 'education'
	})
	.when('/site/higher', {
		templateUrl: 'views/site/higher_education.html',
		controller: 'higher'
	}) */
	.when('/site/viewprofile', {
		templateUrl: 'views/site/viewProfile.html',
		controller: 'viewProfile'
	})
	.when('/site/uploadResume', {
		templateUrl: 'views/site/uploadResume.html',
		controller: 'uploadResume'
	})
	.when('/site/jobAlerts', {
		templateUrl: 'views/site/jobAlertsMain.html',
		controller: 'jobAlerts'
	})
	.when('/site/jobAlertsModify', {
		templateUrl: 'views/site/jobalerts.html',
		controller: 'jobAlertsModify'
	})
	.when('/site/updatePhoto', {
		templateUrl: 'views/site/photograph.html',
		controller: 'updatePhoto'
	})
	.when('/site/reply', {
		templateUrl: 'views/site/reply.html',
		controller: 'reply'
	})
	.when('/site/verifyNumber', {
		templateUrl: 'views/site/verifyNumber.html',
		controller: 'verifyNumber'
	})
	.otherwise({
		redirectTo: '/site/index'
	});
}]);

spaApp_site.directive('siteMenu',function(){
return {
templateUrl:'views/site/menu.html'
};
});

spaApp_site.controller('index',[ '$scope', function($scope) {
jq(".carousel-inner").swipe( {
						//Generic swipe handler for all directions
						swipeLeft:function(event, direction, distance, duration, fingerCount) {
							jq(this).parent().carousel('next'); 
						},
						swipeRight: function() {
							jq(this).parent().carousel('prev'); 
						},
						//Default is 75px, set to 0 for demo so any distance triggers swipe
						threshold:0
					});  
}]);


spaApp_site.service('ContactServices',[ '$http', '$cookies', function($http, $cookies) {
    this.myFunc = function (contacts) {		
		return $http.post(serviceBase+'site/contact?access_token='+$cookies.access_token, contacts);
    }
}]);
spaApp_site.controller('contactUs', ['$scope', '$http', 'ContactServices', function($scope,$http,ContactServices) {	
	// NAVIGATION MENU
  
  // menu icon states, opening main nav
  jq('.menu-icon').click(function(){
	
    jq(this).toggleClass('open');
    jq('.menu,#menu-toggle,#page-content,.menu-overlay').toggleClass('open');
    jq('.menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('.menu-overlay').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('.menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
	$scope.alert_message = false;
	$scope.ContactFormData = function() {
		var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
		var string2 = removeSpaces(document.getElementById('txtInput').value);
		function removeSpaces(string){
        	return string.split(' ').join('');
    	}
		if (string1 == string2){
			$scope.error_value = false;
	 		ContactServices.myFunc($scope.conatct).success(function (data) {
				$scope.contact = {};
                if (data.status === 1) {
					$scope.alert_message = true;
					$scope.alert_class = 'alert alert-success';
					$scope.responseMessage = data.message;
					$scope.success = 'Success!'				   
				}
				else {
					$scope.alert_message = true;
					$scope.alert_class = 'alert alert-danger';
					$scope.responseMessage = data.message;
					$scope.success = 'Danger!';
					$scope.contact = {};
				}
						
            })
            .error(function (data) {
                $scope.alert_message = true;
				$scope.alert_class = 'alert alert-danger';
				$scope.responseMessage = 'Opps something went wrong to contact with us!';
				$scope.success = 'Danger!';
				$scope.contact = {};
            });
		    setTimeout(function(){
				$scope.$apply(function () {
					$scope.alert_message = false;
				});
				window.location.reload(false);
			},4000);
		}
		else{
			$scope.error_value = true;
		}
	};

	$scope.Captcha = function() {
        var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    	 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
     	    	'0','1','2','3','4','5','6','7','8','9');
        var i;
		for (i=0;i<6;i++){
			var a = alpha[Math.floor(Math.random() * alpha.length)];
			var b = alpha[Math.floor(Math.random() * alpha.length)];
			var c = alpha[Math.floor(Math.random() * alpha.length)];
			var d = alpha[Math.floor(Math.random() * alpha.length)];
			var e = alpha[Math.floor(Math.random() * alpha.length)];
			var f = alpha[Math.floor(Math.random() * alpha.length)];
			var g = alpha[Math.floor(Math.random() * alpha.length)];
		}
	    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
	    document.getElementById("mainCaptcha").innerHTML = code
		document.getElementById("mainCaptcha").value = code   
	};
}])

spaApp_site.controller("reply",function($scope){

});
spaApp_site.controller("resumeHeading",function($scope){

});
spaApp_site.controller("verifyNumber",function($scope){

});

 spaApp_site.controller("educationlink",function($scope){

});
spaApp_site.controller("education",function($scope){

});
spaApp_site.controller("changePhone",function($scope){

});
spaApp_site.controller("changeEmail",function($scope){

});
spaApp_site.controller("higher",function($scope){

});
spaApp_site.controller("viewprofile",function($scope){

});
spaApp_site.controller("uploadResume",function($scope){

});
spaApp_site.controller("updatePhoto",function($scope){

});

spaApp_site.controller("jobAlerts",function($scope){

});
spaApp_site.controller("moreDetails",function($scope){

});
spaApp_site.controller("tenth",function($scope){

});
spaApp_site.controller("twelth",function($scope){

});


spaApp_site.controller("recruiterMessage",function($scope){

});
spaApp_site.controller("jobAlertsModify",function($scope){

});
spaApp_site.controller("contactDetails",function($scope){

});
spaApp_site.controller("profileperformance",function($scope){

});
spaApp_site.controller("workexperience",function($scope){

});
spaApp_site.controller("snapshot",function($scope){

});

spaApp_site.controller("appliedJobs", ['$scope','jobServicess', function($scope, jobServicess){
			$scope.none = 'block';
			$scope.button = "Load More>>"
			var appliedJobsArray = [];
			 var appliedJobsId = [{appliedJobId:0}];
			 getAppliedJobs(0);
			 function getAppliedJobs(id) {
		  jobServicess.appliedJobs(id).then(function successCallback(response){
			  if (response.data.status == 1) {
			var len = response.data.data.length;
			var data_val = response.data.data;	
			for (var i = 0; i < len; i++) {
			appliedJobsArray.push(data_val[i]);
			}
			$scope.appliedJobs = appliedJobsArray;
			appliedJobsId = response.data.data;
			$scope.none = 'none';
			$scope.button = "Load More>>";
		  } else {
			$scope.none = 'none';
			$scope.button = "Load More>>"
			$scope.errorMessage = 'No more data to load!';
		  }
		}, function errorCallback(error){
			$scope.none = 'none';
			$scope.button = "Load More>>"
			$scope.errorMessage = 'Opps somthing went wrong!';
		});		

}	                  
			
		$scope.loadAppliedJobs = function() {
			$scope.button = "Loading. . .";
			$scope.none = 'block';
			getAppliedJobs(appliedJobsId[appliedJobsId.length - 1].appliedJobId);
		}	 
}]);

spaApp_site.controller("aboutus",function($scope){

});
spaApp_site.controller("faq",function($scope){

});

spaApp_site.controller("forgotPassword",function($rootScope,$scope,$location){
$scope.online = $rootScope.online;

$scope.showMsg = false;
if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
$scope.submit = function() {
   if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
else{
	$location.path('/site/index');
}
};

});

spaApp_site.controller("termsAndConditions",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("OTPVerification",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("inbox",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("privacy",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("settings",function($scope){
	
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("notificationSettings",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("communicationSettings",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("visibilitySettings",function($scope){
		  $scope.closepage = function() {
   window.history.back();
};
});
spaApp_site.controller("recommended",function($scope,$location){
		  $scope.closepage = function() {
   window.history.back();
};
 $scope.goToCustomAlerts = function () {        
    $location.path('/site/customAlerts');
};
 $scope.goToSaveJobs = function () {        
    $location.path('/site/save');
};
});
spaApp_site.controller("save",function($scope,$location){
		  $scope.closepage = function() {
   window.history.back();
};




 $scope.goTorecommended = function () {        
    $location.path('/site/recommended');
};
 $scope.goToCustomAlerts = function () {        
    $location.path('/site/customAlerts');
};
});


spaApp_site.controller("savedJobs",['$scope', '$location', 'jobServicess', function($scope, $location, jobServicess){
		$scope.none = 'block';
			$scope.button = "Load More>>"
			var savedJobsArray = [];
			 var savedJobsId = [{savedId:0}];
			 getSavedJobs(0);
			 function getSavedJobs(id) {
		  jobServicess.savedJobs(id).then(function successCallback(response){
			  if (response.data.status == 1) {
			var len = response.data.data.length;
			var data_val = response.data.data;	
			for (var i = 0; i < len; i++) {
			savedJobsArray.push(data_val[i]);
			}
			$scope.savedJobs = savedJobsArray;
			savedJobsId = response.data.data;
			$scope.none = 'none';
			$scope.button = "Load More>>";
		  } else {
			$scope.none = 'none';
			$scope.button = "Load More>>"
			$scope.errorMessage = 'No more data to load!';
		  }
		}, function errorCallback(error){
			$scope.none = 'none';
			$scope.button = "Load More>>"
			$scope.errorMessage = 'Opps somthing went wrong!';
		});		

}	                  
		$scope.loadSavedJobs = function() {
			$scope.button = "Loading. . .";
			$scope.none = 'block';
			getSavedJobs(savedJobsId[savedJobsId.length - 1].savedId);
		};
		$scope.closepage = function() {
		window.history.back();
		};
		/* $scope.goTorecommended = function () {        
		$location.path('/site/recommended');
		};
		$scope.goToCustomAlerts = function () {        
		$location.path('/site/customAlerts');
		}; */
}]);

spaApp_site.controller("customAlerts",function($scope,$location){
		  $scope.closepage = function() {
   window.history.back();
};
 $scope.goTorecommended = function () {        
    $location.path('/site/recommended');
};
 $scope.goToSaveJobs = function () {        
    $location.path('/site/save');
};
});

spaApp_site.controller("profileMenu",function($scope,$cookies, $location){


    if ($cookies.access_token == 'null' || $cookies.access_token == undefined)
	    $location.path('jobseeker/login');
    
resizeDiv();
window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
	
var vph = jq(window).height();

var height=vph-130;
var menuHeight=height/10;
var equheight=height*0.3;
var textHeight=equheight-60;
var jobsheight=height*0.4;
var textHeight1=jobsheight-80;
jq('.heightset').css({'height': menuHeight + 'px'});
jq('.box-a').css({'height': jobsheight + 'px'});
jq('.box-b').css({'height': equheight + 'px'});
jq('.box-c').css({'height': equheight + 'px'});
jq('.jobs2').css({'top': textHeight + 'px'});
jq('.jobs').css({'top': textHeight + 'px'});
jq('.jobs3').css({'top': textHeight1 + 'px'});
jq('.jobs4').css({'top': textHeight1 + 'px'});

}


// NAVIGATION MENU
  
  // menu icon states, opening main nav
  jq('.menu-icon').click(function(){
	 
    jq(this).toggleClass('open');
    jq('.menu,#menu-toggle,#page-content,.menu-overlay').toggleClass('open');
    jq('.menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('.menu-overlay').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('.menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
   jq('.profile-menu').click(function(){
	 
    jq(this).toggleClass('open');
    jq('#menuProfile,#menu-toggleProfile,#page-contentProfile,#menu-overlayProfile').toggleClass('open');
    jq('#menuProfile li,.submenu-toggleProfile').removeClass('open');
  });
 
  // clicking on overlay closes menu
  jq('#menu-overlayProfile').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menuProfile li').has('ul').addClass('parent').prepend('<div class="submenu-toggleProfile">open</div>');
  
  // toggle child menus
  jq('.submenu-toggleProfile').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
});

spaApp_site.controller("login",function($rootScope,$scope,$location){
/*$scope.showMsg = false;
$scope.online = $rootScope.online;
alert($scope.online);
if($scope.online==false)
{
	$scope.showMsg = true;		
				
}

$scope.profileMenu = function() {
$scope.online = $rootScope.online;
alert($scope.online);
if($scope.online==true)
{
	$location.path('/site/profileMenu');		
				
}
else{
$scope.showMsg = true;	
}

};*/
 
$scope.online = $rootScope.online;

$scope.showMsg = false;
if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
$scope.profileMenu = function() {
   if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
else{
	$location.path('/site/profileMenu');
}
};
 
$scope.forgotpassword = function() {
$location.path('/site/forgotPassword');
};

  
});

spaApp_site.controller("jobSearch",function($scope){
// NAVIGATION MENU
$scope.showMsg = false;
if($scope.online==false)
{
	$scope.showMsg = true;			
				
}  
  // menu icon states, opening main nav
 jq('.menu-icon').click(function(){
	 
    jq(this).toggleClass('open');
    jq('.menu,#menu-toggle,#page-content,.menu-overlay').toggleClass('open');
    jq('.menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('.menu-overlay').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('.menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
 
});

spaApp_site.factory('searchJobsServices', ['$http', '$cookies', function($http, $cookies){	
	return {		
		'jobsFilters':function() {
			return $http.get(serviceBase+'empjobs/jobsdropdowns');
		}
	};	
}]); 

spaApp_site.controller("searchJobs", ['$scope', '$location', 'searchJobsServices', '$cookies', '$rootScope', function($scope, $location, searchJobsServices, $cookies,$rootScope){
	console.log($cookies.access_token);
	if ($cookies.access_token == 'null'  || $cookies.access_token == undefined)
	    $location.path('jobseeker/login');
	
 $scope.online = $rootScope.online;
 
  jq.getScript('//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.min.js',function(){
		 jq("#mySel").select2({
    	closeOnSelect:false,
		minimumInputLength: 1 
    });
	});
	
    $scope.search = {skills:0,location:0,experience:0,salary:0,industry:0,functionalArea:0};
     searchJobsServices.jobsFilters().then(function successCallback(response){
		 $scope.cities = response.data.City;
		 $scope.industries = response.data.Industry;
		 $scope.fArea = response.data.Category;
		  $scope.skillss = response.data.Skills;
	 }, function errorCallback(res){
		 console.log(res);
	 });

$scope.showMsg = false;
if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
$scope.jobView = function() {
   if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
else{
	$cookies.jobFilter = JSON.stringify($scope.search);
	$location.path('/job/joblisting');
}
};
$scope.resumeheading = function() {
	$location.path('/site/resumeHeading');
};

// NAVIGATION MENU
  
  // menu icon states, opening main nav
 jq('.menu-icon').click(function(){
	 
    jq(this).toggleClass('open');
    jq('.menu,#menu-toggle,#page-content,.menu-overlay').toggleClass('open');
    jq('.menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('.menu-overlay').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('.menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
  // Filter MENU
  
  // menu icon states, opening main nav
  jq('#menu-icon2').click(function(){
    jq(this).toggleClass('open');
    jq('#menu2,#menu-toggle2,#page-content2,#menu-overlay2').toggleClass('open');
    jq('#menu2 li,.submenu-toggle2').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay2').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu2 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle2">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle2').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  // Filter Salary Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon3').click(function(){
	 
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu3,#menu-toggle3,#page-content3,#menu-overlay3').toggleClass('open');
    jq('#menu3 li,.submenu-toggle3').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay3').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu3 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle3">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle3').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
 
// Filter Education Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon4').click(function(){
	 
	 jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu4,#menu-toggle4,#page-content4,#menu-overlay4').toggleClass('open');
    jq('#menu4 li,.submenu-toggle4').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay4').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu4 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle4">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle4').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  // Filter Role Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon5').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu5,#menu-toggle5,#page-content5,#menu-overlay5').toggleClass('open');
    jq('#menu5 li,.submenu-toggle5').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay5').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu5 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle5">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle5').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  
  // Filter Freshness Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon6').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu6,#menu-toggle6,#page-content6,#menu-overlay6').toggleClass('open');
    jq('#menu6 li,.submenu-toggle6').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay6').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu6 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle6">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle6').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  // Filter Location Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon7').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu7,#menu-toggle7,#page-content7,#menu-overlay7').toggleClass('open');
    jq('#menu7 li,.submenu-toggle7').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay7').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu7 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle7">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle7').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
   // Filter Function/Department Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon8').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu8,#menu-toggle8,#page-content8,#menu-overlay8').toggleClass('open');
    jq('#menu8 li,.submenu-toggle8').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay8').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu8 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle8">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle8').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
  // Filter Industry Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon9').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu9,#menu-toggle9,#page-content9,#menu-overlay9').toggleClass('open');
    jq('#menu9 li,.submenu-toggle9').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay9').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu9 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle9">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle9').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
 
}]);

spaApp_site.controller("viewProfile",['$rootScope', '$scope', '$location', 'completeProfileServices', '$cookies', function($rootScope,$scope,$location, completeProfileServices,$cookies){
 
 completeProfileServices.pDetails().then(function successCallback(response){	 
		 $scope.userDetails = response.data;
	 }, function errorCallback(response){	 
		 console.log(response)
	 }); 
 $scope.uploadResume = function(){
 	//alert(123);
 	completeProfileServices.uploadResume().then(function successCallback(response){	 
		 //$scope.userDetails = response.data;
	 }, function errorCallback(response){	 
		 console.log(response)
	 }); 
 }
if($cookies.access_token == null)
$rootScope.accesstoken=true;
else
$rootScope.accesstoken=false;	

$scope.online = $rootScope.online;
$scope.showMsg = false;
if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
$scope.jobView = function() {
   if($scope.online==false)
{
	$scope.showMsg = true;			
				
}
else{
	$location.path('/job/joblisting');
}
};
$scope.resumeheading = function() {
	$location.path('/site/resumeHeading');
};

// NAVIGATION MENU
  
  // menu icon states, opening main nav
 jq('.menu-icon').click(function(){
	 
    jq(this).toggleClass('open');
    jq('.menu,#menu-toggle,#page-content,.menu-overlay').toggleClass('open');
    jq('.menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('.menu-overlay').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('.menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
  // Filter MENU
  
  // menu icon states, opening main nav
  jq('#menu-icon2').click(function(){
    jq(this).toggleClass('open');
    jq('#menu2,#menu-toggle2,#page-content2,#menu-overlay2').toggleClass('open');
    jq('#menu2 li,.submenu-toggle2').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay2').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu2 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle2">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle2').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  // Filter Salary Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon3').click(function(){
	 
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu3,#menu-toggle3,#page-content3,#menu-overlay3').toggleClass('open');
    jq('#menu3 li,.submenu-toggle3').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay3').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu3 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle3">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle3').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
 
// Filter Education Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon4').click(function(){
	 
	 jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu4,#menu-toggle4,#page-content4,#menu-overlay4').toggleClass('open');
    jq('#menu4 li,.submenu-toggle4').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay4').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu4 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle4">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle4').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  // Filter Role Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon5').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu5,#menu-toggle5,#page-content5,#menu-overlay5').toggleClass('open');
    jq('#menu5 li,.submenu-toggle5').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay5').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu5 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle5">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle5').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  
  // Filter Freshness Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon6').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu6,#menu-toggle6,#page-content6,#menu-overlay6').toggleClass('open');
    jq('#menu6 li,.submenu-toggle6').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay6').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu6 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle6">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle6').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  }); 
  
  // Filter Location Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon7').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu7,#menu-toggle7,#page-content7,#menu-overlay7').toggleClass('open');
    jq('#menu7 li,.submenu-toggle7').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay7').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu7 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle7">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle7').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
   // Filter Function/Department Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon8').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu8,#menu-toggle8,#page-content8,#menu-overlay8').toggleClass('open');
    jq('#menu8 li,.submenu-toggle8').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay8').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu8 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle8">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle8').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  
  
  // Filter Industry Menu
  
  // menu icon states, opening main nav
  jq('#menu-icon9').click(function(){
	jq('*').removeClass('open');
    jq(this).toggleClass('open');
    jq('#menu9,#menu-toggle9,#page-content9,#menu-overlay9').toggleClass('open');
    jq('#menu9 li,.submenu-toggle9').removeClass('open');
  });
  
  // clicking on overlay closes menu
  jq('#menu-overlay9').click(function(){
    jq('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  jq('#menu9 li').has('ul').addClass('parent').prepend('<div class="submenu-toggle9">open</div>');
  
  // toggle child menus
  jq('.submenu-toggle9').click(function(){
    var currentToggle=jq(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
 
}]);

spaApp_site.controller("uploadResume",['$rootScope', '$scope', '$location', 'completeProfileServices', '$cookies', function($rootScope,$scope,$location, completeProfileServices,$cookies){
 
 $scope.uploadResume = function(){
 	
 	completeProfileServices.uploadResume().then(function(response){	 
		 console.log(response);
	 	if(response.resumeStatus === 1){
	 		$scope.showMsg = true;
			$scope.alert_class = 'alert alert-success';		
			$scope.success_or_error = 'Resume Uploaded successfully';
	 	}
	 }); 
 }
 }]);