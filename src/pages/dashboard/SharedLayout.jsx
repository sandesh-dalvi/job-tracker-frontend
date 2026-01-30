import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import MobileSidebar from "../../components/MobileSidebar";
import { useState } from "react";

const SharedLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <main className=" min-h-screen bg-surface-alt">
      <div className=" md:hidden">
        <MobileSidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      </div>
      <div className=" h-screen flex flex-col">
        <Navbar onMenuClick={() => setMobileSidebarOpen(true)} />
        <div className=" flex flex-1 overflow-hidden">
          <div className=" hidden md:block">
            <Sidebar
              collapsed={sidebarCollapsed}
              onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </div>

          <section className=" flex-1 overflow-y-auto p-6 lg:p-8">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
