document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenid@ a mi sitio Web!');
});

function showAlert(message, type = 'success', delay = 5000) {
    // Crear el elemento de alerta
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
    alert.role = 'alert';
    alert.innerHTML = `
        <strong>${message}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Obtener el contenedor de alertas y agregar la alerta
    const alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(alert);

    // Cerrar la alerta después de un tiempo (opcional)
    setTimeout(() => {
        alert.classList.remove('show');
    }, delay);
}
// Ejemplo de cómo llamar la función para mostrar una alerta
showAlert('¡Bienvenid@ a mi sitio Web!', 'success', 5000); // La alerta dura 5 segundos
