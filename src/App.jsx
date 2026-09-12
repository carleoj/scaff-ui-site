import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Commons from "./components/Commons";
import Docs from "./components/Docs";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/commons" element={<Commons />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}