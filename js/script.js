function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}


function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
function comprar() {
   
    window.open("pago.html", "_blank"); 
}


let totalItems = 0;
let totalPrecio = 0;
let productos = JSON.parse(localStorage.getItem('productos')) || []; 


const contadorItems = document.getElementById('contador-items');
const totalPrecioElem = document.getElementById('total-precio');


const actualizarCarrito = () => {
    totalItems = productos.length; 
    totalPrecio = productos.reduce((sum, producto) => sum + parseFloat(producto.precio), 0); 

    
    if (contadorItems) {
        contadorItems.textContent = totalItems;
    }
    if (totalPrecioElem) {
        totalPrecioElem.textContent = totalPrecio.toLocaleString('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
};

// Función para agregar productos al carrito
const agregarAlCarrito = (precio, nombreProducto) => {
    productos.push({ nombre: nombreProducto, precio: precio }); 

   
    actualizarCarrito();

    // Guardar productos en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));
};

// Asignar evento a los botones de "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.btn-agregar');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const precio = e.target.getAttribute('data-precio');
        const nombreProducto = e.target.getAttribute('data-nombre'); 
        agregarAlCarrito(precio, nombreProducto);
    });
});

// Llamar a actualizarCarrito al cargar la página
window.onload = actualizarCarrito;
function verCarrito() {
    
    window.location.href = 'carrito.html'; 
}