import { Card, Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";

import SideMenu from "@components/SideMenu";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideMenu />
      <Content>
        <Card style={{ border: "none", height: "100vh" }}>
          <Outlet />
        </Card>
      </Content>
    </Layout>
  );
};

export default AppLayout;
