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

// Llamar la función
fetchData(`${API_URL}/products`, function (error1, data1) {
	if (error1) return console.log(error1);
	
	// Hacer una 2da petición al primer producto
	fetchData(`${API_URL}/products/${data1[0].id}`, function (error2, data2) {
		if (error2) return console.log(error2);
		
		// Hacer una 3ra petición para traer una categoría
		fetchData(`${API_URL}/categories/${data2?.category?.id}`, function (error3, data3) {
			if (error3) return console.log(error3);

			console.log('request1', `${API_URL}/products`, data1[0]);
			console.log('-'.repeat(100));
			console.log('request2', `${API_URL}/products${data1[0].id}`, data2.title);
			console.log('-'.repeat(100));
			console.log('request3', `${API_URL}/categories/${data2?.category?.id}`, data3.name);

		});
	});
})

// Output ---------------------------------------------------------------
/*
request1 https://api.escuelajs.co/api/v1/products {
  id: 19,
  title: 'Recycled Bronze Computer',
  price: 608,
  description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  images: [
    'https://picsum.photos/640/640?r=5493',
    'https://picsum.photos/640/640?r=9055',
    'https://picsum.photos/640/640?r=9382'
  ],
  creationAt: '2023-07-09T04:24:17.000Z',
  updatedAt: '2023-07-09T04:24:17.000Z',
  category: {
    id: 3,
    name: 'Furniture',
    image: 'https://picsum.photos/640/640?r=1327',
    creationAt: '2023-07-09T04:24:17.000Z',
    updatedAt: '2023-07-09T04:24:17.000Z'
  }
}
----------------------------------------------------------------------------------------------------
request2 https://api.escuelajs.co/api/v1/products19 Recycled Bronze Computer
----------------------------------------------------------------------------------------------------
request3 https://api.escuelajs.co/api/v1/categories/3 Furniture
*/