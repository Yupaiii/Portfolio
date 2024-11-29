import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV Guillaume Alternance.png"; // Chemin exact de votre CV
    link.download = "CV_Guillaume_Hardy.png";
    link.click();
  };

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      {/* En-tête avec navigation */}
      <header className="bg-gray-900 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-400">
            Web Designer
          </h1>
          {/* Menu Hamburger sur mobile */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              aria-expanded={isMenuOpen}
              className="text-white text-3xl focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center transition-transform transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } md:static md:translate-y-0 md:flex-row md:bg-transparent md:items-center md:gap-8`}
          >
            <ul className="flex flex-col md:flex-row gap-8 md:gap-7">
              <li>
                <a
                  href="#about"
                  onClick={handleMenuClose}
                  className="text-xl md:text-2xl font-bold text-indigo-400 hover:underline"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={handleMenuClose}
                  className="text-xl md:text-2xl font-bold text-indigo-400 hover:underline"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleMenuClose}
                  className="text-xl md:text-2xl font-bold text-indigo-400 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section principale */}
      <div className="flex flex-col items-center p-6 md:p-8 bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Photo à gauche */}
          <div className="flex justify-center items-center">
            <div className="w-56 h-72 md:w-64 md:h-80 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/Image Pro Guillaume.jpg"
                alt="Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description rapide, compétences et CV à droite */}
          <div className="flex flex-col gap-6 col-span-2">
            {/* Description rapide */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md h-40 flex items-center justify-center">
              <p className="text-lg text-center font-semibold">
                Je m'appelle Guillaume Hardy. Je suis étudiant en deuxième année
                d'informatique à l'école Ynov. J'aimerais me spécialiser dans le
                développement web et mobile et plus particulièrement en UI et UX
                design.
              </p>
            </div>

            {/* Section compétences et CV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Compétences */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform transform hover:scale-105 w-full md:w-70 h-40">
                <p className="text-xl font-semibold text-center text-indigo-400 mb-4">
                  Compétences
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                    alt="HTML"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt="CSS"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                    alt="JavaScript"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src="tailwind.jpg"
                    alt="Tailwind CSS"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                    alt="Golang"
                    className="w-11 h-11 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* CV avec modal */}
              <div
                className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center transition-transform transform hover:scale-105 w-full md:w-70 h-40 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src="/CV Guillaume Alternance.png"
                  alt="CV"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour le CV */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 rounded-lg p-12 max-w-2xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-gray-900 px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              Fermer
            </button>

            <img
              src="/CV Guillaume Alternance.png"
              alt="CV"
              className="w-full h-auto object-contain rounded-md"
            />

            <div className="flex justify-center mt-6">
              <button
                onClick={handleDownload}
                className="bg-indigo-500 text-white px-6 py-3 rounded shadow hover:bg-indigo-700"
              >
                Télécharger le CV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
