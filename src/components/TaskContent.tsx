import { Circle, Trash } from "phosphor-react";
import { TypeTask } from "../types/TaskTypes";
import styles from "./TaskContent.module.css";

interface TaskProps {
  task: TypeTask;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
export function TaskContent({
  task: { id, title, isCompleted },
  onCheckTask,
  onDeleteTask,
}: TaskProps) {
  function handleCheckTask() {
    onCheckTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.taskContent}>
      <Circle color="var(--blue-dark)" size={20} onClick={handleCheckTask} />
      <div className={styles.taskTitle}>
        <p>{title}</p>
      </div>
      <Trash color="var(--gray-300)" size={17} onClick={handleDeleteTask} />
    </div>
  );
}
