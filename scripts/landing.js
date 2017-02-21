'use strict';

$('.carousel.carousel-slider').carousel({ fullWidth: true, padding: 200 }, setTimeout(autoplay, 4500));
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}

var folios = void 0;

(function () {
  $.getJSON('./folios.json', {
    format: 'json'
  }).done(function (data) {
    return folios = data.folios;
  });
})();

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value: function value(obj) {
      var newArr = this.filter(function (el) {
        return el == obj;
      });
      return newArr.length > 0;
    }
  });
}

// fetch('./folios.json').then(r => r.json())
//   .then(data => folios = data.folios)
//   .catch(e => console.log('error'))

var searchInput = document.getElementById('search');
var btnConfirm = document.getElementById('btnConfirmFolio');

var validFolio = false;

function checkFolio() {

  if (folios.includes(this.value)) {
    validFolio = true;
    searchInput.classList.add('valid');
    searchInput.classList.remove('invalid');
    btnConfirm.classList.remove('disabled'); // habilito el boton de confirmar
    btnConfirm.classList.add('active');
  } else {
    validFolio = false;
    searchInput.classList.add('invalid');
    searchInput.classList.remove('valid');
    btnConfirm.classList.add('disabled');
  }
}

searchInput.addEventListener('change', checkFolio);
searchInput.addEventListener('keyup', checkFolio);
//# sourceMappingURL=landing.js.map
