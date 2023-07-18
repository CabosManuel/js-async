import fetch from 'node-fetch';
const API_URL = 'https://api.escuelajs.co/api/v1';

// POST ---------------------------------------------------
function postProduct(url, data) {
	const response = fetch(url, {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	
	return response;
}

const newProduct = {
	"title": "New Product async",
	"price": 10,
	"description": "A description",
	"categoryId": 1,
	"images": ["https://placeimg.com/640/480/any"]
}

// postProduct(`${API_URL}/products/`, newProduct)
// 	.then(response => response.json()) // 1ro pasarlo a JSON
// 	.then(data => console.log(data)) // 2do imprimir
// 	.catch(error => console.error(error));

// Output
/*
{
  title: 'New Product async',
  price: 10,
  description: 'A description',
  images: [ 'https://placeimg.com/640/480/any' ],
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://picsum.photos/640/640?r=1097',
    creationAt: '2023-07-18T06:41:52.000Z',
    updatedAt: '2023-07-18T06:41:52.000Z'
  },
  id: 210,
  creationAt: '2023-07-18T13:47:16.000Z',
  updatedAt: '2023-07-18T13:47:16.000Z'
}
*/

// PUT ----------------------------------------------------
function putProduct(url, data) {
	const response = fetch(url, {
		method: 'PUT',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	
	return response;
}

const id = 209;
const updatedProduct = {
	"title": 'lul',
	"price": 1
};

// putProduct(`${API_URL}/products/${id}`, updatedProduct)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('err', error));

// Output
/*
{
	id: 209,
  title: 'lul',
  price: 1,
  description: 'A description',
  images: [ 'https://placeimg.com/640/480/any' ],
  creationAt: '2023-07-18T13:42:29.000Z',
  updatedAt: '2023-07-18T14:28:51.000Z',
  category: {
		id: 1,
    name: 'Clothes',
    image: 'https://picsum.photos/640/640?r=1097',
    creationAt: '2023-07-18T06:41:52.000Z',
    updatedAt: '2023-07-18T06:41:52.000Z'
  }
}
*/

// DELETE -------------------------------------------------
function deleteProduct(url, data) {
	const response = fetch(url, {
		method: 'DELETE',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	return response;
}

deleteProduct(`${API_URL}/products/210`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('err', error));
// true