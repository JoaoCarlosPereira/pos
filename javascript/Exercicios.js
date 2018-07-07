// EXERCICIO 1

var Numero = prompt("Informe um número qualquer!");

if(Numero > 10) {
	alert("É maior que 10");
} else if(Numero < 10) {
  alert("É menor que 10")
} else {
 alert("É igual a 10")
}

// EXERCICIO 2

var Numero1 = prompt("Informe um número qualquer!");
var Numero2 = prompt("Informe outro número qualquer!");

alert(parseInt(Numero1, 10) + parseInt(Numero2, 10));

// EXERCICIO 3
var Numero1 = prompt("Informe um número qualquer!");
var Numero2 = prompt("Informe outro número qualquer!");
var Operacao = prompt("Informe a operação!");

switch (Operacao) {

  case ('-'):
    alert(parseInt(Numero1, 10) - parseInt(Numero2, 10));  
    break;

  case ('+'):
    alert(parseInt(Numero1, 10) + parseInt(Numero2, 10));  
    break;

    case ('*'):
    alert(parseInt(Numero1, 10) * parseInt(Numero2, 10));  
    break;

  case ('/'):
    alert(parseInt(Numero1, 10) / parseInt(Numero2, 10));  
    break;    
}

// EXERCICIO 4
var Nome = prompt("Informe um Nome!");
var Valor = prompt("Informe um valor qualquer!");

	for (var i = 0; i < Valor; i++) {
			document.write(Nome + "<br/>");
	}



