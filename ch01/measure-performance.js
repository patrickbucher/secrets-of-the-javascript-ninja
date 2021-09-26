const fib = x => {
    if (x < 0) {
        throw "fib(x) undefined for x < 0";
    }
    if (x == 0 || x == 1) {
        return 1;
    } else {
        return fib(x - 1) + fib(x - 2);
    }
};

const fib_cache = new Map();
const fib_mem = x => {
    if (x < 0) {
        throw "fib(x) undefined for x < 0";
    }
    if (fib_cache.has(x)) {
        return fib_cache.get(x);
    } else {
        let result = 0;
        if (x == 0 || x == 1) {
            result = 1;
        } else {
            result = fib_mem(x - 1) + fib_mem(x - 2);
        }
        fib_cache.set(x, result);
        return result;
    }
}

const performFibBenchmark = (func, size, name) => {
    console.time(name);
    for (let i = 0; i < size; i++) {
        console.log(`fib(${i})=${func(i)}`);
    }
    console.timeEnd(name);
};

const benchmarkSize = 40;
performFibBenchmark(fib, benchmarkSize, "calculating Fibonacci numbers (recursively)");
performFibBenchmark(fib_mem, benchmarkSize, "calculating Fibonacci numbers (memoized)");
