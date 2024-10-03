function fizzBuzzParesHasta500() {
    for (let i = 2; i <= 500; i += 2) {
        let output = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        
        console.log(output || i);
    }
}

// Ejecutar la función
fizzBuzzParesHasta500();