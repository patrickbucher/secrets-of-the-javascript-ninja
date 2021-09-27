const addAndMultiply = x => y => z => x + y * z;
let xSet = addAndMultiply(2);
let xAndYSet = xSet(3);
let result = xAndYSet(4);
console.log(result);
