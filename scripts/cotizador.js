/* COTIZADOR */
let mount;
let plazos;
const mountInput = document.getElementById('mountInput');
const selectPlazo = document.getElementById('selectPlazo');
const monthlyPayment = document.getElementById('monthlyPayment');
const btnSubmitPreautorizado = document.getElementById('btnSubmitPreautorizado');
const terminosCondiciones = document.getElementById('terminosCondiciones');

fetch('./preautorizado.json').then(r => r.json())
  .then(data => {
      mount = data.prestamoPreautorizado.monto;
      plazos = data.prestamoPreautorizado.plazos;
      mountInput.value = parseFloat(mount.toString().replace(/,/g, ''))
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    })
  .catch(e => console.log(e));



function formatCurrency (){
    //number-format the user input
    this.value = parseFloat(this.value.replace(/,/g, ''))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function checkMount () {
  let mountChanged = parseFloat(this.value.replace(/,/g, ''));
  if(mountChanged  > mount){
    this.classList.remove('valid');
    this.classList.add('invalid');
  }else{
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
}

function calculateMonthlyPayment () {
  var pago = mount / Number(this.value);
  monthlyPayment.value = pago.toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}

function checkFormStatus () {
  if(this.checked) {
    if(monthlyPayment.value!='')  btnSubmitPreautorizado.classList.remove('disabled');
  }
}

mountInput.addEventListener('change', formatCurrency);
mountInput.addEventListener('change', checkMount);
monthlyPayment.addEventListener('change', formatCurrency);
selectPlazo.addEventListener('change', calculateMonthlyPayment);
terminosCondiciones.addEventListener('change', checkFormStatus)
