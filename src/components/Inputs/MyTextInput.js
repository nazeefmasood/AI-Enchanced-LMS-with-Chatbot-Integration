import React from "react";

const MyTextInput = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div className="w-full mb-4">
      <p className="text-sm">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 pl-2  text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded"
      />
    </div>
  );
};

export default MyTextInput;
