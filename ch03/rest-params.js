const sum = (first = 0, ...rest) => {
    let acc = first;
    rest.forEach(x => acc += x);
    return acc;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum());
