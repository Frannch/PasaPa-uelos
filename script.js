// Datos de los modelos
const modelos = [
    {
        id: 1,
        nombre: "Dragón",
        imagenes: [
            "Cortar/Renders/render_dragon/dragon_vista_180.png",
            "Cortar/Renders/render_dragon/dragon_vista_270.png",
            "Cortar/Renders/render_dragon/dragon_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
       {
        id: 2,
        nombre: "Caballo",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (17) Horse bueno/Swanky Jarv (17)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (17) Horse bueno/Swanky Jarv (17)_vista_0.png",
            "Cortar/Renders/render_Swanky Jarv (17) Horse bueno/Swanky Jarv (17)_vista_90.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    
    
    {
        id: 3,
        nombre: "Coyote",
        imagenes: [
            "Cortar/Renders/render_coyote/coyote_vista_180.png",
            "Cortar/Renders/render_coyote/coyote_vista_270.png",
            "Cortar/Renders/render_coyote/coyote_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    {
        id: 4,
        nombre: "Pájaro Carpintero",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (5) Carpintero/Swanky Jarv (5)_vista_180.png",
            "Cortar/Renders/render_Swanky Jarv (5) Carpintero/Swanky Jarv (5)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (5) Carpintero/Swanky Jarv (5)_vista_90.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
      {
        id: 5,
        nombre: "Grulla",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (10) Grulla DBZ/Swanky Jarv (10)_vista_180.png",
            "Cortar/Renders/render_Swanky Jarv (10) Grulla DBZ/Swanky Jarv (10)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (10) Grulla DBZ/Swanky Jarv (10)_vista_90.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    
    {
        id: 6,
        nombre: "Panda Rojo",
        imagenes: [
            "Cortar/Renders/render_PandaRojo/PandaRojo_vista_180.png",
            "Cortar/Renders/render_PandaRojo/PandaRojo_vista_270.png",
            "Cortar/Renders/render_PandaRojo/PandaRojo_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    {

        
        id: 7,
        nombre: "Tirica",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (2) Tirica/Swanky Jarv (2)_vista_180.png",
            "Cortar/Renders/render_Swanky Jarv (2) Tirica/Swanky Jarv (2)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (2) Tirica/Swanky Jarv (2)_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    {
        id: 8,
        nombre: "Lince",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (3) Lince/Swanky Jarv (3)_vista_180.png",
            "Cortar/Renders/render_Swanky Jarv (3) Lince/Swanky Jarv (3)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (3) Lince/Swanky Jarv (3)_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    
       {
        id: 9,
        nombre: "Esqueleto",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (7) Dragon Esqueleto/Swanky Jarv (7)_vista_0.png",
            "Cortar/Renders/render_Swanky Jarv (7) Dragon Esqueleto/Swanky Jarv (7)_vista_90.png",
            "Cortar/Renders/render_Swanky Jarv (7) Dragon Esqueleto/Swanky Jarv (7)_vista_270.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
     {
        id: 10,
        nombre: "Foca",
        imagenes: [
            "Cortar/Renders/render_foca/foca_vista_180.png",
            "Cortar/Renders/render_foca/foca_vista_270.png",
            "Cortar/Renders/render_foca/foca_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
     
       {
        id: 11,
        nombre: "Serval",
        imagenes: [
            "Cortar/Renders/render_Swanky Jarv (12) Serval/Swanky Jarv (12)_vista_270.png",
            "Cortar/Renders/render_Swanky Jarv (12) Serval/Swanky Jarv (12)_vista_0.png",
            "Cortar/Renders/render_Swanky Jarv (12) Serval/Swanky Jarv (12)_vista_90.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    
     
     {
        id: 12,
        nombre: "Chimuelo",
        imagenes: [
            "Cortar/Renders/render_chimuelo/chimuelo_vista_180.png",
            "Cortar/Renders/render_chimuelo/chimuelo_vista_270.png",
            "Cortar/Renders/render_chimuelo/chimuelo_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
    {
        id: 13,
        nombre: "Scouts de Argentina",
        imagenes: [
            "Cortar/Renders/render_canuto/canuto_vista_180.png",
            "Cortar/Renders/render_canuto/canuto_vista_270.png",
            "Cortar/Renders/render_canuto/canuto_vista_0.png"
        ],
        descripcion: "",
        currentIndex: 0
    },
     
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
