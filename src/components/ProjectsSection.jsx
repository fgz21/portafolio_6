import React, { useState } from 'react';

// Datos de categorías y proyectos
const categories = [
  { name: 'All', value: 'All' },
  { name: 'Blog', value: 'Blog' },
  { name: 'Apps Webs', value: 'Projects' },
  { name: 'Lading', value: 'Lading' },
];

const products = [
  {
    name: 'Blog UNELLEZ',
    category: 'Blog',
    image: 'assets/img/blog.png',
    description: 'Blog created to my University, about Marketing and Gerence.',
    url: 'https://blog-unellez.netlify.app/',
  },
  {
    name: 'Community Service',
    category: 'Projects',
    image: 'assets/img/comunitario.png',
    description: 'Simple App created to Community Service in the University.',
    url: 'https://servicio-comunitario-fgz.netlify.app/',
  },
  {
    name: 'Inmobiliary',
    category: 'Lading',
    image: 'assets/img/inmobiliario.png',
    description: 'Lading Page about Business Inmobiliary.',
    url: 'https://fran-inmobiliario.netlify.app/',
  },
  {
    name: 'Restaurant',
    category: 'Lading',
    image: 'assets/img/restaurand.png',
    description: 'Lading Page created to Restaurant food chinese.',
    url: 'https://chinese-and-grill.netlify.app/',
  },
  {
    name: 'Currency App',
    category: 'Projects',
    image: 'assets/img/Currency.png',
    description: 'Currency App, to see the price of USD and BS.',
    url: 'https://currency-converter-fran.netlify.app/',
  },
  {
    name: 'Crash Desing Test',
    category: 'Projects',
    image: 'assets/img/crash bandicoot.png',
    description: 'A test chicksgold.com to Apply Projects.',
    url: 'https://fran-practice-chicksgold.netlify.app/',
  },
  {
    name: 'CameraCCTV',
    category: 'Lading',
    image: 'assets/img/camaras.png',
    description: 'Landing page, business about physical camera placement.',
    url: 'https://jrsecurity22cam.vercel.app/',
  },
  {
    name: 'Ganaderia Barinas',
    category: 'Lading',
    image: 'assets/img/Ganaderia.png',
    description:
      'Landing page, Livestock farming in Barinas is essential for the local economy, standing out in the production of high-quality meat and milk.',
    url: 'https://ganaderia-fran.netlify.app',
  },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) =>
    selectedCategory === 'All' ? true : product.category === selectedCategory
  );

  return (
    <section className="py-20 bg-gray-800" id="projects">
      {/* Título con estilo punk */}
      <h2 className="text-7xl text-blue-700 font-punk text-center mb-12" style={{ fontFamily: 'Permanent Marker, cursive' }}>
        Projects
      </h2>

      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Tarjetas de proyectos */}
      <div className="grid lg:grid-cols-3 gap-8 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col border-4 border-black hover:shadow-2xl transition-shadow duration-300"
          >
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="flex-grow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain p-4 hover:scale-105 transition duration-300"
              />
            </a>
            <div className="p-6 flex flex-col flex-grow">
              {/* Título de la tarjeta con estilo punk */}
              <h2
                className="text-2xl font-punk text-gray-800 mb-2"
                style={{ fontFamily: 'Permanent Marker, cursive' }}
              >
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;