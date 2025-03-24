import { LayoutOutlined, MoonOutlined, PieChartOutlined, SettingOutlined } from "@ant-design/icons";
import { Image, Layout, Menu, MenuProps, Switch } from "antd";
import React, { useMemo } from "react";
import { useNavigate } from "react-router";

const { Sider } = Layout;

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = useMemo(
    () => [
      {
        type: "group",
        label: "Dashboard",
        children: [
          {
            key: "dashboard/monitor",
            label: "Monitor",
            icon: <LayoutOutlined />,
            onClick: () => navigate("/dashboard"),
          },
          {
            key: "dashboard/analysis",
            label: "Analysis",
            icon: <PieChartOutlined />,
          },
        ],
      },
      {
        type: "group",
        label: "System",
        children: [
          {
            key: "settings",
            label: "Settings",
            icon: <SettingOutlined />,
          },
          {
            key: "dark_mode",
            label: "Dark Mode",
            icon: <MoonOutlined />,
            extra: <Switch />,
          },
        ],
      },
    ],
    []
  );

  return (
    <Sider width="16vw" style={{ backgroundColor: "black" }}>
      <Image preview={false} src="/iot.png" alt="logo" width={24} />
      <Menu mode="inline" items={items} style={{ backgroundColor: "black" }} />
    </Sider>
  );
};

export default SideMenu;
