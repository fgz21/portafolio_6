import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#34495E] pt-20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Texto y Descripción */}
          <div className="max-w-lg">
            <h1 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
              Front-End Developer
            </h1>
            <p className="mt-4 text-gray-100 text-lg">
              Developer with 3 years of experience in web development focused on front-end, with expertise in HTML, CSS, JavaScript, and frameworks like React and Vue. Skilled in creating engaging user interfaces and optimizing web performance. Passionate about building SaaS applications and delivering impactful tech solutions.
            </p>
            <div className="mt-8">
              <a
                href="/assets/CV_FRAN.pdf"
                download="CV_FRAN.pdf"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-sky-900 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Imagen de Perfil */}
          <div className="mt-12 md:mt-0">
            <img
              src="/assets/img/fran3.jpg"
              alt="Profile picture"
              className="object-cover rounded-lg shadow-md w-full h-64 md:h-96"
            />
          </div>
        </div>

        {/* Iconos de Tecnologías */}
        <div className="mt-16">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-2xl mx-auto">
            {/* Ícono de HTML */}
            <div className="flex flex-col items-center">
              <i className="fab fa-html5 text-5xl text-orange-500 hover:text-orange-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">HTML</span>
            </div>

            {/* Ícono de CSS */}
            <div className="flex flex-col items-center">
              <i className="fab fa-css3 text-5xl text-blue-500 hover:text-blue-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">CSS</span>
            </div>

            {/* Ícono de JavaScript */}
            <div className="flex flex-col items-center">
              <i className="fab fa-js text-5xl text-yellow-500 hover:text-yellow-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">JavaScript</span>
            </div>

            {/* Ícono de React */}
            <div className="flex flex-col items-center">
              <i className="fab fa-react text-5xl text-blue-400 hover:text-blue-500 transition duration-300"></i>
              <span className="mt-2 text-gray-100">React</span>
            </div>

            {/* Ícono de Vue.js */}
            <div className="flex flex-col items-center">
              <i className="fab fa-vuejs text-5xl text-green-500 hover:text-green-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">Vue.js</span>
            </div>

            {/* Ícono de Node.js */}
            <div className="flex flex-col items-center">
              <i className="fab fa-node text-5xl text-green-600 hover:text-green-700 transition duration-300"></i>
              <span className="mt-2 text-gray-100">Node.js</span>
            </div>

            {/* Ícono de MySQL */}
            <div className="flex flex-col items-center">
              <i className="fas fa-database text-5xl text-blue-500 hover:text-blue-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">MySQL</span>
            </div>

            {/* Ícono de Bootstrap */}
            <div className="flex flex-col items-center">
              <i className="fab fa-bootstrap text-5xl text-purple-500 hover:text-purple-600 transition duration-300"></i>
              <span className="mt-2 text-gray-100">Bootstrap</span>
            </div>

            {/* Ícono de Next.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="Next.js"
                className="w-12 h-12 hover:opacity-75 transition duration-300"
              />
              <span className="mt-2 text-gray-100">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;