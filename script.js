//Atividades feita em aula

let arrayString = ["céu", "nuvem", "estrelas"]

let arrayNumber = [3, 4, 5]

let arrayMix = ["café", 6, true]

let arrayUnico = [2]

let arrayEmpty = []

let copiaString = arrayString.slice()

copiaString.push("chuva")

copiaString.splice(2,2)

console.log("Cópia", copiaString)
console.log("Original", arrayString) //use o método slice()
console.log("length", arrayString.length)
copiaString.splice(2,2)
console.log("Cópia pós splice", copiaString)

console.log("Tem ceú na String Original?", arrayString.includes("céu"))
console.log("com copia", arrayString)
console.log(`buscando indice 3 na Array Original ${arrayString[3]}`)
console.log(`Array Mix: ${arrayMix}`)
console.log(`Elementos no array único e o seu tamanho: ${arrayUnico[0]} e ${arrayUnico.length}`)



let onlyNumbers = [2, 3, 5, 7, 11, 13];
let primes = onlyNumbers.slice();
primes.pop(); //removendo ultimo elemento
primes.push(6); //inseri o numero 6 no final do array
primes.splice(2,1)
console.log(`only numbers ficou assim: ${onlyNumbers}`)
console.log(`primes ficou assim: ${primes}`)
