$(document).ready(function () {
    $("#botao2").addClass("disabled");
    $("#botao1").click(function () {
        $("p").hide("fast");
        $("#botao1").addClass("disabled");
        $("#botao2").removeClass("disabled");
    });
    $("#botao2").click(function () {
        $("p").show("slow");
        $("#botao2").addClass("disabled");
        $("#botao1").removeClass("disabled");
    });
});