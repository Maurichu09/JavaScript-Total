function registrarNotas() {
    let nota = prompt("Dime un numero del 1 al 100");
    if (nota > 70) {
        alert("Aproximacion se enceñaran los aprovados");
    } else(nota < 70) {
        alert("Estos son los reprobado")
    }
}
fetch('Estudiantes.Json')