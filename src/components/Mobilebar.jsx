import React, { useState, useEffect } from "react";
import { Home, TrendingUp, BarChart, Wallet, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Home", icon: Home, route: "/" },
  { name: "Markets", icon: TrendingUp, route: "/markets" },
  { name: "Trasaction", icon: BarChart, route: "/login" },
  { name: "Assets", icon: Wallet, route: "/assets" },
  { name: "Me", icon: User, route: "/me" },
];

const Mobilebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  // Update active tab when route changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t  py-2 px-4">
        
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map(({ name, icon: Icon, route }) => (
          <Link
            key={name}
            to={route}
            className={`flex flex-col items-center justify-center gap-2 text-sm focus:outline-none ${
              activeTab === route
                ? "text-blue-500 font-semibold"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Icon className="h-6 w-6" />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Mobilebar;
