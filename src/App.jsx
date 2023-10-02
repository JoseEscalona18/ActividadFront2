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
      <Home/>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <Form/>  
      <TablaProductos/>
      <Footer/>
    </div>
  )
}

export default App
