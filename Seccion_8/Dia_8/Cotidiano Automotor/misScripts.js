let automovil = {
    marca: "Ford",
    modelo: "4x4",
    anio: 2013,
};
let automovil1 = {
    marca: "Mbamessi",
    modelo: "Descapotable",
    anio: 2025,
};
let automovil2 = {
    marca: "Toyota",
    modelo: "Fiesta",
    anio: 2003,
};   
let carro = document.getElementById(automovil);
let carro1 = document.getElementById(automovil1);
let carro2 = document.getElementById(automovil2);

function verRegistros(){
    myArray = [carro, carro1, carro2];
    let Lista = document.getElementById("lista");
    let elementosLi = Lista.getElementsByTagName("li");

    let primerElemento = elementosLi[0];

    primerElemento.textContent = myArray;

    let nuevoElemento = document.createElement("li");
    Lista.appendChild(nuevoElemento);
}