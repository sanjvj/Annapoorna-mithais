import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Lazy load components
const Home = lazy(() => import('./pages/Home/Home'))
const ShopNow = lazy(() => import('./pages/ShopNow/ShopNow'))
const CartPage = lazy(() => import('./pages/Cart/Cart'))
const About = lazy(() => import('./pages/AboutUs/About'))
const Contact = lazy(() => import('./pages/ContactUs/Contact'))
const Terms = lazy(() => import('./pages/Terms&Conditions/Terms'))
const Refund = lazy(() => import('./pages/RefundPolicy.jsx/Refund'))
const Privacy = lazy(() => import('./pages/Privacy/Privacy'))

// Loading component
const Loading = () => <div>Loading...</div>

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ShopNow />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App