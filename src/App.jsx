import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Commons from "./components/Commons";
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import Components from "./components/Components";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/commons" element={<Commons />} />
            <Route path="/components" element={<Components />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}