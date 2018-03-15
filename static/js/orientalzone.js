var map = null;
var panorama = null;
var lat = 14.8067406;
var lon = -85.76666449999999;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings = {
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom: 7.3
	};

	map = new google.maps.Map(document.getElementById('map'),mapSettings);

	// Biosfera del rio platano

	markerSettingsB = {
		map: map,
		position: {lat:15.5959001,lng:-85.01202339999998},
		title:'Biosfera del rio plátano'
	};

	var markerB = new google.maps.Marker(markerSettingsB);

	var contentString = `La Reserva de la Biosfera de Río Plátano está localizada en 
	los alrededores de río Plátano en La Mosquitia, la región en la costa caribeña de 
	Honduras. Tiene una extensión de 5250 km² y abarca tanto montañas como tierras bajas
	de selva tropical con una gran biodiversidad.1​2​3​ La reserva ha sido declarada Patrimonio 
	de la Humanidad y Reserva de la Biosfera por la Unesco, en el año 1980.4​`; 


	var infowindowB = new google.maps.InfoWindow({
			content: contentString
		});

	markerB.addListener('click',function(){
		infowindowB.open(map,markerB);
	});



	// Fortaleza de Santa Bárbara

		markerSettingsF = {
		map: map,
		position: {lat:15.9210015,lng:-85.95232909999999},
		title:'Fortaleza de Santa Bárbara'
	};

	var markerF = new google.maps.Marker(markerSettingsF);


	var contentString = `La Fortaleza de Santa Bárbara, conocida también como "El Castillo", se encuentra en 
	la ciudad de Trujillo en el departamento de Colón, Honduras. La fortaleza es la primera construida con 
	fines militares por los colonos españoles en el país.
	Este fuerte está declarado como Monumento y Patrimonio Nacional Histórico de la república de Honduras, 
	mediante Acuerdo gubernamental No. 049, de fecha 8 de marzo de 1990, la edificación paso a propiedad y 
	cuidados del IHAH en el año 1997.1`; 


	var infowindowF = new google.maps.InfoWindow({
			content: contentString
		});

	markerF.addListener('click',function(){
		infowindowF.open(map,markerF);
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