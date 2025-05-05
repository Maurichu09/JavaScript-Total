let elementoExpediente = document.getElementById("expediente");
let elementoNombre = document.getElementById("nombre");
let elementoApellido = document.getElementById("apellido");
let elementoNacimiento = document.getElementById("nacimiento");
let elementoCargo = document.getElementById("cargo");
function agregarEmpleado(BackEnd) {
    myArray = ["Sus datos son " + elementoExpediente + ", " + elementoNombre + ", " + elementoApellido + ", " + elementoNacimiento + "," + elementoCargo];
    
}
function mostrarEmpleados() {
    alert(myArray);
}