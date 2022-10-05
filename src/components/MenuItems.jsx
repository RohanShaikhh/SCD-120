import { useLocation } from "react-router";
import { Menu } from "antd";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="Light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "50%",
        justifyContent: "center",
        backgroundColor: "#000000",
        hoverColor: "#000000",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">👛 Send Assets</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">🏦 Dex</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 Pool</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 History</NavLink>
      </Menu.Item>
      <Menu.Item icon={<ArrowsAltOutlined style={{ color: "#000" }} />}>
        <a href="https://www.metacians.com/">Metacians Platform</a>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
