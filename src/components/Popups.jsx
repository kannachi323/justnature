import React from "react";

export function SuccessPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[50vw] max-h-[80vh] p-6 rounded-md shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#ccab8f]">Success!</h2>
        <p className="text-gray-700">{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-[#ccab8f] hover:bg-[#b3947b] text-white rounded-md"
          onClick={onClose}
        >
          Click here to log in
        </button>
      </div>
    </div>
  );
}

export function ErrorPopup({ message, onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[50vw] max-h-[80vh] p-6 rounded-md shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#ccab8f]">Error!</h2>
          <p className="text-red-600">{message}</p>
          <button
            className="mt-4 px-4 py-2 bg-[#ccab8f] hover:bg-[#b3947b] text-white rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }