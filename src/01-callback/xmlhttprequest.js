const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API_URL = 'https://api.escuelajs.co/api/v1';

// Esta forma se utilizaba a los inicios de JS, tiene 
// soporte en los navegadores actuales. Fetch es más moderna.
function fetchData(url, callback) {
	let xhttp = new XMLHttpRequest();

	// Abrir una conexión a la API
	xhttp.open('GET', url, true);
	
	// onreadystatechange = Para escuchar los estados de la petición
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				// ESTADOS
				// 0 No se ha inicializado
				// 1 Loading, todavía no se ejecuta
				// 2 Ya se ejecuto .send
				// 3 Interactuando, descargando la solicitud
				// 4 Completado
				callback(null, JSON.parse(xhttp.responseText)); // Enviar Respuesta
			} else {
				const error = new Error(`Error ${url}`);
				return callback(error, null);
			}
		}
	}

	xhttp.send(); // Ejecutar
}
