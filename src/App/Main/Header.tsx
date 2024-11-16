import React from "react";
import { HeaderProps } from "../Utils/types";

const Header: React.FC<HeaderProps> = ({ onAddTaskClick }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 py-4 px-6 border-t border-gray-300">
      <h2 className="text-lg font-bold text-gray-700">Zoznam úloh</h2>
      <button
        onClick={onAddTaskClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Pridať úlohu
      </button>
    </div>
  );
};

export default Header;
