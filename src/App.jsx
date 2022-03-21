import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Layout, Typography, Space } from "antd";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import {
  Home,
  Exchanges,
  News,
  CryptoCurrencies,
  CryptoDetails,
} from "./pages/index";
import { Navbar, Footer } from "./components/index";
import { Layout } from "antd";
// import { Navbar } from "./components";

function App() {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <main>
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                ></Route>
                <Route
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                ></Route>
                <Route path="/exchanges" element={<Exchanges />}></Route>
                <Route path="/news" element={<News />}></Route>
              </Routes>
            </div>
          </Layout>
          <Footer />
        </main>
        {/* <small>App</small> */}
      </div>
    </>
  );
}

export default App;
