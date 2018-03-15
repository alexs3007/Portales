var map = null;
var panorama = null;
var lat = 15.0000000;
var lon = -86.5000000;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings = {
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom:6.9
	};

	map = new google.maps.Map(document.getElementById('map'),mapSettings);


	var panoSettings = {

		position: mapCoords,
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);
}