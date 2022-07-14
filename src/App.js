import { useRoutes } from "react-router-dom";
import { Admin } from "./Admin";
import "./App.css";

export const dashboardRoutes = {
  dashboard: {
    header: "Dashboard",
    element: <>govno 1</>,
  },
  startups: {
    header: "Startups",
    element: <>govno 2</>,
  },
};

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Admin />,
      children: Object.entries(dashboardRoutes).map(([path, props]) => ({
        path: path,
        element: props.element,
      })),
    },
  ]);
  return element;
}

export default App;
