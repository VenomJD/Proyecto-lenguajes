const API_KEY = '7vBz8Y8CZAYvwNPpMZLtcGBqjVpv4Pus';

var myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
const btn = document.getElementById("btn");
const infoContainer = document.getElementById('info');


btn.addEventListener("click", (e) => {
  e.preventDefault()
  let CANTIDAD = document.getElementById('number').value;
  let MONEDA = document.getElementById('txt').value;
  TraerDatos(CANTIDAD, MONEDA);
  
});
 
  



function TraerDatos(CANTIDAD,MONEDA) {
  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${MONEDA}&from=USD&amount=${CANTIDAD}`, requestOptions)
  .then(response => response.json())
  .then(result => MostrarInfo(result))
  
}
function MostrarInfo(data) {
const title = document.createElement('h5');
title.textContent = "EL RESULTADO ES";
const txt = document.createElement('h1');
txt.textContent = `${data.result}  ${data.query.to}`;
const div = document.createElement('div');
div.appendChild(title)
div.appendChild(txt);
infoContainer.appendChild(div);

}

