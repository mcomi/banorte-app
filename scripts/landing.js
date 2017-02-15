$('.carousel.carousel-slider').carousel({fullWidth: true}); // habilito carousel para la seccion de testimonios

let folios;
fetch('./folios.json').then(r => r.json())
  .then(data => folios = data.folios)
  .catch(e => console.log('error'))

const searchInput = document.getElementById('search');
const btnConfirm = document.getElementById('btnConfirmFolio');

let validFolio = false;

function checkFolio () {

  if(folios.includes(this.value)) {
    validFolio = true;
    searchInput.classList.add('valid')
    searchInput.classList.remove('invalid')
    btnConfirm.classList.remove('disabled') // habilito el boton de confirmar
  }
  else {
    validFolio = false;
    searchInput.classList.add('invalid')
    searchInput.classList.remove('valid')
    btnConfirm.classList.add('disabled')
  }

}

searchInput.addEventListener('change', checkFolio)
searchInput.addEventListener('keyup', checkFolio)
