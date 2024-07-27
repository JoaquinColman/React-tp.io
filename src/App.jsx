import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemCount from './components/ItemCount/ItemCount.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

/*const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={'Trending products'}/>
      <ItemDetailContainer/>
    </div>
    
  )
}*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Trending products'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Trending products'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<ItemCount />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
