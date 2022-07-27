import styles from "./TaskInfo.module.css";

interface TaskInfoProps {
  countTasks: number;
  countCompletedTasks: number;
}

export function TaskInfo({ countTasks, countCompletedTasks }: TaskInfoProps) {
  return (
    <div className={styles.TaskInfo}>
      <label>
        Tarefas criadas <span>{countTasks}</span>
      </label>
      <label>
        Concluídas
        <span>
          {countCompletedTasks} de {countTasks}
        </span>
      </label>
    </div>
  );
}
