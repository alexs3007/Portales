
	var map =null;
	var panorama=null;
    var geocoder=null;

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
			transaction.executeSql(("SELECT * FROM CiudadesV"),[],
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

var i = 0;

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
				$('#lugares').prepend( $(article).hide().fadeIn(1500));
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
	
var existente= function(results){
	console.dir(results);
	if(results.rows.length==0){
		var texto=$('#busqueda').val();
		guardarCiudadesV(nombre,function(){
		});
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
		var mapNuevo = {
			center: {lat:15.7732601, lng:-87.46535019999999},
			mapTypeId:'roadmap',
			zoom:12
		};

		map =new google.maps.Map(document.getElementById('map'),mapNuevo);
		geocoder=new google.maps.Geocoder();
		var texto=$(this).val();

		
		map.setStreetView(panorama);

		geocoder.geocode({'address':texto}, function(result, status){
				if(status=='OK'){
					var nombre=result[0].formatted_address;

					map.setCenter(result[0].geometry.location);
					var geomarker= new google.maps.Marker({
						map:map,
						position:result[0].geometry.location,
						title:result[0].formatted_address
					});

					panorama.setPosition(result[0].geometry.location)
					map.setStreetView(panorama);
					CiudadDb(nombre,existente);
				}
			});
	}
});


 
