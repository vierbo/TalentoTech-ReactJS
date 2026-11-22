import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "./PublicLayout.css";

export const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Header />
      <main className="public-layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
