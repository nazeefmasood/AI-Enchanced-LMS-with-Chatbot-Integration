import React from "react";

const MyOptionsInput = ({ label, value, onChange, defaultOption, options }) => {
  return (
    <div className="w-full mb-4">
      <p className="text-sm">{label}</p>
      <select
        className="w-full p-2 pl-2  text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded"
        value={value}
        onChange={onChange}
      >
        <option value="">{defaultOption}</option>
        {options &&
          options.map((option, i) => (
            <option value={option.value} id={i}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default MyOptionsInput;
