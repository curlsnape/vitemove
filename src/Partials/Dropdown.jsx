import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const Dropdown = ({ title, options, onSelect }) => {
  const [selected, setSelected] = useState(title); // Default to title
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (option === title) return; // Prevent selecting the title
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left capitalize px-4 py-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-sm font-medium  rounded-sm shadow-md hover:opacity-90"
      >
        {selected} <ChevronDown size={18} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-lg rounded-sm mt-2">
          <li className="px-4 py-2 text-gray-600 cursor-not-allowed uppercase text-xs flex items-center gap-2">
            {title}
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer text-black hover:bg-gray-200 transition-all  hover:px-6 font-medium text-xs flex uppercase items-center justify-between"
              onClick={() => handleSelect(option)}
            >
              {option}{" "}
              {selected === option && (
                <Check size={16} className="text-green-500" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
