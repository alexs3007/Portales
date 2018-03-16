var map = null;
var panorama = null;
var lat = 15.7732601;
var lon = -87.46535019999999;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings = {
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom:7
	};

	map = new google.maps.Map(document.getElementById('map'),mapSettings);


	var panoSettings = {
		
		position: {lat:16.31074,lng:-86.592271},
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);

	
	//

	var markerSettings={
		map:map,
		position: {lat:14.8718397,lng:-87.9792142 },
		title: 'Lago de Yojoa, Honduras'
	};

	var marker=new google.maps.Marker(markerSettings)

	var infowindow = new google.maps.InfoWindow({
        content: `El Lago de Yojoa <br />
        El Lago de Yojoa es un lago de Honduras, Centroamérica, tiene una longitud de 16 km
         y un ancho de 6 km, se encuentra localizado entre los departamentos de Comayagua, 
        Cortés y Santa Bárbara. El Lago de Yojoa se encuentra a unos 
        184 kilómetros de Tegucigalpa, la capital de Honduras.`
    });

  
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
	//

	var markerSettings1={
		map:map,
		position: {lat:15.0243254,lng:-88.00095529999999},
		title: 'Cataratas de Pulhapanzak, Honduras'
	};
	
	var marker1=new google.maps.Marker(markerSettings1);

	var infowindow1 = new google.maps.InfoWindow({
        content: `Cataratas de Pulhapanzak <br />
        Situada al Norte del Lago de Yojoa, es considerada una de las más bellas 
        cascadas de Centro América por sus aguas cristalinas y una catarata de 43 m de altura.
        En Pulhapanzak se han descubierto, además, vestigios arqueológicos de lo que podría 
        haber sido el centro de una antigua cultura, anterior a los Mayas.`
    });

  
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
    });
	//

	var markerSettings2={
		map:map,
		position: {lat:15.9721198,lng:-86.47564399999999},
		title: 'Cayos Cochinos, Honduras'
	};
	
	var marker2=new google.maps.Marker(markerSettings2);

	var infowindow2 = new google.maps.InfoWindow({
        content: `Cayos Cochinos <br />
        Las islas son un área marina protegida y son administradas por la Fundación Hondureña
        para los Arrecifes de Coral. El arrecife de coral en este caso es parte del 
        segundo arrecife de coral más grande del mundo, conocido como el Barrera de Coral mesoamericana. 
        Hay una estación de investigación científica en Cayo Menor, la menor de las dos islas principales 
        en el sistema.`
    });

  
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map, marker2);
    });


	//

	var markerSettings5={
		map:map,
		position: {lat:16.3297608,lng:-86.52996730000001},
		title: 'Roatán, Honduras'
	};
	
	var marker5=new google.maps.Marker(markerSettings5);

	var infowindow5 = new google.maps.InfoWindow({
        content: `Roatán <br />
        En general las Islas de la Bahía se refieren al archipiélago comprendido por las islas de Roatán,
        Útila, Guanaja, y numerosos islotes y cayos, que estaban habitadas en principio por los mayas,
        después por los payas, en el siglo XVI llegaron los conquistadores españoles quienes trajeron 
        esclavos africanos como parte de la tripulación.`
    });

  
    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map, marker5);
    });


	//

	var markerSettings6={
		map:map,
		position: {lat:14.9817467,lng:-87.88933829999996},
		title: 'Joya Grande, Honduras'
	};
	
	var marker6=new google.maps.Marker(markerSettings6);

	var infowindow6 = new google.maps.InfoWindow({
        content: `Joya Grande <br />
        Ubicada en Santa Cruz de Yojoa, en el departamento de Cortés, 
        a hora y media de San Pedro Sula, una de las principales ciudades de Honduras.
        El zoológico Joya Grande es un parque que nos propicia una zona para practicar deportes 
        extremos. Como su nombre lo dice es una Joya que se ha convertido en un polo único en el 
        desarrollo turístico de Honduras. `
    });

  
    google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map, marker6);
    });

	
	//

	var markerSettings7={
		map:map,
		position: {lat:	14.9817467,lng:-87.88933829999996},
		title: 'La Ceiba, Honduras'
	};
	
	var marker7=new google.maps.Marker(markerSettings7);

	var infowindow7 = new google.maps.InfoWindow({
        content: `La Ceiba <br />
        Es considerada el centro del corredor biológico Caribe Hondureño siendo un destino
        turístico que tienes que visitar porque te ofrece múltiples actividades turísticas 
        de aventura, naturaleza, experiencias educativas, turismo rural, comunitario y cultural 
        en la que se destaca la cultura garífuna con su riqueza gastronómica, ya sea en la ciudad, 
        en áreas protegidas y/o comunidades.`
    });

  
    google.maps.event.addListener(marker7, 'click', function() {
        infowindow7.open(map, marker7);
    });


	//

	var markerSettings8={
		map:map,
		position: {lat:	15.734328,lng:	-87.45616899999999},
		title: 'Jardín Botánico Lancetilla, Honduras'
	};
	
	var marker8=new google.maps.Marker(markerSettings8);

	var infowindow8 = new google.maps.InfoWindow({
        content: `Jardín Botánico Lancetilla <br />
   		Tiene una extensión de 1681 hectáreas, de las cuales 1261 ha son de una reserva de Naturaleza, 
   		350 son de plantaciones y 70 ha corresponden a un Arboretum. La colección comprende unas 1500 
   		especies enfocadas sobre todo en las plantas tropicales con frutos. El Jardín Botánico depende 
   		como Departamento, de la Escuela nacional de ciencias forestales (ESNACIFOR).`
    });

  
    google.maps.event.addListener(marker8, 'click', function() {
        infowindow8.open(map, marker8);
    });

	//

	var markerSettings9={
		map:map,
		position: {lat:	15.7732601,lng:-87.46535019999999},
		title: 'Tela, Honduras'
	};
	
	var marker9=new google.maps.Marker(markerSettings9);


	var infowindow9 = new google.maps.InfoWindow({
        content: `Tela <br />
   		Tela posee complejos turísticos, con playas de arena blanca natural. 
   		También tiene otros lugares cercanos que se pueden visitar, como Tornabe, 
   		San Juan y Triunfo de la Cruz, que son comunidades garifunas. Además cuenta
   		con el jardín botánico de Lacentilla, que conserva plantas originiales de todas
   		partes del mundo.`
    });

  
    google.maps.event.addListener(marker9, 'click', function() {
        infowindow9.open(map, marker9);
    });

	//

	var markerSettings10={
		map:map,
		position: {lat:	16.4826614,lng:-85.87932519999998},
		title: 'Guanaja, Honduras'
	};
	
	var marker10=new google.maps.Marker(markerSettings10);

	var infowindow10 = new google.maps.InfoWindow({
        content: `Guanaja <br />
   		Guanaja, está localizada aproximadamente a 70 kilómetros al norte de la costa de Honduras, 
   		y a 12 kilómetros de la isla de Roatán. Uno de los cayos de Guanaja también es llamado
   		Guanaja o Bonacca, o simplemente "El Cayo". `
    });

  
    google.maps.event.addListener(marker10, 'click', function() {
        infowindow10.open(map, marker10);
    });

	//

	var markerSettings11={
		map:map,
		position: {lat:	15.84,lng:-87.67899999999997},
		title: 'Parque Nacional Jeanette Kawas, Tela, Honduras'
	};
	
	var marker11=new google.maps.Marker(markerSettings11);

	var infowindow11 = new google.maps.InfoWindow({
        content: `Parque Nacional Jeanette Kawas <br />
   		Es un parque nacional creado el 1 de enero de 1988 en honor a Blanca Jeanette Kawas 
   		y ubicado al oeste de la ciudad de Tela y por la costa caribeña en el norte del
   		departamento de Atlántida, Honduras. Abarca una superficie de 781,62 km² y en su punto
   		más alto tiene una altitud de 900 metros. `
    });

  
    google.maps.event.addListener(marker11, 'click', function() {
        infowindow11.open(map, marker11);
    });

	//

	var markerSettings12={
		map:map,
		position: {lat:	15.8246967,lng:-87.35129130000001},
		title: 'Parque Nacional Punta Izopo, Honduras'
	};
	
	var marker12=new google.maps.Marker(markerSettings12);

	var infowindow12 = new google.maps.InfoWindow({
        content: `Parque Nacional Punta Izopo<br />
   		El Parque nacional Punta Izopo es un área protegida con el estatus de parque nacional 
   		en el país centroamericano de Honduras. Se encuentra localizado en el municipio de Tela,
   		en la costa caribeña del norte del departamento de Atlántida. Tiene una altitud de 118 metros.`
    });

  
    google.maps.event.addListener(marker12, 'click', function() {
        infowindow12.open(map, marker12);
    });


	//

	var markerSettings13={
		map:map,
		position: {lat:14.9712895,lng:-88.02652569999998},
		title: 'Peña Blanca, Honduras'
	};
	
	var marker13=new google.maps.Marker(markerSettings13);

	var infowindow13 = new google.maps.InfoWindow({
        content: `Peña Blanca<br />
   		Peña Blanca es una pequeña ciudad ubicada a 84 Kilómetros de San Pedro Sula, 
   		Capital Industrial de Honduras. Cuenta con un enorme crecimiento poblacional y económico, 
   		destacando su comercio nato y su turismo; al encontrarse cerca del Lago de Yojoa es una
   		ventaja de ubicación geográfica. A pesar de que Santa Cruz de Yojoa, Cabecera Municipal, 
   		está ubicada a solo 15 Kilómetros; la mayor parte de la economía de este municipio se
   		centra en esta ciudad.`
    });

  
    google.maps.event.addListener(marker13, 'click', function() {
        infowindow13.open(map, marker13);
    });


	//


	var markerSettings15={
		map:map,
		position: {lat:15.4964731,lng:-88.21165289999999},
		title: 'Parque Nacional Cusuco, Honduras'
	};
	
	var marker15=new google.maps.Marker(markerSettings15);

	var infowindow15 = new google.maps.InfoWindow({
        content: `Parque Nacional Cusuco<br />
   		El parque se encuentra en la Sierra del Merendón. En su mayoría se constituye
   		de bosque nublado entre los 1500 y 2450 metros sobre el nivel del mar. 
   		La zona tiene una precipitación elevada y una temperatura media de 19 °C. 
   		También se caracteriza por una neblina y llovizna casi constante.`
    });

  
    google.maps.event.addListener(marker15, 'click', function() {
        infowindow15.open(map, marker15);
    });

	//

	var markerSettings16={
		map:map,
		position: {lat:15.618948,lng:-86.8621827},
		title: 'Parque Nacional Pico Bonito, Honduras'
	};
	
	var marker16=new google.maps.Marker(markerSettings16);

	var infowindow16 = new google.maps.InfoWindow({
        content: `Parque Nacional Pico Bonito<br />
   		Pico Bonito es una montaña que se encuentra en el municipio de El Porvenir
   		y cerca de la ciudad costera de La Ceiba en Honduras. 
   		Tiene una altura de 2,435 metros. Desde el 1 de enero de 1987 fue establecido 
   		como un parque natural protegido. Tiene una área de 564.30 kilómetros cuadrados.`
    });

  
    google.maps.event.addListener(marker16, 'click', function() {
        infowindow16.open(map, marker16);
    });
}

