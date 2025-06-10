export default function Home() {
  const main = document.createElement('div');
  main.className = 'min-h-screen';

  // Sección Hero
  const heroSection = document.createElement('section');
  heroSection.className = "relative h-[600px] flex items-center bg-[url('/home-image.jpg')] bg-cover bg-center";

  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-coffee-900 opacity-50';

  const heroContent = document.createElement('div');
  heroContent.className = 'relative z-10 text-center text-white w-full px-4 sm:px-8 lg:px-16';

  const title = document.createElement('h1');
  title.className = 'text-5xl md:text-6xl font-bold mb-6';
  title.textContent = 'Descubre el Mejor Café';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl md:text-2xl mb-8';
  subtitle.textContent = 'Café de especialidad seleccionado con cuidado para ti';

  const ctaButton = document.createElement('a');
  ctaButton.href = '/products';
  ctaButton.className = 'btn btn-primary text-lg';
  ctaButton.textContent = 'Ver Productos';

  heroContent.appendChild(title);
  heroContent.appendChild(subtitle);
  heroContent.appendChild(ctaButton);
  heroSection.appendChild(overlay);
  heroSection.appendChild(heroContent);

  // Sección Características
  const featuresSection = document.createElement('section');
  featuresSection.className = 'py-16 bg-gray-50 dark:bg-gray-800';

  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'w-full px-4 sm:px-8 lg:px-16';

  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';

  const features = [
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Entrega Rápida',
      description: 'Recibe tu café fresco en 24-48 horas'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Calidad Premium',
      description: 'Granos seleccionados de las mejores regiones'
    },
    {
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      title: 'Pago Seguro',
      description: 'Transacciones 100% seguras'
    }
  ];

  features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'text-center p-6';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'w-16 h-16 mx-auto mb-4 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center';

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('class', 'w-8 h-8 text-coffee-600 dark:text-coffee-300');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', feature.icon);

    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold mb-2';
    title.textContent = feature.title;

    const description = document.createElement('p');
    description.className = 'text-gray-600 dark:text-gray-300';
    description.textContent = feature.description;

    icon.appendChild(path);
    iconContainer.appendChild(icon);
    featureCard.appendChild(iconContainer);
    featureCard.appendChild(title);
    featureCard.appendChild(description);
    featuresGrid.appendChild(featureCard);
  });

  featuresContainer.appendChild(featuresGrid);
  featuresSection.appendChild(featuresContainer);

  // Montamos la página
  main.appendChild(heroSection);
  main.appendChild(featuresSection);

  return main;
} 