function calcularLitros() {
    var elementokm = document.getElementById("textokm");
    var textokm = elementokm.ariaValueMax;
    var cantkm = Number(textokm);

    var cantLitros = Math.ceil(cantkm / 8.8);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga" + cantLitros + "litros de combustible";
}