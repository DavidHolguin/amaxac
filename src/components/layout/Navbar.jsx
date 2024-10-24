// src/components/layout/Navbar.jsx
import { Bell, Menu, UserCircle } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-blue-700 rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold">AMAXAC SEGURO</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <UserCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;