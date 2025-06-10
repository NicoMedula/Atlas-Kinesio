import React from "react";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 bg-white dark:bg-dark-primary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Encuentra nuestra ubicación y
            contáctanos para más información.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa de Google Maps */}
          <div className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-0 sm:p-0 shadow-lg flex items-center justify-center min-h-[400px]">
            <iframe
              title="Ubicación del consultorio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019234963!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e6b1b1b%3A0x4a0b8b8b8b8b8b8b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "0.5rem", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Dirección
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Av. Principal 123, Ciudad
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Teléfono
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +123 456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      contacto@atlas.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Horario de Atención
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Lunes a Viernes: 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Sábados: 9:00 AM - 2:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Domingos: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
