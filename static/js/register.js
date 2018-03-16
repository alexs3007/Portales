
	var map =null;
	var panorama=null;
    var geocoder=null;
    var nom=null;
    var n=null;
	var dirDisplay=null;
	var dirService=null;

	
   	var errCallback = function(){
		alert("Error! Problemas de conexión con la base de datos!");
	}
	
	var db = openDatabase('dbSnoopinHN', '1.0', 'This is a client side database',2 * 1024 * 1024);

	
	db.transaction( function(transaction) {
		transaction.executeSql("CREATE TABLE IF NOT EXISTS User (" +
			"Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
			"Name TEXT NOT NULL, LastName TEXT NOT NULL, Email TEXT NOT NULL);");
	});

	var guardarUser = function(name,lastName, email, successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("INSERT INTO User (Name, LastName, Email) VALUES (?, ?, ?);"), 
			[name, lastName, email], function(transaction, results){successCallback(results);}, errCallback);
		});
	};
	

	function listadoUser(successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("SELECT * FROM User"),[],
				function(transaction, results){successCallback(results);}, errCallback);
			});
	};

	var val=function(names,emails, successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("SELECT * FROM User where Name=? and Email=?"),[names,emails],
				function(transaction, result){successCallback(result);}, errCallback);
			});
	};
	db.transaction( function(transaction) {
		transaction.executeSql("CREATE TABLE IF NOT EXISTS CiudadesV (" +
			"Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
			"Name TEXT NOT NULL);");
	});
	var guardarCiudadesV = function(name,successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("INSERT INTO CiudadesV (Name) VALUES (?);"), 
			[name], function(transaction, results){successCallback(results);}, errCallback);
		});
	};
	function listadoCiudades(successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("SELECT* FROM CiudadesV  ORDER BY Id DESC LIMIT 5"),[],
				function(transaction, results){successCallback(results);}, errCallback);
			});
	}; 
 
	var CiudadDb=function(names,successCallback){
		db.transaction(function(transaction){
			transaction.executeSql(("SELECT * FROM CiudadesV where Name=?"),[names],
				function(transaction, result){successCallback(result);}, errCallback);
			});
	};

function nuevo(url) 
{ 
	window.location = (url); 
} 
var list = function(results){
		console.dir(results);
}

var i=0;
var actualizarLugares = function(results){
		console.dir(results);
		if (results.rows.length==0){
			alert("No hay Sitios pendientes");
		} else {
			$.each(results.rows, function(rowIndex){
				var row = results.rows.item(rowIndex);
				i++;

				var article = `
				<ul>
					<li><p id="lugares">${row.Name}</p></li>
				</ul>
				`;
				$('#lugares').append( $(article).hide().fadeIn(1500));

			});
		}
	};
listadoCiudades(actualizarLugares);

var validar = function(results){
		if(results.rows.length != 0){
			var url="home.html";
			onClick=nuevo(url);
			alert("WELCOME "+names);
		}else{
		   alert("ERROR");
		}
}
listadoUser(list);


$('#RE').on('click', function(){
	var name=$('#name').val();
	var lastname=$('#lastname').val();
	var email=$('#email').val();

	if(name==''|| lastname==''||email=='')
	{
		alert("INGRESE TODOS LOS CAMPOS");
		return false;
	}else{
		guardarUser(name,lastname, email, function(){
		alert('Welcome '+name+' '+lastname);
		});
	}		
});

$('#IS').on('click', function(){
	names=$('#name').val();
	var emails= $('#email').val();	

	if(names=='' || emails==''){
		alert("INGRESE TODOS LOS CAMPOS");
		return false;
	}else{
		val(names, emails,validar);	
	}
});	

$('#busqueda').on('keypress', function(e){
	var tecla= e.which || e.keyCode;
	

	if(tecla==13){
		
		
		geocoder=new google.maps.Geocoder();
		var texto=$(this).val();
		
		geocoder.geocode({'address':texto}, function(result, status){
				if(status=='OK'){
					
					$('#btnT').fadeIn();
					
					var nombre=result[0].formatted_address;

					map.setCenter(result[0].geometry.location);
					map.setZoom(13);
					var geomarker= new google.maps.Marker({
						map:map,
						position:result[0].geometry.location,
						title:result[0].formatted_address
					});

					document.getElementById('hasta').value=result[0].geometry.location.lat()+","+result[0].geometry.location.lng();
					panorama.setPosition(result[0].geometry.location)
					map.setStreetView(panorama);
					guardarCiudadesV(nombre,function(){});

				}else{

					
				}
			});
	}
});

$('#btnT').on('click',function(){


	$(this).fadeOut();
	$('#TipoMapa').fadeIn();
    $('.CR').fadeIn();
    $('#btnIr').fadeIn();
    $('#desde').fadeIn();
    $('#hasta').fadeIn();
    $('#ca').fadeIn();
	$('#caj').fadeIn();
	$('#c').fadeIn();
	
});
 
 $('#TipoMapa').on('change', function(){
		var mapType=$(this).val();

		map.setMapTypeId(mapType)
	});


// function modos(){
// 	$('.radio').on('change',function(){
// 		 modo=$('.radio').val();
// 	});
// 	return  modo;
// }

$('#btnIr').on('click',function(){

	var desde=$('#desde').val();
	var hasta=$('#hasta').val();
	// var modos=modos();
	var modo=$('.radio').val();
	
	var request = {
			origin: desde,
			destination: hasta,
			travelMode: modo, //WALKING, BICYCLING
			provideRouteAlternatives:true
		};

		dirService = new google.maps.DirectionsService();
		dirDisplay = new google.maps.DirectionsRenderer();

		dirDisplay.setMap(map);
		dirService.route(request,function(result, status){
			if(status== 'OK')
			{	
				dirDisplay.setPanel($('#directions').get(0));
				dirDisplay.setDirections(result);
			}else if(status=='NOT_FOUND'){
				alert('No se pudo determinar la ruta soicitada');
			}
		});
});

function modoviajes(){
	var modoviaje;

	if($('#rdb1').select()==true){
		modoviaje=$('#rdb1').val();
	}else if($('#rdb2').select()==true) {
		modoviaje=$('#rdb2').val();
	}else if($('#rdb3').select()==true) {
		modoviaje=$('#rdb3').val();
	}else{
		modoviaje=$('#rdb4').val();
	}

	return modoviaje;
}