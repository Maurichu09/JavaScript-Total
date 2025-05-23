class perro{
    constructor(nombre, peso, raza){
        this.nombre = nombre;
        this.peso = peso;
        this.raza = raza;
    }
}
let perrito = new perro("Tuky", "4kg", "chihuahua");

class gato{
    constructor(nombre, peso, sexo){
        this.nombre = nombre;
        this.peso = peso;
        this.sexo = sexo;
    }
}
let gatito = new gato("Frijol", "3kg", "Masculino");

class conejo{
    constructor(nombre, peso, color){
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
    }
}
let conejito = new conejo("Mike", "4kg", "blanco");

let elementoRespuesta = document.getElementById("listaMascotas");
let myArray = [perrito, gatito, conejito]

function verMascotas(){
    let Lista = document.getElementById("listaMascotas");
    let elementosLi = Lista.getElementsByTagName("li");

    let primerElemento = elementosLi[0];

    primerElemento.textContent = myArray;

    let nuevoElemento = document.createElement("li");
    Lista.appendChild(nuevoElemento);
}