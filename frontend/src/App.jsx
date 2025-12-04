import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sell from "./components/Sell";
import Buy from "./components/Buy";

export default function App() {
  return (
    <div className="app-bg min-vh-100">
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </main>
    </div>
  );
}
