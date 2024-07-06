import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './pages/ItemListContainer'


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <ItemListContainer/>
    </div>
    
  )
}

export default App
