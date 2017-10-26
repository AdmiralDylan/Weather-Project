var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
	
x.innerHTML = "Your position is" + "<br>Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
getLocation();

var api = 'api.openweathermap.org/data/2.5/weather?';
var key = '&appid=1368f388c690376bc42b3ca71fd14d90';
var pos = "lat =" + position.coords.latitude + "&" + "long =" + position.coords.latitude;



function loadAPI(){
	var url = api + key + pos;
	loadJSON(url);
}

loadAPI();
