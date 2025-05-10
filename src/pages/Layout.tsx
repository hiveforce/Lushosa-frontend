import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
