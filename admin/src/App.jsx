import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobPage />} />
      </Routes>
    </>
  );
}

export default App;
