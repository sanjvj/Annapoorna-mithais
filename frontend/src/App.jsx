
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import ShopNow from './pages/ShopNow/ShopNow'
import CartPage from './pages/Cart/Cart'
import About from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'


function App() {
  

  return (
    <div>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop' element={<ShopNow></ShopNow>}></Route>
      <Route path='/cart' element={<CartPage></CartPage>}/>
      <Route path='/about' element={<About></About>} />
      <Route path='/contact' element={<Contact></Contact>} />
    </Routes>
    </div>
  )
}

export default App
