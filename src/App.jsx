
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from "./pages/clothes";
import Mobler from "./pages/Mobler";
import Elektronikk from "./pages/Elektronikk";
import AddProduct from "./pages/AddProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/elektronikk" element={<Elektronikk />} />
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/mobler" element={<Mobler />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;