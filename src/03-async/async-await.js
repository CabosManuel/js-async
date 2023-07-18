const resolveAfter2Seconds = () => {
	return new Promise(resolve => {
		setTimeout(() => resolve('done!'), 2000);
	});
}

const asyncCall = async () => {
	const something = await resolveAfter2Seconds();
	console.log(something);
	console.log('hi!');
}

console.log('start');
asyncCall();
console.log('end');

// Output
/*
start
end
Async!!
hi!
*/