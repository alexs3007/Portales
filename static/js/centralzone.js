var map = null;
var panorama = null;
var lat = 14.0722751;
var lon = -87.192136;


function init(){

	var mapCoords = {lat: lat, lng: lon};

	mapSettings = {
		center: mapCoords,
		mapTypeId:'roadmap',
		zoom:9.8
	};

	map = new google.maps.Map(document.getElementById('map'),mapSettings);


	var panoSettings = {

		position:{lat:14.160407,lng:-87.03994039999998},
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);


	var markerSettings={
		map:map,
		position: {lat:14.0718552,lng:-87.20287730000001},
		title: 'Chiminique, Honduras'
	};

	var marker=new google.maps.Marker(markerSettings)

	var infowindow = new google.maps.InfoWindow({
        content: `Chiminique <br />
        Chiminike cuenta con un espacio dedicado a cada una de las salas de exhibición
        y las diversas actividades que realiza, puedes sintonizarlo los sábados a las 
        8:00 a.m. por Canal 10 Televisión Educativa Nacional.`
    });

  
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

	//

	var markerSettings1={
		map:map,
		position: {lat:14.2455981,lng:-87.1223362},
		title: 'Parque Nacional La Tigra, Honduras'
	};
	
	var marker1=new google.maps.Marker(markerSettings1);

	var infowindow1 = new google.maps.InfoWindow({
        content: `Parque Nacional La Tigra, Honduras <br />
        El Parque nacional La Tigra1​ fue el primer parque nacional en Honduras.
        Su principal objetivo es "la conservación, preservación ecológica y el 
        mantenimiento del potencial hidrológico de esta reserva".`
    });

  
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
    });

	//

	var markerSettings2={
		map:map,
		position: {lat:14.1051318,lng:-87.20224919999998},
		title: 'Museo del Hombre Hondureño, Honduras'
	};
	
	var marker2=new google.maps.Marker(markerSettings2);

	var infowindow2 = new google.maps.InfoWindow({
        content: `Museo del Hombre Hondureño<br />
        La Fundación para el Museo del Hombre Hondureño (FMHH) es un organismo 
        legalmente reconocido por el gobierno hondureño, que a lo largo de sus
        21 años de vida como ente cultural, ha definido sus propósitos en aras de
        una búsqueda incesante de la reafirmación de los valores que hacen parte de 
        nuestra identidad nacional y hacia el rescate de la herencia y memoria cultural 
        de Honduras. `
    });

  
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map, marker2);
    });

    //

	var markerSettings3={
		map:map,
		position: {lat:14.160407,lng:-87.03994039999998},
		title: 'Valle de Ángeles, Honduras'
	};
	
	var marker3=new google.maps.Marker(markerSettings3);

	var infowindow3 = new google.maps.InfoWindow({
        content: `Valle de Ángeles<br />
        La región formó parte de la historia minera de Honduras, con explotaciones
        como la de Las Animas y El Socorro; que dieron oro, plata, cobre, estaño, plomo y zinc.
		A pocos kilómetros se encuentra la reserva forestalParque Nacional La Tigra,
		un bosque nuboso de una rica biodiversidad que abastece de agua dulce al 40% 
		de los habitantes de la capital hondureña.`
    });

  
    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map, marker3);
    });

    //

	var markerSettings4={
		map:map,
		position: {lat:14.10643,lng:-87.20827789999998},
		title: 'Galería Nacional de Arte, Honduras'
	};
	
	var marker4=new google.maps.Marker(markerSettings4);

	var infowindow4 = new google.maps.InfoWindow({
        content: `Galería Nacional de Arte<br />
        La Galería Nacional de Arte de Honduras es un museo en el que se almace, 
        preservan y muestran diferentes creaciones artistícas realizadas en el
        territorio de la actual Honduras, donde se muestran obras de arte rupestre,
        escultura y cerámica precolombina, escultura contemporánea.`
    });

  
    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map, marker4);
    });

    //

	var markerSettings5={
		map:map,
		position: {lat:14.10643,lng:-87.20827789999998},
		title: 'Parque nacional Cerro Azul Meámbar, Honduras'
	};
	
	var marker5=new google.maps.Marker(markerSettings5);

	var infowindow5 = new google.maps.InfoWindow({
        content: `Parque nacional Cerro Azul Meámbar<br />
        El parque nacional se fundó en 1987 y es de difícil acceso. 
        Su superficie es de 49,42 km2 en su núcleo y de 478,37 km2 adicionales 
        en su zona de amortiguación. El punto más alto del mismo es el "Pico del Cerro", 
        a 2.047 m de altitud. El recinto forma parte de la cuenca del embalse de la
        Central Hidroeléctrica Francisco Morazán. Cabe destacar la vegetación
        de bosque nublado, que tapiza gran parte del parque y es de especial 
        valor paisajístico.`
    });

  
    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map, marker5);
    });

    //

	var markerSettings6={
		map:map,
		position: {lat:14.1186665,lng:-87.19787880000001},
		title: 'El Cristo del Picacho, Honduras'
	};
	
	var marker6=new google.maps.Marker(markerSettings6);

	var infowindow6 = new google.maps.InfoWindow({
        content: `El Cristo del Picacho<br />
        El Cristo de "El Picacho" es un monumento que se impone en el cerro
        El Picacho en el extremo norte de Tegucigalpa, M.D.C. capital de
        Honduras a una altura de 1,327 metros sobre el nivel del mar.`
    });

  
    google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map, marker6);
    });
}