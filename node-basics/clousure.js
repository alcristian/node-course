//createradder basenumber

function createAdder(baseNum){
    return function add(addNum){
       return baseNum + addNum;
    }
}
var teste = createAdder(10);
console.log(teste(2));
