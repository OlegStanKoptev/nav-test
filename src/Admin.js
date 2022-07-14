import { Link, Outlet, useLocation } from "react-router-dom";
import { dashboardRoutes } from "./App";

const links = [
  { path: "/dashboard", name: "Dashboard" },
  { path: "/startups", name: "Startups" },
];

export function Admin() {
  let location = useLocation();
  const lastRouteName = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const currentHeader = dashboardRoutes[lastRouteName]?.header;

  const currentPathIs = (path) => {
    return lastRouteName === path.substring(1, path.length);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "100px auto",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          gridRow: "1 / 3",
          height: "1500px",
        }}
      >
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          {links.map((link) => (
            <>
              <Link
                to={link.path}
                style={{
                  backgroundColor: currentPathIs(link.path) ? "red" : undefined,
                }}
              >
                {link.name}
              </Link>{" "}
              |{" "}
            </>
          ))}
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "red",
          position: "sticky",
          top: 0,
        }}
      >
        {currentHeader}
      </div>
      <div style={{ backgroundColor: "green" }}>
        <Outlet />
      </div>
    </div>
  );
}
