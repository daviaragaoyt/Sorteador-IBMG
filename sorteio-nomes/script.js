// sorteio_nomes/script.js (ESPECÍFICO PARA NOMES)

document.addEventListener('DOMContentLoaded', () => {
    const nomesInput = document.getElementById('nomesInput');
    const sortearNomeBtn = document.getElementById('sortearNomeBtn');
    const nomeSorteadoDisplay = document.getElementById('nomeSorteado');

    if (sortearNomeBtn && nomesInput && nomeSorteadoDisplay) {
        sortearNomeBtn.addEventListener('click', () => {
            const nomesTexto = nomesInput.value;
            const nomesArray = nomesTexto.split('\n').map(nome => nome.trim()).filter(nome => nome !== '');

            if (nomesArray.length > 0) {
                const indiceSorteado = Math.floor(Math.random() * nomesArray.length);
                nomeSorteadoDisplay.textContent = nomesArray[indiceSorteado];
            } else {
                nomeSorteadoDisplay.textContent = 'Por favor, insira nomes para sortear.';
            }
        });
    }
});