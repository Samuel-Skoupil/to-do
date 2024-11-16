import React from "react";
import { RenderTasksProps, Task } from "../Utils/types";

const RenderTasks: React.FC<RenderTasksProps> = ({
  tasks,
  status,
  title,
  bgColor,
  textColor,
  updateTaskStatus,
  confirmDeleteTask,
  startEditTask,
}) => {
  return (
    <div className={`${bgColor} p-4 rounded shadow`}>
      <h2 className={`text-lg font-bold ${textColor} mb-4`}>{title}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <div
            key={task.id}
            className="border border-gray-300 p-2 mb-2 bg-white rounded shadow"
          >
            <p>{task.text}</p>
            <div className="flex justify-between mt-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => updateTaskStatus(task.id)}
              >
                {status === "To do"
                  ? "Start"
                  : status === "In progress"
                  ? "Dokončiť"
                  : "Odznova"}
              </button>
              <div className="flex space-x-2">
                <button
                  className="px-4 bg-blue-500 text-white rounded"
                  onClick={() => startEditTask(task)}
                >
                  ✎
                </button>
                <button
                  className="px-4 bg-red-500 text-white rounded"
                  onClick={() => confirmDeleteTask(task)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderTasks;
