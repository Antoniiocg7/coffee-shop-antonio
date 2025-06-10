export default function About() {
  const main = document.createElement('div');
  main.className = 'min-h-screen py-10 md:py-16';

  // Sección Hero
  const heroSection = document.createElement('section');
  heroSection.className = 'relative py-20 bg-coffee-800 text-white';

  const container = document.createElement('div');
  container.className = 'px-4';

  const title = document.createElement('h1');
  title.className = 'text-4xl md:text-5xl font-bold mb-6 text-center text-white dark:text-white';
  title.textContent = 'Nuestra Historia';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl text-center max-w-3xl mx-auto';
  subtitle.textContent = 'Descubre la pasión y dedicación detrás de cada taza de café que servimos';

  container.appendChild(title);
  container.appendChild(subtitle);
  heroSection.appendChild(container);

  // Sección Contenido
  const contentSection = document.createElement('section');
  contentSection.className = 'py-10 md:py-16';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'px-4';

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center';

  // Columna izquierda - Imagen
  const imageContainer = document.createElement('div');
  imageContainer.className = 'relative h-56 md:h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0';
  const image = document.createElement('img');
  image.src = '/about-coffee.jpg';
  image.alt = 'Nuestro café de especialidad';
  image.className = 'w-full h-full object-cover';
  imageContainer.appendChild(image);

  // Columna derecha - Texto
  const textContainer = document.createElement('div');
  textContainer.className = 'space-y-6';

  const storyTitle = document.createElement('h2');
  storyTitle.className = 'text-3xl font-bold text-coffee-800 dark:text-coffee-300';
  storyTitle.textContent = 'Nuestra Pasión por el Café';

  const storyText = document.createElement('p');
  storyText.className = 'text-gray-600 dark:text-gray-300';
  storyText.textContent = 'Desde 2010, nos hemos dedicado a seleccionar los mejores granos de café de las regiones más prestigiosas del mundo. Nuestro compromiso con la calidad y la sostenibilidad nos ha permitido crear una experiencia única para nuestros clientes.';

  const valuesTitle = document.createElement('h3');
  valuesTitle.className = 'text-2xl font-bold text-coffee-700 dark:text-coffee-200 mt-8';
  valuesTitle.textContent = 'Nuestros Valores';

  const valuesList = document.createElement('ul');
  valuesList.className = 'list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300';

  const values = [
    'Calidad Premium en cada grano',
    'Sostenibilidad y comercio justo',
    'Innovación en el proceso de tostado',
    'Compromiso con nuestros clientes'
  ];

  values.forEach(value => {
    const li = document.createElement('li');
    li.textContent = value;
    valuesList.appendChild(li);
  });

  textContainer.appendChild(storyTitle);
  textContainer.appendChild(storyText);
  textContainer.appendChild(valuesTitle);
  textContainer.appendChild(valuesList);

  grid.appendChild(imageContainer);
  grid.appendChild(textContainer);
  contentContainer.appendChild(grid);
  contentSection.appendChild(contentContainer);

  // Sección Equipo
  const teamSection = document.createElement('section');
  teamSection.className = 'py-10 md:py-16 bg-gray-50 dark:bg-gray-800';

  const teamContainer = document.createElement('div');
  teamContainer.className = 'px-4';

  const teamTitle = document.createElement('h2');
  teamTitle.className = 'text-3xl font-bold text-center mb-12 text-coffee-800 dark:text-coffee-300';
  teamTitle.textContent = 'Nuestro Equipo';

  const teamGrid = document.createElement('div');
  teamGrid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8';

  const teamMembers = [
    {
      name: 'Ana García',
      role: 'Maestra Tostadora',
      image: '/team-1.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Catador Profesional',
      image: '/team-2.jpg'
    },
    {
      name: 'María López',
      role: 'Directora de Operaciones',
      image: '/team-3.jpg'
    }
  ];

  teamMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'text-center';

    const memberImage = document.createElement('img');
    memberImage.src = member.image;
    memberImage.alt = member.name;
    memberImage.className = 'w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover';

    const memberName = document.createElement('h3');
    memberName.className = 'text-xl font-bold text-coffee-800 dark:text-coffee-200';
    memberName.textContent = member.name;

    const memberRole = document.createElement('p');
    memberRole.className = 'text-gray-600 dark:text-gray-300';
    memberRole.textContent = member.role;

    memberCard.appendChild(memberImage);
    memberCard.appendChild(memberName);
    memberCard.appendChild(memberRole);
    teamGrid.appendChild(memberCard);
  });

  teamContainer.appendChild(teamTitle);
  teamContainer.appendChild(teamGrid);
  teamSection.appendChild(teamContainer);

  // Montamos la página
  main.appendChild(heroSection);
  main.appendChild(contentSection);
  main.appendChild(teamSection);

  return main;
} 