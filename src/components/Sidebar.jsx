import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Link, useLocation } from "react-router";

import { sidebarTabs } from "../utils/links";

const Sidebar = ({ collapsed, onToggleCollapse }) => {
  const activeTab = useLocation().pathname;

  return (
    <aside
      className={`bg-surface border-r border-border flex flex-col transition-all duration-300 h-full ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header with Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && <span className="font-semibold text-content">Menu</span>}
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-lg hover:bg-muted ml-auto"
        >
          {collapsed ? (
            <FiChevronRight className="w-5 h-5 text-content-alt" />
          ) : (
            <FiChevronLeft className="w-5 h-5 text-content-alt" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.href;
          return (
            <Link
              key={tab.id}
              to={tab.href}
              onClick={() => onTabChange(tab.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                ${
                  collapsed ? "justify-center" : ""
                } hover:bg-secondary-light text-gray-700 hover:text-muted  ${
                isActive
                  ? "bg-secondary text-surface shadow-lg shadow-secondary-500/30"
                  : "text-content hover:bg-muted"
              }
                
              `}
              title={collapsed ? tab.label : ""}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{tab.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
