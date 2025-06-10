export default function Contact() {
  const main = document.createElement('div');
  main.className = 'min-h-screen py-16';

  // Sección Hero
  const heroSection = document.createElement('section');
  heroSection.className = 'relative py-20 bg-coffee-800 text-white';

  const container = document.createElement('div');
  container.className = 'max-w-3xl mx-auto px-4';

  const title = document.createElement('h1');
  title.className = 'text-4xl md:text-5xl font-bold mb-6 text-center';
  title.textContent = 'Contacta con Nosotros';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl text-center max-w-3xl mx-auto';
  subtitle.textContent = 'Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.';

  container.appendChild(title);
  container.appendChild(subtitle);
  heroSection.appendChild(container);

  // Sección Formulario de Contacto
  const formSection = document.createElement('section');
  formSection.className = 'py-16 bg-gray-50 dark:bg-gray-900';

  const formContainer = document.createElement('div');
  formContainer.className = 'max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8';

  const form = document.createElement('form');
  form.className = 'space-y-8';

  // Campo Nombre
  const nameGroup = document.createElement('div');
  const nameLabel = document.createElement('label');
  nameLabel.className = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2';
  nameLabel.textContent = 'Nombre';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-500 focus:border-coffee-500';
  nameInput.required = true;
  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  // Campo Email
  const emailGroup = document.createElement('div');
  const emailLabel = document.createElement('label');
  emailLabel.className = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2';
  emailLabel.textContent = 'Email';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-500 focus:border-coffee-500';
  emailInput.required = true;
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);

  // Campo Asunto
  const subjectGroup = document.createElement('div');
  const subjectLabel = document.createElement('label');
  subjectLabel.className = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2';
  subjectLabel.textContent = 'Asunto';
  const subjectInput = document.createElement('input');
  subjectInput.type = 'text';
  subjectInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-500 focus:border-coffee-500';
  subjectInput.required = true;
  subjectGroup.appendChild(subjectLabel);
  subjectGroup.appendChild(subjectInput);

  // Campo Mensaje
  const messageGroup = document.createElement('div');
  const messageLabel = document.createElement('label');
  messageLabel.className = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2';
  messageLabel.textContent = 'Mensaje';
  const messageInput = document.createElement('textarea');
  messageInput.rows = 6;
  messageInput.className = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coffee-500 focus:border-coffee-500';
  messageInput.required = true;
  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageInput);

  // Botón Enviar
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-primary w-full md:w-auto bg-coffee-600 text-white hover:bg-coffee-700 mx-auto block';
  submitButton.textContent = 'Enviar Mensaje';

  // Añadimos todos los elementos del formulario
  form.appendChild(nameGroup);
  form.appendChild(emailGroup);
  form.appendChild(subjectGroup);
  form.appendChild(messageGroup);
  form.appendChild(submitButton);

  // Información de Contacto
  const contactInfo = document.createElement('div');
  contactInfo.className = 'mt-12 grid grid-cols-1 md:grid-cols-3 gap-6';

  const contactItems = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Teléfono',
      content: '+34 123 456 789'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      content: 'info@coffeeshop.com'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Dirección',
      content: 'Calle del Café, 123 Madrid, España'
    }
  ];

  contactItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md';

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('class', 'w-8 h-8 text-coffee-600 mx-auto mb-4');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('stroke', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', item.icon);

    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold text-coffee-800 mb-2 dark:text-coffee-200';
    title.textContent = item.title;

    const content = document.createElement('p');
    content.className = 'text-gray-600 dark:text-gray-300';
    content.textContent = item.content;

    iconSvg.appendChild(path);
    itemDiv.appendChild(iconSvg);
    itemDiv.appendChild(title);
    itemDiv.appendChild(content);
    contactInfo.appendChild(itemDiv);
  });

  formContainer.appendChild(form);
  formContainer.appendChild(contactInfo);
  formSection.appendChild(formContainer);

  // Montamos la página
  main.appendChild(heroSection);
  main.appendChild(formSection);

  return main;
} 