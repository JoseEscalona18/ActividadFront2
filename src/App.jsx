import { useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import TablaProductos from './Components/TablaProductos'
import NewsSection from './Components/NewsSection'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <Header/>
      <div className='mb-6'>
        <Home/>
      </div>
      <div className='mb-6'>
      <h1 className="bg-cyan-600 rounded-lg text-center text-white text-4xl font-bold mb-6 mx-auto max-w-md" >Noticias de la Tecnología</h1>
        <NewsSection/>
      </div>
      <div className='mb-6'>
      <h1 className="bg-cyan-600 rounded-lg text-center text-white text-4xl font-bold mb-6 mx-auto max-w-md" >Agregar Producto</h1>
        <Form/>  
      </div>
      <div className='mb-6'>
      <h1 className="bg-cyan-600 rounded-lg text-center text-white text-4xl font-bold mb-6 mx-auto max-w-md" >Tabla de Productos / Edición</h1>
        <TablaProductos/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
