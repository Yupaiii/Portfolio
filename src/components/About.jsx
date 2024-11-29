import React, { useState } from "react";

const About = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleClick = (sport) => {
    setSelectedSport(sport);
  };

  const handleClose = () => {
    setSelectedSport(null);
  };

  return (
    <section id="about" className="px-6 py-10 md:p-20 bg-gray-900 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-indigo-400">
        À Propos de Moi
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* Section hobbies et sports */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400 text-center">
            Mes Passions Sportives
          </h3>
          <p className="text-sm md:text-base text-gray-300 text-center mb-6">
            J'adore le sport ! Mon cœur balance entre le football et le basketball,
            mais je m'intéresse à presque tous les sports. Que ce soit regarder,
            pratiquer ou discuter, le sport fait partie de mon quotidien.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-4 min-h-[150px]">
            {/* Football */}
            <div
              onClick={() => handleClick("football")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/Ballon.jpg"
                alt="Football"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Basketball */}
            <div
              onClick={() => handleClick("basketball")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/basket.jpg"
                alt="Basketball"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Tennis */}
            <div
              onClick={() => handleClick("tennis")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/Tennis.jpg"
                alt="Tennis"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Section jeux vidéo */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400 text-center">
            Fan de Jeux Vidéo
          </h3>
          <p className="text-sm md:text-base text-gray-300 text-center mb-6">
            Les jeux vidéo sont une autre grande passion. Je passe beaucoup de
            temps sur des jeux immersifs comme Genshin Impact ou des jeux compétitifs
            comme Dota 2.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-4 min-h-[150px]">
            {/* Manette */}
            <div
              onClick={() => handleClick("manette")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/Manette.jpg"
                alt="Jeux Vidéo"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Genshin */}
            <div
              onClick={() => handleClick("genshin")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/Genshin.jpg"
                alt="Genshin Impact"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Dota */}
            <div
              onClick={() => handleClick("dota")}
              className="relative cursor-pointer transform transition-transform hover:scale-110"
            >
              <img
                src="/Dota.jpg"
                alt="Dota 2"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal affichage des infos */}
      {selectedSport && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4 z-50">
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg text-center max-w-md w-full">
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              {selectedSport === "football" && (
                <>Mon joueur préféré est Rooney et CR7 et j'ai joué au football pendant 5 ans.</>
              )}
              {selectedSport === "basketball" && (
                <>Mon joueur préféré est Stephan Curry, et mon équipe favorite est Golden State. Mais en ce moment Trae Young et Lamelo Ball sont bien installé dans mon top 3.</>
              )}
              {selectedSport === "tennis" && (
                <>Mon joueur préféré est Rafael Nadal.</>
              )}
              {selectedSport === "manette" && (
                <>J'ai déjà jouer avec des joueurs pros de Mario Kart. J'adore jouer Taod carte rétro même si c'est pas méta.</>
              )}
              {selectedSport === "genshin" && (
                <>AR 58 bientôt le niveau 60. Mon perso préféré est le voyage et Jean (ma première 5* mon avis est biaisé je le sais bien).</>
              )}
              {selectedSport === "dota" && (
                <>Je suis plus support ! Je joue majoritairement avec Jakiro, Lion ou Crystal Maiden, mais mon préféré reste Riki même s'il était bien plus fun à jouer avant.</>
              )}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 bg-indigo-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-indigo-700 transition duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
