// Datos de los modelos
const modelos = [
    {
        id: 1,
        nombre: "Pasapañuelo Zorro",
        imagenes: [
            "https://via.placeholder.com/400x300",
            "https://via.placeholder.com/400x300/0077cc/ffffff",
            "https://via.placeholder.com/400x300/ffcc00/000000",
            "https://via.placeholder.com/400x300/22aa66/ffffff"
        ],
        descripcion: "Diseño geométrico de zorro con varias vistas del modelo.",
        currentIndex: 0
    },
    {
        id: 2,
        nombre: "Lobo Aullando",
        imagenes: [
            "https://via.placeholder.com/400x300",
            "https://via.placeholder.com/400x300/333333/ffffff"
        ],
        descripcion: "Silueta clásica de lobo con diferentes ángulos de presentación.",
        currentIndex: 0
    },
    {
        id: 3,
        nombre: "Flor de Lis Standard",
        imagenes: [
            "https://via.placeholder.com/400x300",
            "https://via.placeholder.com/400x300/cc0000/ffffff",
            "https://via.placeholder.com/400x300/004488/ffffff"
        ],
        descripcion: "Un modelo robusto con varias imágenes de detalle.",
        currentIndex: 0
    }
];

// Función para generar el HTML de una tarjeta
function crearTarjeta(modelo) {
    const imagenes = modelo.imagenes || [];
    const imagenActual = imagenes[modelo.currentIndex] || imagenes[0] || '';

    return `
        <article class="card" data-model-id="${modelo.id}">
            <div class="card-image-wrapper">
                <button class="carousel-btn carousel-prev" aria-label="Anterior">‹</button>
                <img class="carousel-image" src="${imagenActual}" alt="${modelo.nombre}">
                <button class="carousel-btn carousel-next" aria-label="Siguiente">›</button>
            </div>
            <div class="card-content">
                <h2 class="card-title">${modelo.nombre}</h2>
                <p class="card-description">${modelo.descripcion}</p>
            </div>
        </article>
    `;
}

// Función para renderizar todas las tarjetas
function renderizarModelos() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = modelos.map(modelo => crearTarjeta(modelo)).join('');
}

// Actualizar la imagen mostrada en un card específico
function actualizarImagen(card, modelo) {
    const imageElement = card.querySelector('.carousel-image');
    if (imageElement && modelo.imagenes && modelo.imagenes.length > 0) {
        const index = modelo.currentIndex;
        imageElement.src = modelo.imagenes[index];
    }
}

// Cambiar imagen anterior/siguiente
function cambiarImagen(modeloId, direccion) {
    const modelo = modelos.find(m => m.id === modeloId);
    if (!modelo || !modelo.imagenes || modelo.imagenes.length === 0) return;

    const total = modelo.imagenes.length;
    modelo.currentIndex = (modelo.currentIndex + direccion + total) % total;

    const card = document.querySelector(`article.card[data-model-id="${modeloId}"]`);
    if (card) {
        actualizarImagen(card, modelo);
    }
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todas las tarjetas
    renderizarModelos();

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('carousel-prev') || target.classList.contains('carousel-next')) {
            const card = target.closest('article.card');
            if (!card) return;

            const modeloId = Number(card.dataset.modelId);
            const direccion = target.classList.contains('carousel-prev') ? -1 : 1;
            cambiarImagen(modeloId, direccion);
        }
    });
});
