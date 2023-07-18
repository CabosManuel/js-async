import fetch from "node-fetch";

const API_URL = 'https://api.escuelajs.co/api/v1';

async function asyncFetch(url) {
	const response = await fetch(url);
	return response.json();
}

async function* fetchProducts(url) {
	const products = await asyncFetch(`${url}/products`);
	yield products[0];

	const product = await asyncFetch(`${url}/products/${products[0].id}`);
	yield product.title;

	const category = await asyncFetch(`${url}/categories/${product.category.id}`);
	yield category.name;
}

async function printResult() {
	const p = fetchProducts(API_URL);

	try {
		console.log(await p.next());
		console.log(await p.next());
		console.log(await p.next());
	} catch (error) {
		console.error(error);
	}
}

printResult();