var modal = document.getElementById("modal-map");
var btn = document.getElementById("btn-abrir-map");
var span = document.getElementsByClassName("btn-cerrar-map")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}