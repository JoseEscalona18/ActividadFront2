import { useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import TablaProductos from './Components/TablaProductos'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <Header/>
      <div className='mb-4'>
        <Home/>
      </div>
      <div className='mb-6'>
        <Form/>  
      </div>
      <div className='mb-6'>
        <TablaProductos/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
