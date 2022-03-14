import { Routes, Route } from "react-router-dom";
import Another from "./pages/another";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="another" element={<Another />} />
      </Routes>
    </div>
  );
}

export default App;
