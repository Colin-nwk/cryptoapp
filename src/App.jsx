import React from "react";
import { Layout } from "antd";

import { Routes, Route, Link } from "react-router-dom";

import {
  Home,
  Exchanges,
  News,
  CryptoCurrencies,
  CryptoDetails,
} from "./pages/index";
import { Navbar, CustomFooter } from "./components/index";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <Layout hasSider>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          // onBreakpoint={(broken) => {
          //   console.log(broken);
          // }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
          // }}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Navbar />
        </Sider>
        <Layout style={{ marginLeft: "200px" }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Routes */}
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
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <CustomFooter />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
