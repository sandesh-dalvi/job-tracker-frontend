import { Link, useLocation } from "react-router";
import { sidebarTabs } from "../utils/links";

import { IoMdClose } from "react-icons/io";

const MobileSidebar = ({ isOpen, onClose }) => {
  const activeTab = useLocation().pathname;
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-surface-alt/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-surface border-r border-border z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-semibold text-content">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted cursor-pointer"
          >
            <IoMdClose className="w-5 h-5 text-content-alt" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.href;

            return (
              <Link
                key={tab.id}
                to={tab.href}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                  ${
                    isActive
                      ? "bg-secondary text-surface shadow-lg shadow-secondary/30"
                      : "text-content-alt hover:bg-muted"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default MobileSidebar;
