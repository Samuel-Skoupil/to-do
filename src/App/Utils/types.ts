export interface Task {
  id: number;
  text: string;
  status: "To do" | "In progress" | "Done";
}

export interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (taskText: string) => void;
  initialText?: string;
  isEditing?: boolean;
}

export interface DeleteDialogProps {
  isOpen: boolean;
  taskText?: string;
  onCancel: () => void;
  onDelete: () => void;
}

export interface RenderTasksProps {
  tasks: Task[];
  status: Task["status"];
  title: string;
  bgColor: string;
  textColor: string;
  updateTaskStatus: (id: number) => void;
  confirmDeleteTask: (task: Task) => void;
  startEditTask: (task: Task) => void;
}
