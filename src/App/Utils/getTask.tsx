import { Task } from "./types";

export const getTasksFromLocalStorage = (): Task[] => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};
