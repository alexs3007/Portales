var map = null;
var panorama = null;
var lat = 14.6435997;
var lon = -88.9946472;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings = {
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom: 9
	};

	map = new google.maps.Map(document.getElementById('map'),mapSettings);

	// Fuerte de San Cristóbal

	markerSettingsF = {
		map: map,
		position: {lat:14.5886703,lng:-88.58453629999997},
		title:'Fuerte de San Cristóbal'
	};

	var markerF = new google.maps.Marker(markerSettingsF);

	var contentString = `El Fuerte San Cristóbal, se encuentra en la ciudad de Gracias departamento de Lempira, 
	construido sobre una pequeña cima sobre la ciudad, que antiguamente era el centro del poblado de Gracias a 
	Dios que una vez fue capital de la Nueva España y sede de la Real Audiencia de los Confines en 1544; 
	Gracias fue una ciudad estratégica dentro de la Provincia de Honduras en la era colonial, luego en la
	época pro independencia y seguidamente en la transición federal centroamericana.`; 


	var infowindowF = new google.maps.InfoWindow({
			content: contentString
		});

	markerF.addListener('click',function(){
		infowindowF.open(map,markerF);
	});

	// Luna Jaguar Spa Resort

		markerSettingsL = {
		map: map,
		position: {lat:14.840128,lng:-89.15486240000001},
		title:'Luna Jaguar Spa Resort'
	};

	var markerL = new google.maps.Marker(markerSettingsL);

	var contentString = `LUNA JAGUAR SPA RESORT, es un eco spa con arquitectura de evocación maya basado en 
	satisfacer sus sentidos a través de una experiencia única dedicada al bienestar físico, corporal y mental 
	en medio de un ambiente selvático (reserva protegida) con nacientes de agua fría y agua caliente.`; 


	var infowindowL = new google.maps.InfoWindow({
			content: contentString
		});

	markerL.addListener('click',function(){
		infowindowL.open(map,markerL);
	});


	// Parque de aves montaña macaw

		markerSettingsPA = {
		map: map,
		position: {lat:14.855374,lng:-89.15826579999998},
		title:'Parque de aves montaña macaw'
	};

	var markerPA = new google.maps.Marker(markerSettingsPA);


	var contentString = `Parque de aves montaña Macaw es un proyecto eco turístico multifacético en 10 
	acres de bosque en un valle atravesadas por un arroyo, a tan solo seis minutos en carro desde el 
	parque central de Copan Ruinas`; 


	var infowindowPA = new google.maps.InfoWindow({
			content: contentString
		});

	markerPA.addListener('click',function(){
		infowindowPA.open(map,markerPA);
	});


// Parque nacional Celaque

	markerSettingsPC = {
		map: map,
		position: {lat:14.5920016,lng:-88.8050828},
		title:'Parque nacional Celaque'
	};

	var markerPC = new google.maps.Marker(markerSettingsPC);


	var contentString = `El parque nacional Montaña de Celaque (a partir del año 2015 se le llama Biosfera 
	Celaque) es un sitio natural protegido, situado en la república de Honduras, formado por montañas, mesetas, 
	bosque nuboso y en donde se localiza el punto más alto del país Centroaméricano.`; 


	var infowindowPC = new google.maps.InfoWindow({
			content: contentString
		});

	markerPC.addListener('click',function(){
		infowindowPC.open(map,markerPC);
	});


	// Copan Ruinas

		markerSettingsCR = {
		map: map,
		position: {lat:14.8497254,lng:-89.14678320000002},
		title:'Copán Ruinas'
	};

	var markerCR = new google.maps.Marker(markerSettingsCR);


	var contentString = `Copán es un sitio arqueológico de la antigua civilización maya ubicado en el 
	departamento de Copán al occidente de Honduras, a poca distancia de la frontera con Guatemala. Del 
	siglo v al siglo ix fue la capital de un importante reino del periodo Clásico. La ciudad estaba situada
	 en el extremo sureste de la región cultural Mesoaméricana, en la frontera con la región cultural 
	 istmo-colombiana, en una zona habitada por pueblos que no pertenecían a la etnia maya.En la a ctualidad 
	 este valle fértil contiene un centro urbano de alrededor de 3000 habitantes, un pequeño 
	 aeropuerto y una carretera sinuosa.2`; 


	var infowindowCR = new google.maps.InfoWindow({
			content: contentString
		});

	markerCR.addListener('click',function(){
		infowindowCR.open(map,markerCR);
	});

	var panoSettings = {

		position: {lat:14.8497254,lng:-89.1467832},
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);
}