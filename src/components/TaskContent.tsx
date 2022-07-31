import { Check, Circle, Trash } from "phosphor-react";
import { TypeTask } from "../types/TaskTypes";
import styles from "./TaskContent.module.css";
import CheckedButton from "../assets/CheckedButton.svg";

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
      <button
        className={`${styles.checkButton} ${
          isCompleted && styles.checkCompletedButton
        }`}
        onClick={handleCheckTask}
      >
        {isCompleted && <Check size={10} weight="bold" />}
      </button>
      <p className={`${styles.taskTitle} ${isCompleted && styles.titleDone}`}>
        {title}
      </p>
      <button className={styles.trashButton}>
        <Trash color="var(--gray-300)" size={17} onClick={handleDeleteTask} />
      </button>
    </div>
  );
}
