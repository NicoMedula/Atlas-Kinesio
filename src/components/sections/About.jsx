import React from "react";

const About = () => {
  const stats = [
    { number: "10+", label: "Años de Experiencia" },
    { number: "5000+", label: "Pacientes Atendidos" },
    { number: "20+", label: "Profesionales Especializados" },
    { number: "95%", label: "Satisfacción del Cliente" },
  ];

  return (
    <section
      id="nosotros"
      className="py-16 sm:py-20 bg-white dark:bg-dark-primary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Imagen */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Equipo ATLAS"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-xl hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Certificación Internacional
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ISO 9001:2015
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Contenido */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Transformando Vidas a través de la Excelencia en Fisioterapia
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                En ATLAS, nos dedicamos a proporcionar atención fisioterapéutica
                de la más alta calidad, combinando experiencia, innovación y un
                enfoque personalizado para cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-dark-secondary p-6 rounded-lg shadow-sm"
                >
                  <p className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Equipo multidisciplinario de profesionales altamente
                  calificados
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Tecnología de vanguardia y técnicas innovadoras
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Enfoque personalizado para cada paciente
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
