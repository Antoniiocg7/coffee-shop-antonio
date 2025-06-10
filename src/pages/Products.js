export default function Products() {
  const main = document.createElement('div');
  main.className = 'min-h-screen py-16';

  // Sección Hero
  const heroSection = document.createElement('section');
  heroSection.className = 'relative py-20 bg-coffee-800 text-white';

  const container = document.createElement('div');
  container.className = '';

  const title = document.createElement('h1');
  title.className = 'text-4xl md:text-5xl font-bold mb-6 text-center';
  title.textContent = 'Nuestros Productos';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl text-center max-w-3xl mx-auto';
  subtitle.textContent = 'Descubre nuestra selección de cafés de especialidad';

  container.appendChild(title);
  container.appendChild(subtitle);
  heroSection.appendChild(container);

  // Sección galería de Productos
  const productsSection = document.createElement('section');
  productsSection.className = 'py-16';

  const productsContainer = document.createElement('div');
  productsContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  // Filtros
  const filtersContainer = document.createElement('div');
  filtersContainer.className = 'mb-8 flex flex-wrap gap-4 justify-center';

  const filterButtons = [
    'Todos',
    'Café en Grano',
    'Café Molido',
    'Cápsulas',
    'Accesorios'
  ];

  filterButtons.forEach(filter => {
    const button = document.createElement('button');
    button.className = 'px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-coffee-600 hover:text-white transition-colors';
    button.textContent = filter;
    filtersContainer.appendChild(button);
  });

  // Galería de Productos
  const productsGrid = document.createElement('div');
  productsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  const products = [
    {
      name: 'Café Arábica Etiopía',
      description: 'Notas de frutas tropicales y cítricos',
      price: '12.99',
      image: '/cafe-arabica.jpg',
      category: 'Café en Grano'
    },
    {
      name: 'Café Robusta Colombia',
      description: 'Cuerpo intenso con notas de chocolate',
      price: '14.99',
      image: '/cafe-robusta.jpg',
      category: 'Café en Grano'
    },
    {
      name: 'Café Molido Premium',
      description: 'Mezcla especial para espresso',
      price: '11.99',
      image: '/cafe-molido.png',
      category: 'Café Molido'
    },
    {
      name: 'Cápsulas Compatibles',
      description: 'Pack de 50 cápsulas',
      price: '24.99',
      image: '/capsula.jpg',
      category: 'Cápsulas'
    },
    {
      name: 'Molino Manual',
      description: 'Molino de café manual de acero inoxidable',
      price: '39.99',
      image: '/molino-cafe.jpg',
      category: 'Accesorios'
    },
    {
      name: 'Taza de Cerámica',
      description: 'Taza artesanal de cerámica',
      price: '19.99',
      image: '/taza.jpg',
      category: 'Accesorios'
    }
  ];

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'relative h-48';
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    image.className = 'w-full h-full object-cover';
    imageContainer.appendChild(image);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'p-6';

    const category = document.createElement('span');
    category.className = 'text-sm text-coffee-600 dark:text-coffee-400';
    category.textContent = product.category;

    const name = document.createElement('h3');
    name.className = 'text-xl font-bold text-gray-900 dark:text-white mt-2';
    name.textContent = product.name;

    const description = document.createElement('p');
    description.className = 'text-gray-600 dark:text-gray-300 mt-2';
    description.textContent = product.description;

    const priceContainer = document.createElement('div');
    priceContainer.className = 'mt-4 flex items-center justify-between';

    const price = document.createElement('span');

    // Contenedor de botones debajo del precio (ver detalle y añadir al carrito)
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'flex flex-col w-full gap-2 mt-4';
    const detailButton = document.createElement('button');
    detailButton.className = 'btn btn-secondary w-full';
    detailButton.textContent = 'Ver Detalle';
    detailButton.onclick = (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/product-detail');
      if (typeof renderPage === 'function') renderPage();
      else window.dispatchEvent(new Event('popstate'));
    };
    const addButton = document.createElement('button');
    addButton.className = 'btn btn-primary w-full';
    addButton.textContent = 'Añadir al Carrito';
    addButton.onclick = (e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/cart');
      if (typeof renderPage === 'function') renderPage();
      else window.dispatchEvent(new Event('popstate'));
    };
    actionsContainer.appendChild(detailButton);
    actionsContainer.appendChild(addButton);
    priceContainer.appendChild(price);
    priceContainer.appendChild(actionsContainer);

    contentContainer.appendChild(category);
    contentContainer.appendChild(name);
    contentContainer.appendChild(description);
    contentContainer.appendChild(priceContainer);

    productCard.appendChild(imageContainer);
    productCard.appendChild(contentContainer);
    productsGrid.appendChild(productCard);
  });

  productsContainer.appendChild(filtersContainer);
  productsContainer.appendChild(productsGrid);
  productsSection.appendChild(productsContainer);

  // Montamos la página
  main.appendChild(heroSection);
  main.appendChild(productsSection);

  return main;
} 