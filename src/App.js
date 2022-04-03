import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Loader from "./components/weatherContentPage/Loader";


const Pressure = React.lazy(() => import("./pages/User"));

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="user"
            element={
              <React.Suspense fallback={<Loader />}>
                <Pressure />
              </React.Suspense>
            }
          />
        </Routes>
    </div>
  );
}

export default App;


