import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout/Layout";
import Loader from "./components/weatherContentPage/Loader";


const Pressure = React.lazy(() => import("./pages/pressure"));

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="pressure"
            element={
              <React.Suspense fallback={<Loader />}>
                <Pressure />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


