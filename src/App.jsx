
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from "./pages/clothes";
import Mobler from "./pages/Mobler";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/mobler" element={<Mobler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;