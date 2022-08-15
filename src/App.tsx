import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import Dashboard from "./views/dashboard/Dashboard";
import Shop from "./views/shop/Shop";
function App() {
  return (
  <BrowserRouter>
  <Header/>
    <div className="container">
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="shop" element={<Shop />}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
