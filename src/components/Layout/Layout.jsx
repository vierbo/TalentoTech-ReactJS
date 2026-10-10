import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

