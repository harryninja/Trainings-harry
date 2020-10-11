var campo1 = document.getElementById('campo1');
var campo2 = document.getElementById('campo2');
var resultado = document.getElementById('resultado');
var form = document.getElementById('form1');


form.addEventListener('submit', function(event){
  if (!campo1.value || !campo2.value) {
    alert("não tem valores");
  }
  else{
var x = parseFloat(campo1.value);
var y = parseFloat(campo2.value);

var result = x/y;
var percent = result * 100;

resultado.innerText = "Resposta:" + percent + "%";
event.preventDefault();
}
})
