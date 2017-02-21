'use strict';

/* COTIZADOR */
var mount = void 0;
var plazos = void 0;
var mountInput = document.getElementById('mountInput');
//const selectPlazo = document.getElementById('selectPlazo');
var monthlyPayment = document.getElementById('monthlyPayment');
var btnSubmitPreautorizado = document.getElementById('btnSubmitPreautorizado');
var terminosCondiciones = document.getElementById('terminosCondiciones');

(function () {
  $.getJSON('./preautorizado.json', {
    format: 'json'
  }).done(function (data) {
    mount = data.prestamoPreautorizado.monto;
    console.log(mount);
    plazos = data.prestamoPreautorizado.plazos;
    mountInput.value = parseFloat(mount.toString().replace(/,/g, '')).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  });
})();

// fetch('./preautorizado.json').then(r => r.json())
//   .then(data => {
//       mount = data.prestamoPreautorizado.monto;
//       plazos = data.prestamoPreautorizado.plazos;
//       mountInput.value = parseFloat(mount.toString().replace(/,/g, ''))
//                       .toFixed(2)
//                       .toString()
//                       .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     })
//   .catch(e => console.log(e));


function formatCurrency() {
  //number-format the user input
  this.value = parseFloat(this.value.replace(/,/g, '')).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function checkMount() {
  var mountChanged = parseFloat(this.value.replace(/,/g, ''));
  if (mountChanged > mount) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
}

function calculateMonthlyPayment(plazo) {
  var pago = mount / Number(plazo);
  monthlyPayment.value = pago.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  terminosCondiciones.removeAttribute('disabled');
}

function checkFormStatus() {
  if (this.checked) {
    if (monthlyPayment.value != '') {
      btnSubmitPreautorizado.classList.remove('disabled');
      btnSubmitPreautorizado.classList.add('active');
    }
  }
}

function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents: function initEvents() {
    var obj = this;

    obj.dd.on('click', function (event) {
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click', function () {
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      var plazo = obj.val.replace(/\D+/g, '');
      calculateMonthlyPayment(plazo);
      obj.placeholder.text('' + obj.val);
    });
  },
  getValue: function getValue() {
    return this.val;
  },
  getIndex: function getIndex() {
    return this.index;
  }
};

$(function () {

  var dd = new DropDown($('#dd'));

  $(document).click(function () {
    // all dropdowns
    $('.wrapper-dropdown-1').removeClass('active');
  });
});

mountInput.addEventListener('change', formatCurrency);
mountInput.addEventListener('change', checkMount);
monthlyPayment.addEventListener('change', formatCurrency);
//selectPlazo.addEventListener('change', calculateMonthlyPayment);
terminosCondiciones.addEventListener('change', checkFormStatus);
//# sourceMappingURL=cotizador.js.map
