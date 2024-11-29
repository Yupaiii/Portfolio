import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/your-backend-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message envoyé !");
    } else {
      alert("Erreur lors de l'envoi du message");
    }
  };

  return (
    <section id="contact" className="p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">
        Contactez-moi
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 shadow-lg rounded-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-300 mb-2"
          >
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            placeholder="exemple@email.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-4 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            placeholder="Votre message ici"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
      <div className="text-center mt-10">
  {/* Titre pour les liens sociaux */}
  <h3 className="text-xl font-semibold text-indigo-400 mb-4">
    Retrouvez-moi sur les réseaux
  </h3>
  <div className="flex justify-center gap-8">
    {/* Lien LinkedIn */}
    <a
      href="https://www.linkedin.com/in/guillaume-hardy-1750832a5/"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-400 transition duration-300"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
      />
    </a>
    {/* Lien GitHub */}
    <a
      href="https://github.com/Yupaiii"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-gray-500 transition duration-300"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
      />
    </a>
  </div>
</div>

    </section>
  );
};

export default Contact;
