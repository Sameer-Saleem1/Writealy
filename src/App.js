import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import UseCase from "./components/UseCase";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/product" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
