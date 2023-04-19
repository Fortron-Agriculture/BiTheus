var url = `${process.env.PROTHEUS_HOST}/api/crm/v1/customerVendor/{entityType}` 
 
var xhr = new XMLHttpRequest();
xhr.open("GET",url, true);
xhr.onload = function () {
  var response = JSON.
	parse(xhr.responseText);
	if (xhr.readyState == 4 
	  && xhr.status == "200") {
		console.log(response);
	} else {
		console.error(response);
	}
}
xhr.send(null);