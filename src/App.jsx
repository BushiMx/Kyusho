// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/menu/menu";
import { Inicio } from "./pages/inicio";
import { Page404 } from "./pages/page404";
import { Kyusho } from "./pages/kyusho";
import Nosotros from "./pages/nosotros";
import Instructores from "./pages/instructores";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/kyusho" element={<Kyusho />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/instructores" element={<Instructores />} />
        <Route path="/fotos" element={<Page404 />} />
        <Route path="/video" element={<Page404 />} />
        <Route path="/eventos" element={<Page404 />} />
        <Route path="/informacion" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
