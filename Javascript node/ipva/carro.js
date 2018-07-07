var Carro = function (AMarca, AModelo, APreco, AAno, AUtilitario) {
    var Get = function () {
        return {
                Marca: AMarca, 
                Modelo: AModelo, 
                Preco: APreco, 
                Ano: AAno, 
                Utilitario: AUtilitario, 
                ValorIpva: 0 
            }
    }
    return Get();
}

module.exports = {
    generator: Carro
}

