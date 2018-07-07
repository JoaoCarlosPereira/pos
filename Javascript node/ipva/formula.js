var Formula = function (ACarro) {
    var carro = ACarro;

    var Get = function () {
        if (((new Date()).getFullYear() - carro.Ano) > 20) {
            carro.ValorIpva = "Isento"
        } else if (carro.Utilitario) {
            carro.ValorIpva = ((carro.Preco / 100) * 1);
        } else {
            carro.ValorIpva = ((carro.Preco / 100) * 2);
        }
        return carro;
    }

    return Get();
}

module.exports = {
    generator: Formula
}

