import { Routes, Route } from "react-router-dom";
import Pressure from "./pages/preassure";
import Home from "./pages/home";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pressure" element={<Pressure />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


