'use strict';
spaApp_site.factory('completeProfileServices', ['$http', '$cookies', function($http, $cookies){	

	 var obj = {
			
		pDetails:function() {
			return $http.get(serviceBase+'profile/userprofile?access_token='+$cookies.access_token);
	},
	uploadResume : function () {
	   
	    var file_data = jQuery('#files').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('file', file_data);
    
    //form_data.append('jobseeker', JSON.stringify(jobseeker));
	 
		 
		   return jQuery.ajax({
				url     : serviceBase+'site/uploadresume?access_token='+$cookies.access_token,
				dataType: "JSON",
				//cache: false,
				contentType: false,
				processData: false,
				data: form_data,                         
				type: 'post',
				async:false,
				success: function(result){
				
				//$cookies.userid = result.userid;
				//$cookies.pageName = result.pageName;
				
				
				
				 
				}
     });
			
	
	}
		};
		return obj;
}]);
