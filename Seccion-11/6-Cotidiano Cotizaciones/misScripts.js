function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cargarContenido() {
  cargarCotizaciones(mostrarCotizacion);
  cargarElementos();
  cargarTextos();
}

const urls = [
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  'https://open.er-api.com/v6/latest/EUR',
  'https://open.er-api.com/v6/latest/USD'
];

function cargarCotizaciones(callback) {
  urls.forEach(url => {
    crearPedido(url, (datos) => {
      callback(datos, url);
    });
  });
}

function mostrarCotizacion(datos, url) {
  if(url.includes('coingecko')) {
    if(datos.bitcoin && datos.bitcoin.usd) {
      const precio = datos.bitcoin.usd;
      document.getElementById('BitcoinUsd').innerText = 'Bitcoin: $' + precio.toFixed(2);
    }
  } else if(url.includes('/EUR')) {
    if(datos.rates && datos.rates.USD) {
      const precio = datos.rates.USD;
      document.getElementById('EurUsd').innerText = 'Euro a Dólares: ' + precio.toFixed(4);
    }
  } else if(url.includes('/USD')) {
    if(datos.rates && datos.rates.CRC) {
      const precio = datos.rates.CRC;
      document.getElementById('CrcUsd').innerText = 'Colón a Dólares: ' + precio.toFixed(4);
    }
  }
}

function crearPedido(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const datos = JSON.parse(xhr.responseText);
        callback(datos);
      } catch (e) {
        console.error("Error al parsear JSON de", url);
      }
    } else {
      console.error("Error: status " + xhr.status + " de", url);
    }
  };
  xhr.onerror = function () {
    console.error("Error al acceder a", url);
  };
  xhr.send();
}

function cargarElementos() {
  document.getElementById('titulo').innerText = 'Cotizaciones Online';
}

function cargarTextos() {
  document.getElementById('EurUsd').innerText = 'Euro a Dólares:';
  document.getElementById('CrcUsd').innerText = 'Colón a Dólares:';
  document.getElementById('BitcoinUsd').innerText = 'Bitcoin:';
}

window.onload = async function () {
  await delay(2500);
  cargarContenido();
};
