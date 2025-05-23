import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-dark-secondary to-dark-primary text-white font-neon">
      <Outlet />
    </div>
  );
};

export default Layout;
