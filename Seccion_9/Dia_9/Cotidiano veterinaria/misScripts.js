class animalitos {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion() {
        return `Nombre: ${this.nombre}, peso: ${this.peso}, edad: ${this.edad}`;
    }
}

class perro extends animalitos {
    constructor(nombre, peso, raza, edad) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion() {
        return `El nombre es: ${this.nombre}, peso: ${this.peso}, la raza es: ${this.raza} y su edad es ${this.edad}`;
    }
}

class gato extends animalitos {
    constructor(nombre, peso, sexo, edad) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion() {
        return `El nombre es: ${this.nombre}, peso: ${this.peso}, el sexo es: ${this.sexo} y su edad es ${this.edad}`;
    }
}

class conejo extends animalitos {
    constructor(nombre, peso, color, edad) {
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion() {
        return `El nombre es: ${this.nombre}, peso: ${this.peso}, el color es: ${this.color} y su edad es ${this.edad}`;
    }
}

let perrito = new perro("Tuky", "4kg", "Chihuahua", "10 anios");
let conejito = new conejo("Bugs", "5kg", "Gris", "2 anios");
let gatito = new gato("Kitty", "4kg", "hembra", "1 mes");
let myArray = [perrito, gatito, conejito];


document.getElementById('showAnimalsBtn').addEventListener('click', verMascotas);

function verMascotas() {
    const animalsContainer = document.getElementById('listaMascotas');
    animalsContainer.innerHTML = '';
    myArray.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.textContent = animal.informacion();
        animalsContainer.appendChild(animalCard);
    });
}
