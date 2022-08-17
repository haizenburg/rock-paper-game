//checks if number is Prime
function isPrime(num) {
  if (num < 2) return false;

  for (let k = 2; k < num; k++) {
    if (num % k == 0) {
      return false;
    }
  }
  return true;
}

for (var i = 1; i <= 500; i++) {
  // A)If the number is a prime console.log 'FiZZBUZZ++'
  if (isPrime(i)) {
    console.log("FIZZBUZZ++");
  }

  // B) If the number is divisible by both 3 and 5 console.log 'FIZZBUZZ'
  else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  }

  // C) If the number is divisible by 3 console.log 'FIZZ'
  else if (i % 3 === 0) {
    console.log("FIZZ");
  }

  // D) if the number is divisible by 5 console.log 'BUZZ'
  else if (i % 5 === 0) {
    console.log("BUZZ " + i);
  } else {
    console.log(i);
  }
}
