console.log('\n', 'FizzBuzz')

for (let num = 0; num < 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num, 'FizzBuzz');
    } else if (num % 3 === 0) {
        console.log(num, 'Fizz');
    } else if (num % 5 === 0) {
        console.log(num, 'Buzz');
    } else {
        console.log(num)
    }
}