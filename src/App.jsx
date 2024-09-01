import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import PaymentPage from "./pages/PaymentPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
