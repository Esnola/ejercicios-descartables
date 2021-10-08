const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");
const oculta = document.addEventListener('click', ocultar);
function ocultar() {
  if (sidebar.classList.contains("show-sidebar")) {
    setTimeout(() => {
      sidebar.classList.toggle("show-sidebar");
      
    }, 500);
    console.log('dentro')
  }
}
bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
