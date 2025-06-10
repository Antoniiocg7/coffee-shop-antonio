import './style.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

// Estado de la aplicación
const state = {
  currentPage: 'home'
};

// Mapeo de rutas a componentes
const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/products': Products,
  '/cart': Cart,
  '/product-detail': ProductDetail
};

// Función para renderizar la página actual
function renderPage() {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  
  const mainContainer = document.createElement('div');
  mainContainer.className = 'min-h-screen bg-white dark:bg-gray-900 w-full';
  
  // Añadir la barra de navegación
  mainContainer.appendChild(Navbar());

  // Espaciador solo en Home y Contact
  const currentRoute = window.location.pathname;
  
  // Añadir el contenido principal
  const PageComponent = routes[currentRoute] || Home;
  mainContainer.appendChild(PageComponent());
  
  app.appendChild(mainContainer);
}

// Inicializar la aplicación
renderPage();

// Manejar la navegación
document.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    window.history.pushState({}, '', href);
    renderPage();
  }
});

// Manejar la navegación del historial
window.addEventListener('popstate', () => {
  renderPage();
});
