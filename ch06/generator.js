function* PoliticianGenerator(action) {
    yield "Berset " + action;
    return "Parmelin " + action;
}

const politicianIterator = PoliticianGenerator("lies");
console.log(politicianIterator.next());
console.log(politicianIterator.next());
