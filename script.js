// Datos de los modelos
const modelos = [
    {
        id: 1,
        nombre: "Pasapañuelo Zorro",
        imagen: "https://via.placeholder.com/400x300",
        descripcion: "",
        categoria: "Animales",
        tags: ["Zorro", "Facetado"]
    },
    {
        id: 2,
        nombre: "Lobo Aullando",
        imagen: "https://via.placeholder.com/400x300",
        descripcion: "",
        categoria: "Animales",
        tags: ["Lobo", "Realista"]
    },
    {
        id: 3,
        nombre: "Flor de Lis Standard",
        imagen: "https://via.placeholder.com/400x300",
        descripcion: "",
        categoria: "Realista",
        tags: ["Tradicional", "Textura"]
    }
];

// Función para generar el HTML de una tarjeta
function crearTarjeta(modelo) {
    const tagsHTML = modelo.tags
        .map(tag => `<span class="tag tag-estilo">${tag}</span>`)
        .join('');

    return `
        <article class="card" data-category="${modelo.categoria}">
            <div class="card-image-wrapper">
                <img src="${modelo.imagen}" alt="${modelo.nombre}">
            </div>
            <div class="card-content">
                <h2 class="card-title">${modelo.nombre}</h2>
                <p class="card-description">${modelo.descripcion}</p>
                <div class="card-tags">
                    ${tagsHTML}
                </div>
            </div>
        </article>
    `;
}

// Función para renderizar todas las tarjetas
function renderizarModelos() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = modelos.map(modelo => crearTarjeta(modelo)).join('');
}

// Función para filtrar tarjetas
function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Actualizar botones activos
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });

    // Mostrar/ocultar tarjetas según categoría
    cards.forEach(card => {
        if (category === 'Todos') {
            card.style.display = 'flex';
        } else {
            const cardCategory = card.dataset.category;
            card.style.display = cardCategory === category ? 'flex' : 'none';
        }
    });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todas las tarjetas
    renderizarModelos();

    // Agregar event listeners a los botones de filtro
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.textContent;
            filterCards(category);
        });
    });
});
