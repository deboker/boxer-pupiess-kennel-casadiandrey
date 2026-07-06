import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div id="top" className={isHome ? "site site--home" : "site"}>
      <Header isHome={isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
