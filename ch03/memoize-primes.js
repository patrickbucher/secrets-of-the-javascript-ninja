const isPrime = value => {
    if (!isPrime.answers) {
        isPrime.answers = {};
    }
    if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }
    let prime = value !== 1;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
};

console.log(`isPrime(13)? ${isPrime(13)}`);
console.log(`isPrime(13) cached? ${isPrime.answers[13]}`);
console.log(`isPrime(15) cached? ${isPrime.answers[15]}`);
