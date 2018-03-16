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
		
		position: {lat:16.31074,lng:-86.592271},
		pov:{
			heading:0,
			pitch:0
		}     //point of view
	};

	panorama = new google.maps.StreetViewPanorama(document.getElementById('pan'),panoSettings);
	map.setStreetView(panorama);

	
	// zona sur-------------------------------------------------------------------------------------------

	// jicaral

	var markerSettingsJ={
		map:map,
		position: {lat:13.2921187,lng:-87.1779386 },
		title: 'El jicaral'
	};

	var markerJ=new google.maps.Marker(markerSettingsJ)

	var infowindowJ = new google.maps.InfoWindow({
        content: `Choluteca,Honduras.`
    });

  
    markerJ.addListener('click', function() {
        infowindowJ.open(map, markerJ);
    });
	
	// Villa colonial

	var markerSettingsV={
		map:map,
		position: {lat:13.3076185,lng:-87.1862625 },
		title: 'Villa colonial'
	};

	var markerV=new google.maps.Marker(markerSettingsV)

	var infowindowV = new google.maps.InfoWindow({
        content: `Choluteca,Honduras.`
    });

  
    markerV.addListener('click', function() {
        infowindowJ.open(map, markerV);
    });


    // Posada San Lázaro

	var markerSettingsS={
		map:map,
		position: {lat:13.3706326,lng:-86.8637607 },
		title: 'Posada San Lázaro'
	};

	var markerS=new google.maps.Marker(markerSettingsS)

	var infowindowS = new google.maps.InfoWindow({
        content: `San Francisco,Choluteca,Honduras.`
    });

  
    markerS.addListener('click', function() {
        infowindowS.open(map, markerS);
    });


    // Los Manglares

	var markerSettingsM={
		map:map,
		position: {lat:13.413337,lng:-87.44359729999996 },
		title: 'Los Manglares'
	};

	var markerM=new google.maps.Marker(markerSettingsM)

	var infowindowM = new google.maps.InfoWindow({
        content: `San Lorenzo,Honduras.`
    });

  
    markerM.addListener('click', function() {
        infowindowM.open(map, markerM);
    });


       // Hotel Villa Concha-Mar

	var markerSettingsC={
		map:map,
		position: {lat:13.4173679,lng:-87.44807930000002 },
		title: 'Hotel Villa Concha-Mar'
	};

	var markerC=new google.maps.Marker(markerSettingsC)

	var infowindowC = new google.maps.InfoWindow({
        content: `San Lorenzo,Honduras.`
    });

  
    markerC.addListener('click', function() {
        infowindowC.open(map, markerC);
    });



    // Zona Central-----------------------------------------------------------------------------------------


    // LQ Hotel Tegucigalpa

	var markerSettingsLQ={
		map:map,
		position: {lat:14.0759244,lng:-87.1993966 },
		title: 'LQ Hotel Tegucigalpa'
	};

	var markerLQ=new google.maps.Marker(markerSettingsLQ)

	var infowindowLQ = new google.maps.InfoWindow({
        content: `Tegucigalpa,Honduras.`
    });

  
    markerLQ.addListener('click', function() {
        infowindowLQ.open(map, markerLQ);
    });


    // Hyatt Place Tegucigalpa

	var markerSettingsHP={
		map:map,
		position: {lat:14.102259,lng:-87.18702389999999 },
		title: 'Hyatt Place Tegucigalpa'
	};

	var markerHP=new google.maps.Marker(markerSettingsHP)

	var infowindowHP = new google.maps.InfoWindow({
        content: `Tegucigalpa,Honduras.`
    });

  
    markerHP.addListener('click', function() {
        infowindowHP.open(map, markerHP);
    });


    // Holiday Inn Express Tegucigalpa

	var markerSettingsHI={
		map:map,
		position: {lat:14.0867308,lng:-87.18789459999999 },
		title: 'Holiday Inn Express Tegucigalpa'
	};

	var markerHI=new google.maps.Marker(markerSettingsHI)

	var infowindowHI = new google.maps.InfoWindow({
        content: `Tegucigalpa,Honduras.`
    });

  
    markerHI.addListener('click', function() {
        infowindowHI.open(map, markerHI);
    });



    // Hotel Comayagua Inn

	var markerSettingsCI={
		map:map,
		position: {lat:14.460197,lng:-87.64295849999996 },
		title: 'Hotel Comayagua Inn'
	};

	var markerCI=new google.maps.Marker(markerSettingsCI)

	var infowindowCI = new google.maps.InfoWindow({
        content: `Comayagua,Honduras.`
    });

  
    markerCI.addListener('click', function() {
        infowindowCI.open(map, markerCI);
    });


    // Hotel Antigua Comayagua

	var markerSettingsAC={
		map:map,
		position: {lat:14.4610489,lng:-87.64246579999997 },
		title: 'Hotel Antigua Comayagua'
	};

	var markerAC=new google.maps.Marker(markerSettingsAC)

	var infowindowAC = new google.maps.InfoWindow({
        content: `Comayagua,Honduras.`
    });

  
    markerAC.addListener('click', function() {
        infowindowAC.open(map, markerAC);
    });




    // zona Norte--------------------------------------------------------------------------------------


	// Hotel La Quinta

	var markerSettingsHLQ={
		map:map,
		position: {lat:15.7728996,lng:-86.78630659999999 },
		title: 'Hotel La Quinta'
	};

	var markerHLQ=new google.maps.Marker(markerSettingsHLQ)

	var infowindowHLQ = new google.maps.InfoWindow({
        content: `La Ceiba,Honduras.`
    });

  
    markerHLQ.addListener('click', function() {
        infowindowHLQ.open(map, markerHLQ);
    });    


   // Apart Hotel Pico Bonito

	var markerSettingsAH={
		map:map,
		position: {lat:15.7492785,lng:-86.84456080000001 },
		title: 'Apart Hotel Pico Bonito'
	};

	var markerAH=new google.maps.Marker(markerSettingsAH)

	var infowindowAH = new google.maps.InfoWindow({
        content: `La Ceiba,Honduras.`
    });

  
    markerAH.addListener('click', function() {
        infowindowAH.open(map, markerAH);
    });    
 

    // Gran Hotel Sula

	var markerSettingsGH={
		map:map,
		position: {lat:15.5059697,lng:-88.0250734 },
		title: 'Gran Hotel Sula'
	};

	var markerGH=new google.maps.Marker(markerSettingsGH)

	var infowindowGH = new google.maps.InfoWindow({
        content: `San Pedro Sula,Honduras.`
    });

  
    markerGH.addListener('click', function() {
        infowindowGH.open(map, markerGH);
    });    



    // Metrotel Express

	var markerSettingsMH={
		map:map,
		position: {lat:15.4903822,lng:-87.98287690000001 },
		title: 'Metrotel Express'
	};

	var markerMH=new google.maps.Marker(markerSettingsMH)

	var infowindowMH = new google.maps.InfoWindow({
        content: `San Pedro Sula,Honduras.`
    });

  
    markerMH.addListener('click', function() {
        infowindowMH.open(map, markerMH);
    });



     // Hilton Princess

	var markerSettingsHPR={
		map:map,
		position: {lat:15.4990365,lng:-88.03798990000001 },
		title: 'Hilton Princess'
	};

	var markerHPR=new google.maps.Marker(markerSettingsHPR)

	var infowindowHPR = new google.maps.InfoWindow({
        content: `San Pedro Sula,Honduras.`
    });

  
    markerMH.addListener('click', function() {
        infowindowHPR.open(map, markerHPR);
    });


    // zona Occidental--------------------------------------------------------------------------------------

    //La Posada de Belssy

	var markerSettingsPSB={
		map:map,
		position: {lat:14.8397936,lng:-89.15582890000002 },
		title: 'La Posada de Belssy'
	};

	var markerPSB=new google.maps.Marker(markerSettingsPSB)

	var infowindowPSB = new google.maps.InfoWindow({
        content: `Ruinas de Copán,Honduras.`
    });

  
    markerPSB.addListener('click', function() {
        infowindowPSB.open(map, markerPSB);
    });


    //Hotel Marbella

	var markerSettingsPSM={
		map:map,
		position: {lat:14.8397235,lng:-89.15667259999998 },
		title: 'Hotel Marbella'
	};

	var markerPSM=new google.maps.Marker(markerSettingsPSM)

	var infowindowPSM = new google.maps.InfoWindow({
        content: `Ruinas de Copán,Honduras.`
    });

  
    markerPSM.addListener('click', function() {
        infowindowPSM.open(map, markerPSM);
    });


     //Hotel caxa real

	var markerSettingsCR={
		map:map,
		position: {lat:14.586277,lng:-88.585916 },
		title: 'Hotel caxa real'
	};

	var markerCR=new google.maps.Marker(markerSettingsCR)

	var infowindowCR= new google.maps.InfoWindow({
        content: `Gracias,Honduras.`
    });

  
    markerCR.addListener('click', function() {
        infowindowCR.open(map, markerCR);
    });


    //Hotel San Sebastian

	var markerSettingsSS={
		map:map,
		position: {lat:14.5879114,lng:-88.58323459999997 },
		title: 'Hotel San Sebastian'
	};

	var markerSS=new google.maps.Marker(markerSettingsSS)

	var infowindowSS= new google.maps.InfoWindow({
        content: `Gracias,Honduras.`
    });

  
    markerSS.addListener('click', function() {
        infowindowSS.open(map, markerSS);
    });


    //Hotel Villa Verde

	var markerSettingsVV={
		map:map,
		position: {lat:14.5740307,lng:-88.61473560000002 },
		title: 'Hotel Villa Verde'
	};

	var markerVV=new google.maps.Marker(markerSettingsVV)

	var infowindowVV= new google.maps.InfoWindow({
        content: `Gracias,Honduras.`
    });

  
    markerVV.addListener('click', function() {
        infowindowVV.open(map, markerVV);
    });



