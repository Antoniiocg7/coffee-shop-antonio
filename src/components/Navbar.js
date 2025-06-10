export default function Navbar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.classList.toggle('hidden');
  };

  const nav = document.createElement('nav');
  nav.className = 'bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50';
  
  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  
  const navContent = document.createElement('div');
  navContent.className = 'flex justify-between items-center h-16';
  
  // Sección del logo
  const logoSection = document.createElement('div');
  logoSection.className = 'flex items-center';
  
  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = 'flex items-center space-x-2';
  
  const logoImg = document.createElement('img');
  logoImg.src = '/coffee.svg';
  logoImg.alt = 'Coffee Shop Logo';
  logoImg.className = 'w-8 h-8';
  
  const logoText = document.createElement('span');
  logoText.className = 'text-2xl font-bold text-coffee-600 dark:text-coffee-400';
  logoText.textContent = 'Coffee Shop';
  
  logo.appendChild(logoImg);
  logo.appendChild(logoText);
  
  // Mobile menu button
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.className = 'md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700';
  mobileMenuButton.onclick = toggleMobileMenu;
  
  const menuIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  menuIcon.setAttribute('class', 'w-6 h-6 text-gray-600 dark:text-gray-300');
  menuIcon.setAttribute('fill', 'none');
  menuIcon.setAttribute('stroke', 'currentColor');
  menuIcon.setAttribute('viewBox', '0 0 24 24');
  
  const menuPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  menuPath.setAttribute('stroke-linecap', 'round');
  menuPath.setAttribute('stroke-linejoin', 'round');
  menuPath.setAttribute('stroke-width', '2');
  menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  
  menuIcon.appendChild(menuPath);
  mobileMenuButton.appendChild(menuIcon);
  
  // Navegación de escritorio
  const desktopNav = document.createElement('div');
  desktopNav.className = 'hidden md:flex items-center space-x-8';
  
  const links = [
    { href: '/', text: 'Inicio' },
    { href: '/about', text: 'Nosotros' },
    { href: '/products', text: 'Productos' },
    { href: '/contact', text: 'Contacto' }
  ];
  
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = 'text-gray-700 dark:text-gray-300 hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors';
    a.textContent = link.text;
    desktopNav.appendChild(a);
  });
  
  const cartButton = document.createElement('button');
  cartButton.className = 'ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
  cartButton.setAttribute('aria-label', 'Ver carrito');
  cartButton.onclick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/cart');
    if (typeof renderPage === 'function') renderPage();
    else window.dispatchEvent(new Event('popstate'));
  };
  const cartImg = document.createElement('img');
  cartImg.src = '/cart-icon.png';
  cartImg.alt = 'Carrito';
  cartImg.className = 'w-6 h-6';
  cartButton.appendChild(cartImg);
  desktopNav.appendChild(cartButton);
  
  // Botón de modo oscuro
  const darkModeButton = document.createElement('button');
  darkModeButton.className = 'p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors';
  darkModeButton.onclick = toggleDarkMode;
  const moonImg = document.createElement('img');
  moonImg.src = '/moon-icon.png';
  moonImg.alt = 'Modo oscuro';
  moonImg.className = 'w-5 h-5';
  darkModeButton.appendChild(moonImg);
  desktopNav.appendChild(darkModeButton);
  
  // Menu de navegación móvil
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'hidden md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg';
  
  const mobileLinksContainer = document.createElement('div');
  mobileLinksContainer.className = 'px-4 py-2 space-y-2';
  
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = 'block py-2 text-gray-700 dark:text-gray-300 hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors';
    a.textContent = link.text;
    mobileLinksContainer.appendChild(a);
  });
  
  mobileMenu.appendChild(mobileLinksContainer);
  
  // Montamos el navbar
  logoSection.appendChild(logo);
  navContent.appendChild(logoSection);
  navContent.appendChild(mobileMenuButton);
  navContent.appendChild(desktopNav);
  container.appendChild(navContent);
  nav.appendChild(container);
  nav.appendChild(mobileMenu);
  
  return nav;
} 