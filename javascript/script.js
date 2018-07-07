function mouseSobre() {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = divResultado.innerHTML + 										"mouse sobre.<br/>";
}
function mouseFora() {
	 var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = divResultado.innerHTML + 										"mouse fora.<br/>";
}


function validaCampo() {
	var valor = document.getElementById("q").value;

	if ((valor == null) || (valor == "")) {
			alert("Preencha o campo de busca");
			return  false;
	}
	return true;
}


function trataEntrada(id) {
	var div = document.getElementById("resultado");
	div.innerHTML = div.innerHTML + id +" ganhou o foco.<br/>";
}

function trataSaida(id) {
	var div = document.getElementById("resultado");
	div.innerHTML = div.innerHTML + id +" perdeu o foco.<br/>";
}


function copiaTexto(idOrigem,idDestino) {
	var txtOrigem = document.getElementById(idOrigem);
  	document.getElementById(idDestino).value = 				txtOrigem.value;
}