// zona oriental--------------------------------------------------------------------------------------

    //Hotel Biosfera de la Mosquitia

	var markerSettingsBSM={
		map:map,
		position: {lat:15.265714311275598,lng:-83.77065282630252 },
		title: 'Hotel Biosfera de la Mosquitia'
	};

	var markerBSM=new google.maps.Marker(markerSettingsBSM)

	var infowindowBSM = new google.maps.InfoWindow({
        content: `Gracias a Dios,Honduras.`
    });

  
    markerBSM.addListener('click', function() {
        infowindowBSM.open(map, markerBSM);
    });


//Yu Baiwan Hotel

	var markerSettingsYU={
		map:map,
		position: {lat:15.266945,lng:-83.77084300000001 },
		title: 'Hotel Yu Baiwan Hotel'
	};

	var markerYU=new google.maps.Marker(markerSettingsYU)

	var infowindowYU = new google.maps.InfoWindow({
        content: `Gracias a Dios,Honduras.`
    });

  
    markerYU.addListener('click', function() {
        infowindowYU.open(map, markerYU);
    });


    //Hotel La posada de Sandra

	var markerSettingsPS={
		map:map,
		position: {lat:14.5522852,lng:-86.66979879999997 },
		title: 'Hotel La posada de Sandra'
	};

	var markerPS=new google.maps.Marker(markerSettingsPS)

	var infowindowPS = new google.maps.InfoWindow({
        content: `Juticalpa,Honduras.`
    });

  
    markerPS.addListener('click', function() {
        infowindowPS.open(map, markerPS);
    });

     //Hotel Posada del centro

	var markerSettingsPSC={
		map:map,
		position: {lat:14.6572108,lng:-86.21076719999996 },
		title: 'Hotel Posada del centro'
	};

	var markerPSC=new google.maps.Marker(markerSettingsPSC)

	var infowindowPSC = new google.maps.InfoWindow({
        content: `Juticalpa,Honduras.`
    });

  
    markerPSC.addListener('click', function() {
        infowindowPSC.open(map, markerPSC);
    });


     //Hostal vista del mar

	var markerSettingsVM={
		map:map,
		position: {lat:15.912934,lng:-85.95044000000001 },
		title: 'Hostal Vista Del Mar'
	};

	var markerVM=new google.maps.Marker(markerSettingsVM)

	var infowindowVM = new google.maps.InfoWindow({
        content: `Trujillo,Honduras.`
    });

  
    markerVM.addListener('click', function() {
        infowindowVM.open(map, markerVM);
    });

















}