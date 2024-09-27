document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const outputDiv = document.getElementById('output');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    function handleCheckboxChange(event) {
        const clickedCheckbox = event.target;
        if (clickedCheckbox.checked) {
            // Desativa todos os checkboxes, exceto o que foi clicado
            checkboxes.forEach(checkbox => {
                if (checkbox !== clickedCheckbox) {
                    checkbox.checked = false;
                }
            });

            // Atualiza o texto da div de saída com base no checkbox ativo
            outputDiv.innerHTML = clickedCheckbox.nextSibling.textContent.trim();
        } else {
            // Se todos os checkboxes estão desativados, mantenha o checkbox1 ativo e exiba o texto 1
            if (![...checkboxes].some(checkbox => checkbox.checked)) {
                document.getElementById('checkbox1').checked = true;
                outputDiv.innerHTML = 'Texto 1';
            }
        }
    }
});
