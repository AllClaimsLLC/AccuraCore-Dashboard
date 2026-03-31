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
  const [selected, setSelected] = useState([]); // store all selected items as array
  const [editingCustom, setEditingCustom] = useState(""); // currently editing custom option
  const [tempValue, setTempValue] = useState(""); // temp value while typing

  const dropdownRef = useRef(null);
  const customOptions = ["Other", "CRM (which one?)"];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCustom = (option) => customOptions.some((opt) => option.includes(opt));

  const handleSelect = (option) => {
    if (isCustom(option)) {
      setEditingCustom(option);
      setTempValue("");
      setIsOpen(false);
      return;
    }

    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      if (multiSelect) {
        setSelected([...selected, option]);
      } else {
        setSelected([option]);
      }
    }
  };

  const confirmCustom = () => {
    if (!tempValue.trim()) return;
    const customFull = `${editingCustom}: ${tempValue.trim()}`;

    if (selected.includes(customFull)) {
      // Already exists
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

  const removeItem = (item) => {
    setSelected(selected.filter((s) => s !== item));
  };

  const renderSelected = () => {
    if (selected.length === 0) return "Select...";
    return selected.join(", ");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-sm text-black mb-1">{label}</label>

      {/* Selected / Dropdown */}
      <div
        className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 bg-white
         flex justify-between items-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{renderSelected()}</span>
        <MdKeyboardArrowDown />
      </div>

      {/* Dropdown List */}
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
                className={`px-2 py-1 rounded hover:bg-blue-100 cursor-pointer text-sm ${
                  isSelected ? "bg-blue-100" : ""
                }`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}

      {/* Custom input editor */}
      {editingCustom && (
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder={editingCustom.replace(/:.*$/, "").trim() || "Enter value"}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={confirmCustom}
            className="p-1 text-green-600 hover:text-green-800"
            title="Confirm"
          >
            <HiCheck size={20} />
          </button>
          <button
            type="button"
            onClick={() => { setEditingCustom(""); setTempValue(""); }}
            className="p-1 text-gray-400 hover:text-gray-600"
            title="Cancel"
          >
            <RxCross2 size={18} />
          </button>
        </div>
      )}

      {/* Selected items with remove buttons */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-[10px] text-sm"
            >
              <span>{item}</span>
              <button
                type="button"
                onClick={() => removeItem(item)}
                className="text-gray-600 hover:text-gray-800"
              >
                <RxCross2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Hidden inputs */}
      {selected.map((item, idx) => (
        <input key={idx} type="hidden" name={name} value={item} />
      ))}
    </div>
  );
}