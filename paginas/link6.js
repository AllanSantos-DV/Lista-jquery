let texto = "";
$(document).on("click", "#nomes button", function() {
    $("#lista_teste li").text("Apareça: ")
    texto = $(this).html();
    $("#lista_teste li").each(function () {
        $(this).html($(this).html() + texto);
    });
});