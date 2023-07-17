// npm i node-fetch
// https://www.npmjs.com/package/node-fetch
import fetch from 'node-fetch';
const API_URL = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
	return fetch(url);
}

// fetchData(`${API_URL}/products`)
// .then(response => response.json())
// .then(products => {
// 	console.log(products);
// })
// .then(() => {
// 	console.log('ojo');
// })
// .catch(error => console.log('error -> ', error));

// 1ra petición
fetchData(`${API_URL}/products`)
	.then(response => response.json())
	.then(products => {
		console.log('request1', products[0]);
		console.log('-'.repeat(100));
		
		// 2da petición
		return fetchData(`${API_URL}/products/${products[0].id}`)
	})
	.then(response => response.json())
	.then(product => {
		console.log('request2', product.title);
		console.log('-'.repeat(100));
		
		// 3ra petición
		return fetchData(`${API_URL}/categories/${product.category.id}`)
	})
	.then(response => response.json())
	.then(category => {
		console.log('request3', category.name);
		console.log('-'.repeat(100));
	})
	.catch(error => console.log(error))
	.finally(() => console.log('End'));

// Output ---------------------------------------------------------------
/*
request1 {
  id: 2,
  title: 'Table',
  price: 342,
  description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  images: [ 'table.jpeg' ],
  creationAt: '2023-07-16T06:10:35.000Z',
  updatedAt: '2023-07-16T23:23:15.000Z',
  category: {
    id: 3,
    name: 'Furniture',
    image: 'https://picsum.photos/640/640?r=2068',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  }
}
----------------------------------------------------------------------------------------------------
request2 Table
----------------------------------------------------------------------------------------------------
request3 Furniture
----------------------------------------------------------------------------------------------------
End
*/