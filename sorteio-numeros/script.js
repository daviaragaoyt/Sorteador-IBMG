// sorteio_numeros/script.js (ESPECÍFICO PARA NÚMEROS)

document.addEventListener('DOMContentLoaded', () => {
    const minNumeroInput = document.getElementById('minNumeroInput');
    const maxNumeroInput = document.getElementById('maxNumeroInput');
    const sortearNumeroBtn = document.getElementById('sortearNumeroBtn');
    const numeroSorteadoDisplay = document.getElementById('numeroSorteado');

    if (sortearNumeroBtn && minNumeroInput && maxNumeroInput && numeroSorteadoDisplay) {
        sortearNumeroBtn.addEventListener('click', () => {
            const minNumero = parseInt(minNumeroInput.value);
            const maxNumero = parseInt(maxNumeroInput.value);

            if (isNaN(minNumero) || isNaN(maxNumero) || minNumero < 1 || maxNumero < 1) {
                numeroSorteadoDisplay.textContent = 'Insira números válidos.';
                return;
            }

            if (minNumero >= maxNumero) {
                numeroSorteadoDisplay.textContent = 'O número mínimo deve ser menor que o máximo.';
                return;
            }

            const numeroSorteado = Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;

            numeroSorteadoDisplay.textContent = numeroSorteado;
        });
    }
});