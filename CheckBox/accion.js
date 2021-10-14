const labelDesactivado = document.getElementById('labelDesactivado');
const chkDesactivado = document.getElementById('chkDesactivado');

document.addEventListener('click', controla = () => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            labelDesactivado.textContent = 'Activado';
            chkDesactivado.disabled = false;
            return;
        } else {
            labelDesactivado.textContent = 'Desactivado';
            chkDesactivado.disabled = true;
            
        }
    }
});
