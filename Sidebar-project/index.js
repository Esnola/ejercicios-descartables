/* const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar"); */

const atajos = ['Escape', 'm', 'l', 'k']
const tooltipText = document.querySelector('.tiptext');
let miTexto = "";
let coma = '';
for (let i = 0; i < atajos.length; i++){
  coma = (i < atajos.length - 1) ? ', ' : ''
   miTexto += atajos[i] +  coma
}

tooltipText.textContent = 'Atajos de teclado ' + miTexto
document.addEventListener('click', captura_click);

document.addEventListener('keydown', (event) => {
  (atajos.includes(event.key))
    ? modalMenu() : "";
});

function captura_click(e) {
  (e.target.classList.contains('fa-bars') ||
    document.querySelector(".sidebar").classList.contains("show-sidebar"))
    ? modalMenu() : '';
  
}
function modalMenu() {
  document.querySelector(".sidebar").classList.toggle("show-sidebar");
  document.querySelector(".fa-bars").classList.toggle('visible');
}

