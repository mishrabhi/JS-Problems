// Problem:
// Print numbers 1 to 20.

// Print "Fizz" for multiples of 3

// Print "Buzz" for multiples of 5

// Print "FizzBuzz" for multiples of both

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
