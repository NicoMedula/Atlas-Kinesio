import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Atleta Profesional",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "Gracias a ATLAS pude recuperarme completamente de mi lesión y volver a competir al más alto nivel. Su equipo es excepcional.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Entrenador Personal",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "La atención personalizada y el profesionalismo del equipo de ATLAS son incomparables. Han transformado mi forma de entrenar.",
    },
    {
      name: "Ana Martínez",
      role: "Paciente",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      text: "Después de años de dolor crónico, encontré en ATLAS la solución que necesitaba. Su enfoque integral es realmente efectivo.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonios"
      className="py-16 sm:py-20 bg-white dark:bg-dark-primary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Experiencias reales de personas que han transformado su vida con
            nosotros
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-6"
                loading="lazy"
              />
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-red-600 dark:text-red-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white dark:bg-dark-secondary rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-dark-accent transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white dark:bg-dark-secondary rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-dark-accent transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-red-600 dark:bg-red-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
