import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  MoneyCollectOutlined,
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
// import icon from "../image/bitcoin-digital-webp.png";
const Navbar = () => {
  return (
    <div className="">
      <div className="logo-container">
        <Avatar icon={<CodeSandboxOutlined />} size={40} />
        <Typography.Title level={4} className="logo">
          <Link to="/">CryptoApp</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">
              </Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="2">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key="3">
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="4">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
