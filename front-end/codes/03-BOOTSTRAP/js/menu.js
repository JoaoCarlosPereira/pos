$(document).ready(function() {
    /* --------------------------- *
     * Mostra o menu no smartphone *
     * --------------------------- */
    $("#botao-menu").click(function() {
        $("#menu-smartphone").addClass("aberto");
    });
    $("#fechar-menu").click(function() {
        $("#menu-smartphone").removeClass("aberto");
    });
});