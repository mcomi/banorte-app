'use strict';

var mount = void 0;
/* FORMA */
function formatCurrency() {
  //number-format the user input
  mount = this.value;
  this.value = parseFloat(this.value.replace(/,/g, '')).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function checkMount() {
  if (mount.length > 6) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
}

function calculaPagoMensual() {
  var pago = mount / Number(this.value);
  monthlyPayment.value = pago;
}

var mountInput = document.getElementById('mountInput');
var selectPlazo = document.getElementById('selectPlazo');
var monthlyPayment = document.getElementById('monthlyPayment');
console.log(mountInput);
mountInput.addEventListener('change', formatCurrency);
mountInput.addEventListener('change', checkMount);
monthlyPayment.addEventListener('change', formatCurrency);
selectPlazo.addEventListener('change', calculaPagoMensual);
//# sourceMappingURL=main.js.map
