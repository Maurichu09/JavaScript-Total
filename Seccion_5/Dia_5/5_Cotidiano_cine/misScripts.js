function drama(){
    let elementoEdad = document.getElementById("usuarioEdad");

    let elementoRespuesta = document.getElementById("respuesta");
    let edad = parseInt(elementoEdad.value);

        if (edad < 13){
            elementoRespuesta.textContent = "Casablanca"
        } else 
        if (edad >= 13 && edad < 15) {
            elementoRespuesta.textContent = "The Shawshank Redemption"
        } else
        if (edad > 16){
            elementoRespuesta.textContent = "Taxi Driver"
        }
}

function comedia(){
    let elementoEdad = document.getElementById("usuarioEdad");

    let elementoRespuesta = document.getElementById("respuesta");
    let edad = parseInt(elementoEdad.value);

        if (edad < 13){
            elementoRespuesta.textContent = "Back to the Future"
        } else 
        if (edad >= 13 && edad < 15) {
            elementoRespuesta.textContent = "The Truman Show"
        } else
        if (edad > 16){
            elementoRespuesta.textContent = "The Wolf of Wall Street"
        }
}

function musical(){
    let elementoEdad = document.getElementById("usuarioEdad");

    let elementoRespuesta = document.getElementById("respuesta");
    let edad = parseInt(elementoEdad.value);

        if (edad < 13){
            elementoRespuesta.textContent = "La La Land"
        } else 
        if (edad >= 13 && edad < 15) {
            elementoRespuesta.textContent = "Les Misérables"
        } else
        if (edad > 16){
            elementoRespuesta.textContent = "The Rocky Horror Picture Show"
        }
}

function crimen(){
    let elementoEdad = document.getElementById("usuarioEdad");

    let elementoRespuesta = document.getElementById("respuesta");
    let edad = parseInt(elementoEdad.value);

        if (edad < 13){
            elementoRespuesta.textContent = "No hay opciones"
        } else 
        if (edad >= 13 && edad < 15) {
            elementoRespuesta.textContent = "El Secreto de sus Ojos"
        } else
        if (edad > 16){
            elementoRespuesta.textContent = "The Godfather"
        }
}