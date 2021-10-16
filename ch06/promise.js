const divideLater = (x, y) => {
    const divisionPromise = new Promise((resolve, reject) => {
        if (y == 0) {
            reject("divide by 0");
        }
        resolve(x / y);
    });
    return divisionPromise;
};

for ([a, b] of [[10, 3], [7, 2], [5, 0]].values()) {
    divideLater(a, b).then(result => {
        console.log(result);
    }, err = (cause) => {
        console.log(cause);
    });
}
