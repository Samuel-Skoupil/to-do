import React, { useState, useEffect } from "react";
import { TaskFormProps } from "../Utils/types";

const TaskForm: React.FC<TaskFormProps> = ({
  isOpen,
  onClose,
  onAddTask,
  initialText = "",
  isEditing = false,
}) => {
  const [taskText, setTaskText] = useState<string>(initialText);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTaskText(initialText);
    setError("");
  }, [initialText]);

  const handleSubmit = () => {
    if (!taskText.trim()) {
      setError("Úloha nemôže byť prázdna!");
      return;
    }
    onAddTask(taskText);
    setTaskText("");
    setError("");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">
          {isEditing ? "Editovať úlohu" : "Pridať novú úlohu"}
        </h2>
        <div className="mb-4">
          <textarea
            className={`w-full p-2 border rounded outline-dotted ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            value={taskText}
            onChange={(e) => {
              setTaskText(e.target.value);
              if (error) setError("");
            }}
          ></textarea>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Zrušiť
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            {isEditing ? "Uložiť zmeny" : "Pridať"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
