import { Routes, Route } from "react-router-dom";
import Another from "./pages/another";
import Home from "./pages/home";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="another" element={<Another />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
