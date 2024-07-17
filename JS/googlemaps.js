//Rutas Lugares
//#region
/*Crear ruta en Google Maps*/
//Crear variables para latitud y longitud de destino
//Ruta 1
var latitud_d1 = document.getElementById('latd1').value;
var longitud_d1 = document.getElementById('longd1').value;

function trazarRuta1() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d1 + "," + longitud_d1;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 2
var latitud_d2 = document.getElementById('latd2').value;
var longitud_d2 = document.getElementById('longd2').value;

function trazarRuta2() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d2 + "," + longitud_d2;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 3
var latitud_d3 = document.getElementById('latd3').value;
var longitud_d3 = document.getElementById('longd3').value;

function trazarRuta3() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d3 + "," + longitud_d3;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 4
var latitud_d4 = document.getElementById('latd4').value;
var longitud_d4 = document.getElementById('longd4').value;

function trazarRuta4() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d4 + "," + longitud_d4;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 5
var latitud_d5 = document.getElementById('latd5').value;
var longitud_d5 = document.getElementById('longd5').value;

function trazarRuta5() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d5 + "," + longitud_d5;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 6
var latitud_d6 = document.getElementById('latd6').value;
var longitud_d6 = document.getElementById('longd6').value;

function trazarRuta6() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d6 + "," + longitud_d6;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 7
var latitud_d7 = document.getElementById('latd7').value;
var longitud_d7 = document.getElementById('longd7').value;

function trazarRuta7() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d7 + "," + longitud_d7;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 8
var latitud_d8 = document.getElementById('latd8').value;
var longitud_d8 = document.getElementById('longd8').value;

function trazarRuta8() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d8 + "," + longitud_d8;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 9
var latitud_d9 = document.getElementById('latd9').value;
var longitud_d9 = document.getElementById('longd9').value;

function trazarRuta9() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + latitud_d9 + "," + longitud_d9;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}
//#endregion


//Rutas Atractivos
//#region 
/*Crear ruta en Google Maps*/
//Crear variables para latitud y longitud de destino
//Ruta 1
var lat_dest1 = document.getElementById('lat1').value;
var long_dest1 = document.getElementById('long1').value;

function verRuta1() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest1 + "," + long_dest1;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 2
var lat_dest2 = document.getElementById('lat2').value;
var long_dest2 = document.getElementById('long2').value;

function verRuta2() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest2 + "," + long_dest2;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 3
var lat_dest3 = document.getElementById('lat3').value;
var long_dest3 = document.getElementById('long3').value;

function verRuta3() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest3 + "," + long_dest3;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 4
var lat_dest4 = document.getElementById('lat4').value;
var long_dest4 = document.getElementById('long4').value;

function verRuta4() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest4 + "," + long_dest4;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 5
var lat_dest5 = document.getElementById('lat5').value;
var long_dest5 = document.getElementById('long5').value;

function verRuta5() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest5 + "," + long_dest5;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}

//Ruta 6
var lat_dest6 = document.getElementById('lat6').value;
var long_dest6 = document.getElementById('long6').value;

function verRuta6() {
    // Obtener la ubicación actual del usuario (requiere permisos del navegador)
    navigator.geolocation.getCurrentPosition(function(position) {
        // Obtener las coordenadas de la ubicación actual
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // URL de la dirección de Google Maps con la ubicación actual y el destino
        var url = "https://www.google.com/maps/dir/" + lat + "," + lng + "/" + lat_dest6 + "," + long_dest6;
        
        // Abrir la URL en la misma ventana o pestaña
        window.location.href = url;
        // Abrir la URL en una nueva ventana o pestaña
        /* window.open(url, "_blank"); */
    });
}
//#endregion