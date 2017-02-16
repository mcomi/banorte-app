'use strict';

$('.carousel.carousel-slider').carousel({ fullWidth: true }); // habilito carousel para la seccion de testimonios

var folios = void 0;
fetch('./folios.json').then(function (r) {
  return r.json();
}).then(function (data) {
  return folios = data.folios;
}).catch(function (e) {
  return console.log('error');
});

var searchInput = document.getElementById('search');
var btnConfirm = document.getElementById('btnConfirmFolio');

var validFolio = false;

function checkFolio() {

  if (folios.includes(this.value)) {
    validFolio = true;
    searchInput.classList.add('valid');
    searchInput.classList.remove('invalid');
    btnConfirm.classList.remove('disabled'); // habilito el boton de confirmar
  } else {
    validFolio = false;
    searchInput.classList.add('invalid');
    searchInput.classList.remove('valid');
    btnConfirm.classList.add('disabled');
  }
}

searchInput.addEventListener('change', checkFolio);
searchInput.addEventListener('keyup', checkFolio);
