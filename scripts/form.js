'use strict';

//$('.chips').material_chip();
$('select').material_select();
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});
// $('.chips-initial').material_chip({
//   data: [{
//     tag: 'Comercio',
//   }, {
//     tag: 'Industrial',
//   }, {
//     tag: 'Servicios',
//   }],
// });
var chipsSector = document.querySelectorAll('.sector .chip');
var chipsActividades = document.querySelectorAll('.actividad .chip');
var chipsEmpleados = document.querySelectorAll('.empleados .chip');
var circuloAvance = document.getElementById('circuloAvance');
var inputVentas = document.getElementById('ventas');
var icon = document.getElementById('saveAnimatedIcon');

var lastChipSector = null;
var lastChipActividad = null;
var lastChipEmpleados = null;
var sectorElegido = '';
var actividadElegida = '';
var numEmpleados = '';
var porcentajeActual = 0;

function selectOpcionSector() {
  if (lastChipSector !== null) lastChipSector.classList.remove('active');
  this.classList.add('active');
  lastChipSector = this;
  sectorElegido = this.dataset.sector;
}

function selectOpcionActividad() {
  if (lastChipActividad !== null) lastChipActividad.classList.remove('active');
  this.classList.add('active');
  lastChipActividad = this;
  actividadElegida = this.dataset.actividad;
}

function selectOpcionEmpleados() {
  if (lastChipEmpleados !== null) lastChipEmpleados.classList.remove('active');
  this.classList.add('active');
  lastChipEmpleados = this;
  numEmpleados = this.dataset.empleados;
}

function actualizaPorcentajeAvance(porcentaje) {
  porcentajeActual = circuloAvance.dataset.porcentaje;
  circuloAvance.classList.add('p' + porcentaje);
  circuloAvance.dataset.porcentaje = porcentaje;
  circuloAvance.classList.remove('p' + porcentajeActual);
}

// animacion de guardado automatico
function animateSaveIcon() {
  icon.classList.remove('fa-check');
  icon.classList.add('fa-refresh', 'fa-spin', 'fa-fw');
  setTimeout(function () {
    icon.classList.remove('fa-refresh', 'fa-spin', 'fa-fw');
    icon.classList.add('fa-check', 'faa-vertical', 'animated');
    setTimeout(function () {
      icon.classList.remove('faa-vertical', 'animated');
    }, 2000);
  }, 3000);
  setTimeout(function () {

    if (!timeUp) animateSaveIcon();
  }, 8000);
}

var timeUp = false;
function simularTiempo() {

  animateSaveIcon();
  setTimeout(function () {
    return timeUp = true;
  }, 40000);
}

$('#ventas').maskMoney();

chipsSector.forEach(function (chipSector) {
  return chipSector.addEventListener('click', selectOpcionSector);
});

chipsActividades.forEach(function (chipActividad) {
  return chipActividad.addEventListener('click', selectOpcionActividad);
});

chipsEmpleados.forEach(function (chipNumEmpleados) {
  return chipNumEmpleados.addEventListener('click', selectOpcionEmpleados);
});
//# sourceMappingURL=form.js.map
