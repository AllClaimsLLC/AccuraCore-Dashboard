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
  value = [],
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const normalize = (v) => {
  if (Array.isArray(v)) return v;
  if (v) return [v];
  return [];
};

const [selected, setSelected] = useState(() => normalize(value));
  // const [selected, setSelected] = useState(value || []);
  const [editingCustom, setEditingCustom] = useState("");
  const [tempValue, setTempValue] = useState("");

  const dropdownRef = useRef(null);
  const customOptions = ["Other", "CRM (which one?)"];

useEffect(() => {
  setSelected(normalize(value));
}, [value]);

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
      setEditingCustom(""); 
      setTempValue("");
      setIsOpen(false);
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
      setIsOpen(false);
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
    setIsOpen(false);
  };

const renderSelected = () => {
  if (!selected || selected.length === 0) return "Select...";
  return Array.isArray(selected) ? selected.join(", ") : String(selected);
};

  useEffect(() => {
  if (onChange) {
    if (multiSelect) {
      onChange(selected);
    } else {
      onChange(selected[0] || "");
    }
  }
}, [selected]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-sm text-black mb-1">{label}</label>

      {/* Input */}
      <div
        className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 bg-white
flex justify-between items-center cursor-pointer transition-all duration-200
focus:outline-none focus:shadow-[0_0_0_3px_rgba(26,111,212,0.22)] focus:border-[#1A6FD4]"
tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{renderSelected()}</span>
        <MdKeyboardArrowDown />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white border rounded-md shadow-lg text-gray-700">
          {options.map((option) => {
            const isSelected = selected.some((item) =>
              item.startsWith(option)
            );

            return (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-2 py-2 hover:bg-blue-100 cursor-pointer text-[12px] ${
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700"
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