import { LayoutOutlined, PieChartOutlined } from "@ant-design/icons";
import { RoutesTypes } from "@interfaces/router";
import AppLayout from "@layouts/AppLayout";

const authenticatedRoutes: RoutesTypes[] = [
  {
    key: "dashboard",
    type: "group",
    label: "Dashboard",
    icon: <LayoutOutlined />,
    path: "/dashboard",
    children: [
      {
        key: "dashboard/monitor",
        label: "Monitor",
        icon: <LayoutOutlined />,
        path: "/dashboard/monitor",
        // children: Monitor,
      },
      {
        key: "dashboard/analysis",
        label: "Analysis",
        icon: <PieChartOutlined />,
        path: "/dashboard/analysis",
        // component: Analysis,
      },
    ],
  },
];

const GenerateTreeToChildren = (treeData: RoutesTypes[]) => {
  let data: Array<object> = [];

  if (treeData?.length > 0) {
    treeData.forEach((tData: RoutesTypes) => {
      if (tData.children && (tData.children as RoutesTypes[])?.length > 0) {
        const _data = GenerateTreeToChildren(tData.children as RoutesTypes[]) || [];

        data = [...data, ..._data];
      }

      if (tData.path && tData?.children) {
        data.push({
          path: tData.path,
          element: tData?.children,
        });
      }
    });

    return data;
  }
};

const authenticatedRouters = {
  path: "/",
  element: <AppLayout />,
  children: GenerateTreeToChildren(authenticatedRoutes),
};

export default authenticatedRouters;
