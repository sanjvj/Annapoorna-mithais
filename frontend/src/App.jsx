import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";
import { CartProvider } from "./context/CartContext";


// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const ShopNow = lazy(() => import("./pages/ShopNow/ShopNow"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const About = lazy(() => import("./pages/AboutUs/About"));
const Contact = lazy(() => import("./pages/ContactUs/Contact"));
const Terms = lazy(() => import("./pages/Terms&Conditions/Terms"));
const Refund = lazy(() => import("./pages/RefundPolicy.jsx/Refund"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const ProfilePage = lazy(()=> import("./pages/Profile/Profile"));
const AdminLogin = lazy(()=> import('./components/AdminLogin'));
// Loading component

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopNow />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/orders" element={<Orders></Orders>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
            <Route path="/admin/dashboard" element={<Admin></Admin>} />
            <Route path="/admin" element={<AdminLogin></AdminLogin>} />
          </Routes>
        </CartProvider>
      </Suspense>
    </div>
  );
}

export default App;
