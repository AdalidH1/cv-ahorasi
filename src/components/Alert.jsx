// components/Alert.js
import React from "react";

const Alert = ({ message, type, onClose }) => {
  return (
    <div
      className={`bg-${type === "error" ? "red" : "green"}-200 p-4 rounded-md mb-4`}
    >
      <p className={`text-${type === "error" ? "red" : "green"}-800`}>{message}</p>
      <button
        className={`text-${type === "error" ? "red" : "green"}-800 font-bold ml-2`}
        onClick={onClose}
      >
        Cerrar
      </button>
    </div>
  );
};

export default Alert;
