// Promise simple, usando resolve()
const promise = new Promise(function (resolve, reject) {
	resolve('hey!');
});


// Promise con una condicional, usando resolve() y reject()
const cows = 16;
const countCows = new Promise(function (resolve, reject) {
	if (cows >= 10) {
		resolve(`Yes, we have ${cows} cows on the farm.`);
	} else {
		reject('There is no cows on the farm.');
	}
});

// Ejecutar Promise
countCows.then((result) => {
	console.log(result);
}).catch((error) => { // capturar error
	console.log(error);
}).finally(() => console.log('End.')); // ejecutar algo siempre al final