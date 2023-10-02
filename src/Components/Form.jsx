import React, { useState } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [color, setColor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los datos del localstorage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Crear un nuevo objeto con los datos del formulario
    const nuevoProducto = {
      nombre,
      numeroSerie,
      color,
      descripcion,
      precio
    };

    // Agregar el nuevo producto a la lista de productos
    productos.push(nuevoProducto);

    // Guardar la lista actualizada en el localstorage
    localStorage.setItem('productos', JSON.stringify(productos));
    

    // Limpiar los campos del formulario
    setNombre('');
    setNumeroSerie('');
    setColor('');
    setDescripcion('');
    setPrecio('');
  };

  return (
<form onSubmit={handleSubmit} className="container mx-auto p-4 bg-gray-100 shadow-md rounded-lg">
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <label className="text-gray-700 font-medium" htmlFor="nombre">
        Nombre:
      </label>
      <input
        className="border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
    <div className="flex items-center gap-2">
      <label className="text-gray-700 font-medium" htmlFor="color">
        Color:
      </label>
      <input
        className="border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
        type="text"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
    <div className="flex items-center gap-2">
      <label className="text-gray-700 font-medium" htmlFor="descripcion">
        Descripción:
      </label>
      <input
        className="border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
        type="text"
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
    </div>
    <div className="flex items-center gap-2">
      <label className="text-gray-700 font-medium" htmlFor="precio">
        Precio:
      </label>
      <input
        className="border border-gray-300 rounded px-2 py-1 focus:border-blue-500 focus:outline-none"
        type="text"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
    </div>
    
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type="submit"
    >
      Guardar
    </button>
  </div>
</form>


  );
};



export default Form;
