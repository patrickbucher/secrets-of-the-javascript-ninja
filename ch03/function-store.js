var store = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
        return false;
    }
};

function ninja() {}
var added = store.add(ninja);
var addedAgain = store.add(ninja);
console.log(`added once? ${added}, added twice? ${addedAgain}`);
