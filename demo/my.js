function callDemoEnquiry(lead){

     var jsonEnquiryForm={
        "applicantName": enqName,
        "eMail": enqEmail,
        "mobileNo": enqMobileNo,
        "courses":selectedTechnologiesList,
        "fromPage":""+lead,
        "tenant":"codekul",
        "inquiryType":"Demo Lecture"
     };

      var xhr = new XMLHttpRequest();
			xhr.open('POST', newUrl, true);
			xhr.onload = function(e) {
			};
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonEnquiryForm));
			xhr.onreadystatechange = function() {
				var data1 = eval('(' + xhr.responseText + ')');
				if (xhr.status === 201 && xhr.readyState === 4) {
				}
			};
}
