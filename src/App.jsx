
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from "./pages/clothes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;