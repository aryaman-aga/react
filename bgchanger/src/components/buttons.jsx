import React from "react";

function Button({ colorcode }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: colorcode }}
    >
      {colorcode}
    </button>
  );
}

export default Button;