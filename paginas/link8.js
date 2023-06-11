$(document).ready(function() {
    $("#bot1").click(function () {
        var mensagem = ($("#campo1").val() !== $("#campo2").val()) ? 'Valores Diferentes' : 'Valores Iguais';
        alert(mensagem);
    });
});