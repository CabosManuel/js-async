// Ejemplo 1
function* gen() {
	yield 1;
	yield "dos";
	yield [3];
	yield {cuatro: 4};
}

const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // dos
console.log(g.next().value); // [ 3 ]
console.log(g.next().value); // { cuatro: 4 }

// Ejemplo 2
function* iterate(array) {
	for (const value of array) {
		yield value;
	}
}

const ite = iterate(['manuel', 'alejandro', 'pedro', 'juan']);
console.log(ite.next().value); // manuel
console.log(ite.next().value); // alejandro
console.log(ite.next().value); // pedro
console.log(ite.next().value); // juan
console.log(ite.next().value); // undefined