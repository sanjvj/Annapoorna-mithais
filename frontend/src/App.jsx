
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import ShopNow from './pages/ShopNow/ShopNow'
import CartPage from './pages/Cart/Cart'


function App() {
  

  return (
    <div>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop' element={<ShopNow></ShopNow>}></Route>
      <Route path='/cart' element={<CartPage></CartPage>}/>
    </Routes>
    </div>
  )
}

export default App
