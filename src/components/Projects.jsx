import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Transmusical",
      description:
        "Découvrez mon projet Transmusical, dans le cadre d'un challenge 72h il fallait réalisé une application web qui offre aux festivaliers ...",
      fullDescription:
        "Découvrez mon projet Transmusical, dans le cadre d'un challenge 72h il fallait réalisé une application web qui offre aux festivaliers un planning personnalisé de concerts, sur mesure selon leurs goûts musicaux. ",
      images: ["Transmusical.jpg"],
      github: "https://github.com/user/transmusical",
    },
    {
      id: 2,
      name: "Beefree",
      description:
        "Beefree est une application qui a pour but de faire découvrir la ville de Rennes à travers différentes ... ",
      fullDescription:
        "Beefree est une application qui a pour but de faire découvrir la ville de Rennes à travers différentes activités et lieux à visiter. L'application propose une carte interactive avec des points d'intérêt, des itinéraires et des recommandations personnalisées, ainsi qu'un chat pour discuter avec d'autres utilisateurs.",
      images: [
        "/Beefree.jpg",
        "Beefree1.jpg",
        "Beefree2.jpg",
        "Beefree3.jpg",
        "Beefree4.jpg",
        "Beefree5.jpg",
        "Beefree6.jpg",
        "Beefree7.jpg",
      ],
      github: "https://github.com/Yupaiii/Beefree",
    },
    {
      id: 3,
      name: "Entre nous",
      description:
        "Entre nous est un podcast convivial créé par et pour des étudiants dans lequel on échange sur ...",
      fullDescription:
        "Entre nous est un podcast convivial créé par et pour des étudiants dans lequel on échange sur de nombreux sujets tels que les sorties, le quotidien, les relations, le monde du travail etc. Le site internet est en cours de développement.",
      images: ["Entrenous.jpg"],
      github: "https://github.com/Yupaiii/Entre-nous",
    },
  ];

  const toggleFullscreen = (projectId) => {
    setSelectedProject(projectId);
    setIsFullscreen(!isFullscreen);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    const project = projects.find((p) => p.id === selectedProject);
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    const project = projects.find((p) => p.id === selectedProject);
    setCurrentImageIndex(
      (currentImageIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <section id="projects" className="p-16 bg-gray-900 text-white">
      <h2 className="text-5xl font-extrabold text-center text-indigo-400 mb-14">
        Mes Projets
      </h2>

      {/* Vue plein écran */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <h3 className="text-5xl font-bold text-indigo-400 mb-8">
            {projects.find((p) => p.id === selectedProject)?.name}
          </h3>
          <div className="relative w-full max-w-5xl h-auto bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-10">
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              &#10094;
            </button>
            <img
              src={projects.find((p) => p.id === selectedProject)?.images[currentImageIndex]}
              alt={`Aperçu de ${selectedProject}`}
              className="w-full h-[450px] object-contain"
            />
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              &#10095;
            </button>
          </div>
          <p className="text-lg text-center text-white max-w-2xl mb-6">
            {projects.find((p) => p.id === selectedProject)?.fullDescription}
          </p>
          <a
            href={projects.find((p) => p.id === selectedProject)?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-white flex items-center gap-2 text-lg"
          >
            <FaGithub className="text-4xl" /> Voir sur GitHub
          </a>
        </div>
      )}

      {/* Section normale */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
      {projects.map((project) => (
  <div
    key={project.id}
    className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-96 transition-transform transform hover:scale-105 cursor-pointer"
  >
    <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
      {project.name}
    </h3>
    <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4 overflow-hidden shadow-md">
      <img
        src={project.images[0]}
        alt={`Aperçu de ${project.name}`}
        className="w-full h-[200px] object-contain" // Taille de l'image ajustée avec object-contain
      />
    </div>
    <p className="text-lg text-white mb-4">{project.description}</p>

    {/* Conteneur flex pour aligner le bouton au bas */}
    <div className="flex-grow" /> {/* Permet de pousser le bouton en bas */}
    <div className="flex justify-center w-full mt-auto">
      <button
        onClick={() => toggleFullscreen(project.id)}
        className="text-indigo-400 hover:text-white text-sm underline"
      >
        En savoir plus
      </button>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Projects;
