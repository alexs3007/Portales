



var map = null;
var panorama = null;
var lat =  13.3002800;
var lon =  -87.1908300;

// var lat1 = 13.2916538;
// var lon1 =-87.65194729999996;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings={
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom:8.9
	};

// Amapala

	map = new google.maps.Map(document.getElementById('map'),mapSettings);

	markerSettingsA = {
		map: map,
		position: {lat:13.2916538, lng:-87.65194729999996},
		title:'Amapala'
	};


	var markerA = new google.maps.Marker(markerSettingsA);

	var contentString = `Amapala, está formado por la isla de El Tigre y sus islotes satélites y rocas en el 
	Golfo de Fonseca. Tiene una superficie de 75,2 km² y una población de 9,687 habitantes según el censo de 
	2001 (de 4 personas que vivían en la Isla Comandante), gracias a un profundo canal natural, y a pesar de 
	que carecen de una infraestructura moderna, Amapala ha sido durante muchos años el principal puerto de 
	Honduras en el Golfo de Fonseca y Océano Pacífico.`; 


	var infowindowA = new google.maps.InfoWindow({
			content: contentString
		});

	markerA.addListener('click',function(){
		infowindowA.open(map,markerA);
	});



// San Marcos de colón


	markerSettingsS = {
		map: map,
		position: {lat:13.439615, lng:-86.79943589999999},
		title:'San Marcos de Colón'
	};

	var markerS = new google.maps.Marker(markerSettingsS);

	var contentString = `San Marcos de Colón es uno de los 16 municipios del departamento de Choluteca. 
	La ciudad cabecera se sitúa a lo largo de la carretera Panamericana, a 192 km de Tegucigalpa, a 53 km 
	de Choluteca y a 12 km de la frontera con Nicaragua (El Espino).
	El municipio está dividido en 18 aldeas y caseríos, además de los 41 barrios o colonias del centro de
	la ciudad, para una población total de 27.533 habitantes (censo 2013). El 57,1% vive en zonas rurales. 
	Las demás personas viven en zonas urbanas de San Marcos, Comalí y San Francisco.`; 


	var infowindowS = new google.maps.InfoWindow({
			content: contentString
		});

	markerS.addListener('click',function(){
		infowindowS.open(map,markerS);
	});




	var panoSettings = {

		position: {lat:13.3090076,lng:-87.1793544},
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);
}


