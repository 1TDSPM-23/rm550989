console.log("ola mundo")

var nr1 = 10;
var nr2 = 5;

console.log(nr1);
console.log(nr2);


console.log("Resultado " + (nr1+nr2));
console.log("Resultado " + (parseInt(nr1) + parseInt(nr2)))
console.log(`Resultado Adiçao:  ${parseInt(nr1) + parseInt(nr2)}`);


console.log(`Resultado Subtraçao:  ${parseInt(nr1) - parseInt(nr2)}`);

console.log(`Resultado Multiplicaçao: ${parseInt(nr1) * parseInt(nr1)}`);

console.log(`Resultado Subtraçao:  ${parseInt(nr1) - parseInt(nr2)}`)


var nr1 = "10";
var nr2 = "5";
var resultado;

resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
console.log(`O NUMERO É : ${resultado}`);

//var nome1 = "Arnaldo";
//let nome2 = "Jailtom";

var nome = "Juscileu";

if(nome != ""){
    var nome = "Robson";
}


let frutas =["banana", "maça", "caju", "limao", "laranja"]
console.log(frutas);
console.table(frutas);
console.log(frutas[3]);

frutas.push("mamao");
console.log(frutas);

frutas.unshift("caqui");
console.log(frutas);

let indice =  frutas.indexOf("caju");
frutas.splice(indice,1);
console.log(frutas);

frutas.forEach( ()=>{} );