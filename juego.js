const desechos = document.querySelectorAll('.desecho');
const canecas = document.querySelectorAll('.caneca');

desechos.forEach(desecho => {
    desecho.addEventListener('dragstart', dragStart);
});

canecas.forEach(caneca => {
    caneca.addEventListener('dragover', dragOver);
    caneca.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const desecho = document.getElementById(id);
    const canecaId = e.target.id;

    if (
        
        (id === 'bateria' && canecaId === 'papelera-rojo') ||
        (id === 'medicamento' && canecaId === 'papelera-rojo') ||
        (id === 'quimico' && canecaId === 'papelera-rojo') ||
        (id === 'termometro' && canecaId === 'papelera-rojo') ||
        (id === 'aerosol' && canecaId === 'papelera-rojo') ||

        
        (id === 'libro' && canecaId === 'papelera-gris') ||
        (id === 'revista' && canecaId === 'papelera-gris') ||
        (id === 'caja-carton' && canecaId === 'papelera-gris') ||
        (id === 'bolsa-papel' && canecaId === 'papelera-gris') ||
        (id === 'periodico' && canecaId === 'papelera-gris') ||

        
        (id === 'botella-plastico' && canecaId === 'papelera-azul') ||
        (id === 'bolsa-plastico' && canecaId === 'papelera-azul') ||
        (id === 'juguete-plastico' && canecaId === 'papelera-azul') ||
        (id === 'envase-plastico' && canecaId === 'papelera-azul') ||
        (id === 'cucharilla-plastico' && canecaId === 'papelera-azul') ||

        
        (id === 'cascaras' && canecaId === 'papelera-verde') ||
        (id === 'restos-comida' && canecaId === 'papelera-verde') ||
        (id === 'pañuelos' && canecaId === 'papelera-verde') ||
        (id === 'papel-sucio' && canecaId === 'papelera-verde') ||
        (id === 'ceramica-rota' && canecaId === 'papelera-verde')
    ) {
        e.target.appendChild(desecho);
        alert('¡Correcto!');
    } else {
        alert('¡Incorrecto! Intenta de nuevo.');
    }
}
