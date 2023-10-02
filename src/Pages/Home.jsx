import React from "react";
import backgroundImage from "../assets/fondo.jpg";

const Home = () => {
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl text-white font-bold mb-4">
          Bienvenido a Repair Cats
        </h1>
        <p className="text-white text-3xl">Tu página tecnológica favorita</p>
      </div>
    </div>
  );
};

export default Home;