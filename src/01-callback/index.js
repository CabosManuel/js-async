// Callback function --------------------
function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 3, sum)); // 5

// setTimeout function --------------------

setTimeout(function () {
	console.log('anonymous'); // anonymous (después de pasar 2seg)
}, 5000);

function greeting(name) {
	console.log(`Hello ${name}`); // Hello Manuel (después de pasar 5seg)
}

setTimeout(greeting, 0, 'Manuel');

/* final output:
5
Hello Manuel
anonymous
*/