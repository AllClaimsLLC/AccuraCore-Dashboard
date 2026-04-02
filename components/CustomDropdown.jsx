"use client";

import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { HiCheck } from "react-icons/hi";

export default function CustomDropdown({
  label,
  options,
  name,
  required = false,
  multiSelect = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [editingCustom, setEditingCustom] = useState("");
  const [tempValue, setTempValue] = useState("");

  const dropdownRef = useRef(null);
  const customOptions = ["Other", "CRM (which one?)"];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setEditingCustom("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCustom = (option) =>
    customOptions.some((opt) => option.includes(opt));

  const handleSelect = (option) => {
    // If already selected, deselect it
    const alreadySelected = selected.some((item) => item.startsWith(option));
    if (alreadySelected) {
      setSelected(selected.filter((item) => !item.startsWith(option)));
      setEditingCustom(""); // close any custom input
      setTempValue("");
      return;
    }

    // Otherwise, handle selection
    if (isCustom(option)) {
      setEditingCustom(option);
      setTempValue("");
      setIsOpen(false);
      return;
    }

    if (multiSelect) {
      setSelected([...selected, option]);
    } else {
      setSelected([option]);
      setIsOpen(false);
    }
  };

  const confirmCustom = () => {
    if (!tempValue.trim()) return;

    const customFull = `${editingCustom}: ${tempValue.trim()}`;

    if (selected.includes(customFull)) {
      setEditingCustom("");
      setTempValue("");
      return;
    }

    if (multiSelect) {
      setSelected([...selected, customFull]);
    } else {
      setSelected([customFull]);
    }

    setEditingCustom("");
    setTempValue("");
  };

  const renderSelected = () => {
    return selected.length === 0 ? "Select..." : selected.join(", ");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-sm text-black mb-1">{label}</label>

      {/* Input */}
      <div
        className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 bg-white
        flex justify-between items-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{renderSelected()}</span>
        <MdKeyboardArrowDown />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white border rounded-md shadow-lg">
          {options.map((option) => {
            const isSelected = selected.some((item) =>
              item.startsWith(option)
            );

            return (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-2 py-2 hover:bg-blue-100 cursor-pointer text-sm ${
                  isSelected ? "bg-blue-100 font-medium" : ""
                }`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}

      {/* Custom Input */}
      {editingCustom && (
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder={`Enter ${editingCustom}`}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm"
          />

          <button
            type="button"
            onClick={confirmCustom}
            className="p-1 text-green-600"
          >
            <HiCheck size={20} />
          </button>

          <button
            type="button"
            onClick={() => {
              setEditingCustom("");
              setTempValue("");
            }}
            className="p-1 text-gray-400"
          >
            <RxCross2 size={18} />
          </button>
        </div>
      )}

      {/* Hidden Inputs */}
      {selected.map((item, idx) => (
        <input key={idx} type="hidden" name={name} value={item} />
      ))}
    </div>
  );
}