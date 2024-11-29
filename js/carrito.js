

document.addEventListener('DOMContentLoaded', () => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
    const productosDiv = document.getElementById('productos');
    let total = 0;

    
    productosGuardados.forEach(({ nombre, precio }) => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${nombre} - S/. ${parseFloat(precio).toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
        productosDiv.appendChild(productoDiv);
        total += parseFloat(precio);
    });

    
    document.getElementById('totalPrecio').textContent = `S/. ${total.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
    
    
    document.getElementById('btn-finalizar').addEventListener('click', () => {
        // Redirigir al formulario de datos del cliente
        window.location.href = 'pago.html'; 
    });

    
    const btnVaciar = document.createElement('button');
    btnVaciar.textContent = 'Vaciar Carrito';
    btnVaciar.className = 'btn-vaciar'; 
    document.body.appendChild(btnVaciar); 

    btnVaciar.addEventListener('click', () => {
      
        localStorage.removeItem('productos');
        
      

        
        total = 0;
        document.getElementById('totalPrecio').textContent = 'S/. 0.00'; 
    });

    
    const volver = () => {
        window.location.href = 'index.html'; 
    };

    
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', volver);
    }
});