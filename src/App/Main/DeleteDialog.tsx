import React from "react";
import { DeleteDialogProps } from "../Utils/types";

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  taskText,
  onCancel,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">
          Ste si istý, že chcete vymazať túto úlohu?
        </h2>
        <p className="mb-4">{taskText}</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Zrušiť
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Odstrániť
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
