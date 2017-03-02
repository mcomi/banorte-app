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

$('.inputfile').each(function () {
	var $input = $(this),
	    $label = $input.next('label'),
	    labelVal = $label.html();

	$input.on('change', function (e) {
		var fileName = '';

		if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else if (e.target.value) fileName = e.target.value.split('\\').pop();

		if (fileName) $label.find('span').html(fileName);else $label.html(labelVal);
	});

	// Firefox bug fix
	$input.on('focus', function () {
		$input.addClass('has-focus');
	}).on('blur', function () {
		$input.removeClass('has-focus');
	});
});
//# sourceMappingURL=form-domicilio.js.map
