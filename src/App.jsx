import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, animateScroll as scroll } from 'react-scroll';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animate, setAnimate] = useState(false);

  const notify = () => toast("Email Copied");


  const handleCopyEmail = () => {
  // código para copiar el email
  navigator.clipboard.writeText('frandeveloper21@gmail.com');
};






  const categories = [
    { name: 'All', value: 'All' },
    { name: 'Blog', value: 'Blog' },
    { name: 'Proyect', value: 'Proyect' },
    { name: 'Lading', value: 'Lading' },
  ];

  const products = [
    {
      name: 'Blog UNELLEZ',
      category: 'Blog',
      image: 'assets/img/blog.png',
      description: 'Blog created to my University, about Marketing and Gerence.',
      url: 'https://example.com/blog-unellez'
    },
    {
      name: 'Servicio Comunitario',
      category: 'Proyect',
      image: 'assets/img/comunitario.png',
      description: 'Simple App created to Community Service in the University.',
    },
    {
      name: 'Inmobiliario',
      category: 'Lading',
      image: 'assets/img/inmobiliario.png',
      description: 'Lading Page about Business Inmobiliary.',
    },
    {
      name: 'Restaurant',
      category: 'Lading',
      image: 'assets/img/restaurand.png',
      description: 'Lading Page created to Restaurant food chinese.',
    },
    {
      name: 'Currency App',
      category: 'Proyect',
      image: 'assets/img/Currency.png',
      description: 'Currency App, to see the price of USD and BS.',
    },
    {
      name: 'Crash Desing Test',
      category: 'Proyect', 
      image: 'assets/img/crash bandicoot.png',
      description: 'A test chicksgold.com to Apply Proyect. ',
    },
    {
      name: 'CamarasCCTV',
      category: 'Lading',
      image: 'assets/img/camaras.png',
      description: 'Landing page, business about physical camera placement.',
    },
  ];

  const filteredImg = products.filter((product) => {
    if (selectedCategory === 'All') {
      return true;
    }
    return product.category === selectedCategory;
  });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500); // ajusta el tiempo de la animación
  };





 

  return (
    <div className="" id="home">
      <nav className="bg-gray-800 text-white p-4 md:p-4 flex justify-around md:flex-row lg:flex-row xl:flex-row">
        <div className="flex items-center">
          <h1 className="text-2xl btn-39">
            <span className="new">Francisco</span>
            <span className="old">Gonzalez</span>
          </h1>
        </div>
        <ul className="flex flex-col md:flex-row lg:flex-row xl:flex-row space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-16">
          <li className="mb-4 md:mb-0">
            <button className="text-white font-bold py-2 px-4 rounded btn-39 w-full">
              <span className="new">Home</span>
              <span className="old"></span>
              <Link to="home" smooth={true} offset={-70} duration={500}>
                Home
              </Link>
            </button>
          </li>
          <li className="mb-4 md:mb-0">
            <button className="text-white font-bold py-2 px-4 rounded btn-39 w-full">
              <span className="new">Gallery</span>
              <span className="old"></span>
              <Link to="Gallery" smooth={true} offset={-70} duration={500}>
                Gallery
              </Link>
            </button>
          </li>
          <li className="mb-4 md:mb-0">
            <button className="text-white font-bold py-2 px-4 rounded btn-39 w-full">
              <span className="new">Contact</span>
              <span className="old"></span>
              <Link to="Contact" smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
          

      <section className="h-screen bg-cover bg-center bg-gray-900 text-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-center h-full">
          <div className="lg:w-1/2 xl:w-1/2 p-6 text-lg lg:text-xl xs:w-4/5 sm:w-3/4 md:w-full">
            <h1 className="text-4xl lg:text-6xl font-bold text-sky-500 domino">Welcome to my portfolio</h1>
            <p className="mt-4 text-sky-500 domino delay-200">
              I'm a frontend developer passionate about crafting digital experiences that blend aesthetics with functionality, driven by a passion for building websites that inspire and captivate.
            </p>
            <p className="mt-4 text-sky-500 domino delay-300">
             With a thirst for knowledge and a passion for innovation, I enjoy experimenting with new challenges using the latest trends and technologies in web development, to deliver solutions for future digital applications.
            </p>
            <div className="mt-12 ">
              <button 
                className="btn-39 text-white font-bold py-2 px-2 rounded w-md"
              >
                <span className="new">Download CV</span>
                <span className="old"></span>
                <a 
                  href="/assets/CV_FRAN.pdf"
                  download="CV_FRAN.pdf"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-6/4 xl:w-1/2 p-6 flex justify-center md:w-full sm:w-full xs:w-full">
            <img src="/assets/img/fran3.jpg" alt="Profile picture" className="rounded-full object-cover w-64 h-64 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mx-auto shadow-md domino delay-500"/>
          </div>
        </div>
          
          <div className="flex justify-center mt-8 mb-4">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <i className="fab fa-html5 fa-5x text-orange-500 domino mx-4"></i>
              <i className="fab fa-css3 fa-5x text-blue-500 domino mx-4"></i>
              <i className="fas fa-leaf fa-5x text-green-500 domino mx-4"></i>
              <i className="fab fa-bootstrap fa-5x text-purple-500 domino mx-4"></i>
              <i className="fab fa-js fa-5x text-yellow-500 domino mx-4"></i>
              <i className="fab fa-react fa-5x text-blue-500 domino mx-4"></i>
              <i className="fab fa-vuejs fa-5x text-green-500 domino mx-4"></i>
              <i className="fab fa-node fa-5x text-green-500 domino mx-4"></i>
              <i className="fas fa-database fa-5x text-blue-500 domino mx-4"></i>
            </div>
          </div>
      </section>



      <section className="py-20  bg-gray-900 ">
        <div className="container mx-auto p-8 lg:p-8 xl:p-12 pt-16">
        <h2 className="text-7xl text-blue-700 font-bold text-center mt-80 mb-12" id="Gallery">Gallery</h2>
          <div className="flex justify-center mb-8">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-md p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className={`grid lg:grid-cols-3 gap-8 ${animate ? 'animate-flyIn' : ''}`}
          >
            {filteredImg.map((product) => (
              <div key={product.name} className="bg-white rounded-lg overflow-hidden flex flex-row justify-center">
                <div className="w-60 h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-full w-full hover:scale-110 transition duration-300 ease-in-out"
                    style={{ maxWidth: '100%', height: '100%' }}
                  />
                </div>
                <div className="w-1/2 pl-4">
                  <h2 className="text-lg font-medium text-gray-700 p-4">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    <footer className="bg-cover bg-center bg-gray-900 h-md py-4 overflow-y-auto" id="Contact">
  <div className="container mx-auto p-4 lg:p-8 xl:p-8 flex flex-col items-center">
    <h2 className="text-7xl text-blue-700 font-bold text-center mb-12">Contact</h2>
    <div className="flex justify-center flex-wrap sm:flex-nowrap">
      <div className="relative group mr-8 sm:mr-8 mb-8 sm:mb-0">
        <button
          className="bg-white rounded-lg p-8 w-full sm:w-12/12 xl:w-3/7 domino"
          onClick={() => {
            handleCopyEmail();
            notify("Email copied to clipboard!"); 
          }}
        >
          <p className="text-md text-gray-600 text-center">frandeveloper21@gmail.com</p>
        </button>
        <ToastContainer />
        <div className="absolute bottom-0 right-0 mb-4 mr-4 tooltip opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="bg-gray-900 text-white py-1 px-2 rounded-lg text-xs">Click to copy Email</span>
        </div>
      </div>

      <div className="relative group mr-8 sm:mr-8 mb-8 sm:mb-0">
        <button
          className="bg-white rounded-lg p-8 w-full sm:w-12/12 xl:w-3/7 domino"
          onClick={() => window.open('https://github.com/fgz21', '_blank')}
        >
          <i className="fab fa-github text-gray-600 text-center text-md mr-2"></i>
          <p className="text-md text-gray-600 text-center">Click to visit my GitHub Profile</p>
        </button>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 tooltip opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="bg-gray-900 text-white py-1 px-2 rounded-lg text-xs">Visit GitHub</span>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
