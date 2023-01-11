// Write your solution here!
let cats = ['Milo','Otis','Garfield'];
function destructivelyAppendCat(name){
    let pushCats = cats.push(name);
    return pushCats;
}

function destructivelyPrependCat(name){
    let unshiftCats = cats.unshift(name);
    return unshiftCats;
}

function destructivelyRemoveLastCat(){
    let removeLastCat = cats.pop()
    return removeLastCat;
}

function destructivelyRemoveFirstCat(){
    let shiftCat = cats.shift()
    return shiftCat;
}