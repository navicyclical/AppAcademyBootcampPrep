function isPrime(number){
  if(number === 2){
    return true;
  } else if(number < 2){
    return false;
  }
  for(var i=2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
console.log(isPrime(3));

function firstAndPrimes(number){
  var primes = [];
  var i = 0;
  if(number === 0){
    primes.push(0);
    return primes;
  }
  while(primes.length < number){
    if(isPrime(i)){
      primes.push(i);
    }
    i++;
  }
  return primes;
}
console.log(firstAndPrimes(4));

function sumOfNPrimes(number){
  var sumOfPrimes;
  var primes = firstAndPrimes(number);
  for(var i=0; i < primes.length; i++){
    sumOfPrimes += primes(i);
  }
  return sumOfPrimes;
}
