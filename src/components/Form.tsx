import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./Form.module.css";

interface NewTaskProps {
  CreateNewTask: (title: string) => void;
}

export function Form({ CreateNewTask }: NewTaskProps) {
  const [task, setTask] = useState("");

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateTask() {
    CreateNewTask(task);
    setTask("");
  }

  return (
    <form className={styles.form}>
      <input
        required
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskChange}
      />
      <button onClick={handleCreateTask}>
        Criar <PlusCircle size={32} />
      </button>
    </form>
  );
}
