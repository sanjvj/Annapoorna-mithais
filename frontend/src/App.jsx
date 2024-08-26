
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import ShopNow from './pages/ShopNow/ShopNow'


function App() {
  

  return (
    <div>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop' element={<ShopNow></ShopNow>}></Route>
      
    </Routes>
    </div>
  )
}

export default App
