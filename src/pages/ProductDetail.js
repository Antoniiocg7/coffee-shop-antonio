export default function ProductDetail() {
  const main = document.createElement('div');
  main.className = 'min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 p-4';

  // Contenedor principal
  const container = document.createElement('div');
  container.className = 'max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 ';

  // Imagen del producto
  const imageContainer = document.createElement('div');
  imageContainer.className = 'flex-shrink-0 flex justify-center items-center';
  const image = document.createElement('img');
  image.src = '/cafe-arabica.jpg';
  image.alt = 'Café Arábica Etiopía';
  image.className = 'w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border';
  imageContainer.appendChild(image);

  // Info del producto
  const info = document.createElement('div');
  info.className = 'flex-1 flex flex-col justify-center';

  const name = document.createElement('h1');
  name.className = 'text-3xl font-bold mb-4 text-coffee-800 dark:text-coffee-300';
  name.textContent = 'Café Arábica Etiopía';

  const description = document.createElement('p');
  description.className = 'text-gray-700 dark:text-gray-200 mb-6';
  description.textContent = 'Notas de frutas tropicales y cítricos. Café de especialidad seleccionado de las mejores fincas de Etiopía. Tostado artesanalmente para resaltar su perfil único.';

  const price = document.createElement('div');
  price.className = 'text-2xl font-bold text-coffee-700 dark:text-coffee-300 mb-6';
  price.textContent = '€12.99';

  const addButton = document.createElement('button');
  addButton.className = 'btn btn-primary w-full md:w-auto bg-coffee-600 hover:bg-coffee-700 text-white text-lg rounded-md py-3';
  addButton.textContent = 'Añadir al Carrito';
  addButton.onclick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/cart');
    if (typeof renderPage === 'function') renderPage();
    else window.dispatchEvent(new Event('popstate'));
  };

  info.appendChild(name);
  info.appendChild(description);
  info.appendChild(price);
  info.appendChild(addButton);

  container.appendChild(imageContainer);
  container.appendChild(info);
  main.appendChild(container);

  return main;
} 