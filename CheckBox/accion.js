const labelDesactivado = document.getElementById('labelDesactivado');
const chkDesactivado = document.getElementById('chkDesactivado');


const controla = function (e) {
   // e.preventDefault();
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        //console.log('Fuera')
        if (inputs[i].checked) {
            // console.log('dentro');
            labelDesactivado.textContent = 'Activado';
            chkDesactivado.disabled = false;
            return;
        } else {
            labelDesactivado.textContent = 'Desactivado';
            chkDesactivado.disabled = true;
            
        }
    }
}

document.addEventListener('click', controla);