import React, { useState, useEffect } from 'react';

const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(productosGuardados);
  }, []);

  useEffect(() => {
    if (productoEditar !== null) {
      const producto = productos[productoEditar];
      setNombre(producto.nombre);
      setColor(producto.color);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
    }
  }, [productoEditar]);

  const guardarProducto = (e) => {
    e.preventDefault();
    const nuevosProductos = [...productos];
    nuevosProductos[productoEditar] = { nombre, color, descripcion, precio };
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
    setProductoEditar(null); // Cerrar el formulario de edición
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  if (productoEditar !== null) {
    return (
      <div>
        <h2>Editar Producto</h2>
        <form onSubmit={guardarProducto}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
          <label>
            Color:
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          </label>
          <label>
            Descripcion:
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </label>
          <label>
            Precio:
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          </label>
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Producto
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Descripcion
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {producto.nombre}
              </th>
              <td className="px-6 py-4">{producto.color}</td>
              <td className="px-6 py-4">{producto.descripcion}</td>
              <td className="px-6 py-4">{producto.precio}</td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => setProductoEditar(index)}>Editar</button>
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => eliminarProducto(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;