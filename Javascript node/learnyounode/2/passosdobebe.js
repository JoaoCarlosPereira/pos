var i;
var Resultado = 0;
for (i = 2; i < process.argv.length; i++) {
    Resultado += Number(process.argv[i]);
}

console.log(Resultado);
