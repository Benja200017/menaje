document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tarjeta = document.getElementById("tarjeta").value;
    let expiracion = document.getElementById("expiracion").value;
    let cvv = document.getElementById("cvv").value;

    if (!nombre || !apellido || !tarjeta || !expiracion || !cvv) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    alert("Pago procesado con éxito.");
    
});

function volverAlInicio() {
    window.location.href = 'index.html'; 
}