import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <input
          type="button"
          value="Agregar"
          className="custom-input bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />

      <input
          type="button"
          value="Editar"
          className="custom-input bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />

      <input
          type="button"
          value="Limpiar"
          className="custom-input bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />


    </>
  )
}

export default App
