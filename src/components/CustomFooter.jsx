import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    // <footer className="footer">
    <footer className="">
      <Typography.Title
        level={5}
        style={{ color: "black", textAlign: "center" }}
      >
        CryptoApp <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </footer>
  );
};

export default CustomFooter;
