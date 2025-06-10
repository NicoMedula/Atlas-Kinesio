import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Fisioterapia"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transformando Vidas a través de la
            <span className="text-red-500"> Fisioterapia</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
            En ATLAS, combinamos experiencia, innovación y atención
            personalizada para ayudarte a alcanzar tu mejor versión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Agenda tu cita
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
