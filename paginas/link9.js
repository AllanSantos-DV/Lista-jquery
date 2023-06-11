$(document).ready(function () {
    function verificarCampos() {
        var campo1 = $("#campo1").val();
        var campo2 = $("#campo2").val();
        if (campo1 !== "" && campo2 !== "") {
            $("#bot1").removeClass("disabled");
        } else {
            $("#bot1").addClass("disabled");
        }
    }

    $("#operadores button").click(function () {
        var operacao = $(this).text();
        $("#operador").text(operacao);
    });

    $("form").submit(function (event) {
        event.preventDefault();

        var valor1 = parseFloat($("#campo1").val());
        var valor2 = parseFloat($("#campo2").val());
        var operacao = $("#operador").text();
        var resultado;

        switch (operacao) {
            case "Adição":
                resultado = valor1 + valor2;
                break;
            case "Subtração":
                resultado = valor1 - valor2;
                break;
            case "Divisão":
                if (valor1 == 0 || valor2 == 0) {
                    alert("Error, Nao se pode realizar divisao com o numero 0");
                    return;
                }
                resultado = valor1 / valor2;
                break;
            case "Multiplicação":
                resultado = valor1 * valor2;
                break;
            default:
                break;
        }

        $("#total").text('Olá! O resultado da '+operacao+' é '+resultado+' parabéns.');
        alert("Resultado da operação: " + resultado);
        
    });

    $("#campo1, #campo2").on("input", verificarCampos);
});
