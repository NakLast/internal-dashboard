import React from "react";

import { RouteObject, useRoutes } from "react-router";
import { LayoutOutlined, PieChartOutlined } from "@ant-design/icons";
import Dashboard from "@pages/Dashboard";
import authenticatedRouters from "./router";
import AppLayout from "@layouts/AppLayout";

// const routers = [
//   {
//     type: "group",
//     label: "Dashboard",
//     children: [
//       {
//         key: "dashboard/monitor",
//         label: "Monitor",
//         icon: <LayoutOutlined />,
//         path: "/dashboard/monitor",
//         element: <Dashboard />,
//       },
//       {
//         key: "dashboard/analysis",
//         label: "Analysis",
//         icon: <PieChartOutlined />,
//         path: "/dashboard/analysis",
//       },
//     ],
//   },
// ];

const routers: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/analysis",
      },
    ],
  },
];

const RouterRender: React.FC = () => {
  const routerElents = useRoutes(routers);

  return routerElents;
};

const App: React.FC = () => {
  return <RouterRender />;
};

export default App;
