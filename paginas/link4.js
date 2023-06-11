$(document).ready(function () {
    $("#lista_teste").hover(function () {
        $(this).addClass("fundo");
    }, function () {
        $(this).removeClass("fundo");
    });

    $("#lista_teste2").hover(function () {
        $(this).addClass("fundo");
    }, function () {
        $(this).removeClass("fundo");
    });

    $("#Allan").hover(function () {
        $(this).text("Allan esta aqui");
    }, function () {
        $(this).text("Allan não esta mais aqui");
    });
});