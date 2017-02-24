'use strict';

$('#modalComprobanteDomicilio').modal({ dismissible: false });
$('#modalEnvioSMS').modal({ dismissible: false });
$('select').material_select();

var modalUpload = document.getElementById('contentModalSubeComprobanteYDomicilio');
var comprobanteModal = document.getElementById('comprobante');
var fotoFrenteModal = document.getElementById('fotoFrente');

function renderFotoFrente() {
  comprobanteModal.classList.toggle('hide');
  fotoFrenteModal.classList.toggle('hide');
}

function cerrarModalComprobanteAbreSMS() {
  $('#modalComprobanteDomicilio').modal('close');
  $('#modalEnvioSMS').modal('open');
}
//# sourceMappingURL=form-domicilio.js.map
