import fetch from "node-fetch";
const API_URL = 'https://api.escuelajs.co/api/v1';

async function asyncFetch(url) {
	const response = fetch(url);
	const data = (await response).json();
	return data;
}

const getProducts = async (url) => {
	try {
		const products = await asyncFetch(`${url}/products`);
		const product = await asyncFetch(`${url}/products/${products[0].id}`);
		const category = await asyncFetch(`${url}/categories/${product.category.id}`);

		console.log('request1', products[0]);
		console.log('-'.repeat(50));
		
		console.log('request2', product.title);
		console.log('-'.repeat(50));
		
		console.log('request3', category.name);
		console.log('-'.repeat(50));

	} catch (error) {
		console.log('err', error);
	}
}

getProducts(API_URL);

// Output
/*
request1 {
  id: 7,
  title: 'Generic Soft Chair',
  price: 819,
  description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  images: [
    'https://picsum.photos/640/640?r=1988',
    'https://picsum.photos/640/640?r=4752',
    'https://picsum.photos/640/640?r=4387'
  ],
  creationAt: '2023-07-18T06:41:52.000Z',
  updatedAt: '2023-07-18T06:41:52.000Z',
  category: {
    id: 4,
    name: 'Shoes',
    image: 'https://picsum.photos/640/640?r=9637',
    creationAt: '2023-07-18T06:41:52.000Z',
    updatedAt: '2023-07-18T06:41:52.000Z'
  }
}
--------------------------------------------------
request2 Generic Soft Chair
--------------------------------------------------
request3 Shoes
--------------------------------------------------
*/