import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ProductsComponent from './components/products/ProductsComponent';
import ContactComponent from './components/contact/ContactComponent';
import Navbar from './components/navigation/Navbar';
import SingleProduct from './components/product/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/products" element={<ProductsComponent />} />
        <Route exact path="/product/:proId" element={<SingleProduct />} />
        <Route exact path="/contact" element={<ContactComponent />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
