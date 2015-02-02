
cordova.define("android",
	  function(require, exports, module) {
	    var exec = require("cordova/exec");
	    var Calendar = function () {};

	    Calendar.prototype.addCalendarEntry = function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
	    	var defaults = {
	    			title : title,
	    			description : notes,
	    			eventLocation: location,
	    			startTimeMillis: startDate.getTime(),
	    			endTimeMillis: endDate.getTime()
				};
	    	exec(
	            successCallback, // success callback function
	            errorCallback, // error callback function
	            'Calendar', // mapped to our native Java class called "CalendarPlugin"
	            'addCalendarEntry', // with this action name
	            [defaults]
	        ); 
	    }
	    
	    var calendar = new Calendar();
		module.exports = calendar;
});

