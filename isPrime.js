function isPrime(number){
	for (var i = 2; i < number; i++){
		if (number % i === 0){
			console.log(number + " is a not a prime number");
			return false;
		}
	}
	console.log(number + " is a prime number");
	return true;
}
