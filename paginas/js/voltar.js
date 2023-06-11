document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const fromCard = urlParams.get('fromlink');
    const backButton = document.createElement('a');
    const voltarText = document.createElement('h4');
    const buttonBackDiv = document.querySelector('.voltar');

    function buttonBack() {
        voltarText.innerText = "Voltar para Index: ";
        backButton.type = 'button';
        backButton.className = "btn btn-success";
        backButton.innerText = 'Voltar';
        backButton.href = "../index.html";

        buttonBackDiv.appendChild(voltarText).appendChild(backButton);
    }

    if (fromCard) {
        buttonBack();
    }
});