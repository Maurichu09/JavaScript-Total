class automovil{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}
let carro = new automovil("Ford", "4x4", 2009)
function verRegistros(){
    let Lista = document.getElementById("lista");
    let elementosLi = Lista.getElementsByTagName("li");

    let primerElemento = elementosLi[0];

    primerElemento.textContent = carro;

    let nuevoElemento = document.createElement("li");
    Lista.appendChild(nuevoElemento);
}