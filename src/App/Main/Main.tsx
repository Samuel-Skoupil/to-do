import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Header from "./Header";
import { Task } from "../Utils/types";
import { getTasksFromLocalStorage } from "../Utils/getTask";
import RenderTasks from "../Utils/RenderTaskt";
import DeleteDialog from "./DeleteDialog";

const Main: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getTasksFromLocalStorage);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setTaskToEdit(null);
  };

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      status: "To do",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskText: string) => {
    if (taskToEdit) {
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, text: taskText } : task
        )
      );
      setTaskToEdit(null);
    }
    setIsDialogOpen(false);
  };

  const startEditTask = (task: Task) => {
    setTaskToEdit(task);
    setIsDialogOpen(true);
  };

  const updateTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (task.status === "To do")
            return { ...task, status: "In progress" };
          if (task.status === "In progress") return { ...task, status: "Done" };
          if (task.status === "Done") return { ...task, status: "To do" };
        }
        return task;
      })
    );
  };

  const confirmDeleteTask = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteDialogOpen(true);
  };

  const cancelDeleteTask = () => {
    setTaskToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
      setTaskToDelete(null);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onAddTaskClick={handleDialogOpen} />

      <div className="flex-grow p-4">
        <TaskForm
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
          onAddTask={taskToEdit ? updateTask : addTask}
          initialText={taskToEdit?.text || ""}
          isEditing={!!taskToEdit}
        />

        {isDeleteDialogOpen && (
          <DeleteDialog
            isOpen={isDeleteDialogOpen}
            taskText={taskToDelete?.text}
            onCancel={cancelDeleteTask}
            onDelete={deleteTask}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RenderTasks
            tasks={tasks}
            status="To do"
            title="To do"
            bgColor="bg-red-100"
            textColor="text-red-700"
            updateTaskStatus={updateTaskStatus}
            confirmDeleteTask={confirmDeleteTask}
            startEditTask={startEditTask}
          />
          <RenderTasks
            tasks={tasks}
            status="In progress"
            title="In Progress"
            bgColor="bg-orange-100"
            textColor="text-orange-700"
            updateTaskStatus={updateTaskStatus}
            confirmDeleteTask={confirmDeleteTask}
            startEditTask={startEditTask}
          />
          <RenderTasks
            tasks={tasks}
            status="Done"
            title="Done"
            bgColor="bg-green-100"
            textColor="text-green-700"
            updateTaskStatus={updateTaskStatus}
            confirmDeleteTask={confirmDeleteTask}
            startEditTask={startEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
