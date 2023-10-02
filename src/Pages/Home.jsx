import React from "react";
import backgroundImage from "../assets/fondo.jpg";

const Home = () => {
  return (
    // Agrega la clase bg-opacity-25 para hacer el fondo más oscuro
    <div
      className="bg-blue-500 h-screen flex justify-center items-center opacity-100 bg-opacity-25"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-100 p-12 rounded-lg shadow-md mb-8">
        {/* Agrega las clases text-4xl text-gray-900 animate-pulse mb-4 para cambiar el tamaño, el color, la animación y el margen del texto */}
        <h1 className="text-4xl text-gray-900 animate-pulse mb-4">
          Bienvenido a Repair Cats
        </h1>
        <p className="text-gray-600">Tu pagina tecnológica favorita</p>
      </div>
    </div>
  );
};

export default Home;
