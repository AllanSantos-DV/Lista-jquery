$(document).ready(function() {
    $("#button-addon2").click(function() {
        let nome = $("#nomeInput").val();
        atualizarTexto(nome);
    });

    function atualizarTexto(texto) {
        $("body p").each(function() {
            $(this).html('Nessa tag "p" vai aparecer o nome: ');
            $(this).html($(this).html() + '<span style="color: red;">' + texto + '</span>');
        });
    }
});