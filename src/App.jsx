// App.jsx styrer alle sidene i appen med React Router

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from "./pages/clothes";
import Mobler from "./pages/Mobler";
import Elektronikk from "./pages/Elektronikk";
import AddProduct from "./pages/AddProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Navigation from "./components/Navigation";
import MyProducts from "./pages/MyProducts";

// Her bestemmer vi hvilken side som vises på hvilken URL

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path="/elektronikk" element={<Elektronikk />} />
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/mobler" element={<Mobler />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-products" element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;