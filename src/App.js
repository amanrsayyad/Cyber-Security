import React,{ Suspense, lazy, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const Home = lazy(() => import("./routes/Home"));
const RecoveryPage = lazy(() => import("./routes/RecoveryPage"));
const CloudPage = lazy(() => import("./routes/CloudPage"));

function App() {
  return (
    <>
    <BrowserRouter>
     <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<RecoveryPage />} />
        <Route path="/about-us" element={<CloudPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
