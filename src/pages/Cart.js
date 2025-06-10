export default function Cart() {
  const main = document.createElement('div');
  main.className = 'min-h-screen py-10 md:py-16 bg-gray-50 dark:bg-gray-900';

  // Título
  const title = document.createElement('h1');
  title.className = 'text-3xl md:text-4xl font-bold mb-8 mt-10 text-center text-coffee-800 dark:text-coffee-300';
  title.textContent = 'Resumen del Pedido';
  main.appendChild(title);

  // Contenedor principal
  const container = document.createElement('div');
  container.className = 'max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10';

  // Productos fijos
  const products = [
    {
      name: 'Café Arábica Etiopía',
      image: '/cafe-arabica.jpg',
      price: 12.99,
      quantity: 2
    },
    {
      name: 'Taza de Cerámica',
      image: '/taza.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Molino Manual',
      image: '/molino-cafe.jpg',
      price: 39.99,
      quantity: 1
    }
  ];

  // Tabla de productos
  const table = document.createElement('div');
  table.className = 'divide-y divide-gray-200 dark:divide-gray-700';

  let subtotal = 0;

  products.forEach(product => {
    const row = document.createElement('div');
    row.className = 'flex items-center py-4 gap-4';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.className = 'w-16 h-16 rounded object-cover border';

    const info = document.createElement('div');
    info.className = 'flex-1';

    const name = document.createElement('div');
    name.className = 'font-semibold text-gray-900 dark:text-white';
    name.textContent = product.name;

    const qty = document.createElement('div');
    qty.className = 'text-sm text-gray-500 dark:text-gray-300';
    qty.textContent = `Cantidad: ${product.quantity}`;

    info.appendChild(name);
    info.appendChild(qty);

    const price = document.createElement('div');
    price.className = 'font-bold text-coffee-700 dark:text-coffee-300 text-lg';
    price.textContent = `€${(product.price * product.quantity).toFixed(2)}`;

    row.appendChild(img);
    row.appendChild(info);
    row.appendChild(price);
    table.appendChild(row);

    subtotal += product.price * product.quantity;
  });

  // Resumen de totales
  const totals = document.createElement('div');
  totals.className = 'mt-8 space-y-2 text-right';

  const subtotalDiv = document.createElement('div');
  subtotalDiv.className = 'text-gray-700 dark:text-gray-200';
  subtotalDiv.innerHTML = `<span class="font-medium">Subtotal:</span> €${subtotal.toFixed(2)}`;

  const envioDiv = document.createElement('div');
  envioDiv.className = 'text-gray-700 dark:text-gray-200';
  envioDiv.innerHTML = `<span class="font-medium">Envío:</span> €4.99`;

  const totalDiv = document.createElement('div');
  totalDiv.className = 'text-xl font-bold text-coffee-700 dark:text-coffee-300';
  totalDiv.innerHTML = `<span>Total:</span> €${(subtotal + 4.99).toFixed(2)}`;

  totals.appendChild(subtotalDiv);
  totals.appendChild(envioDiv);
  totals.appendChild(totalDiv);

  // Botón finalizar pedido
  const button = document.createElement('button');
  button.className = 'mt-8 w-full btn btn-primary text-lg bg-coffee-600 hover:bg-coffee-700 text-white rounded-md py-3';
  button.textContent = 'Finalizar Pedido';

  // Montar todo
  container.appendChild(table);
  container.appendChild(totals);
  container.appendChild(button);
  main.appendChild(container);

  return main;
} 