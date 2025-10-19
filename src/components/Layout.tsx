import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import OpenSourceBanner from "./OpenSourceBanner";

const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen font-body bg-background overflow-x-hidden">
      <OpenSourceBanner />
      <Header />

      <main className="flex-1 pt-24">
        {/* mt-20 to account for fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
