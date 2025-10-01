function validarCampo() {
  var valor = document.getElementById('campo').value;
  if (valor === "") {
    alert("Campo vazio!");
  } else {
    alert("Campo válido!");
  }
}