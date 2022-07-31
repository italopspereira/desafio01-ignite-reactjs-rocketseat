import { PlusCircle } from "phosphor-react";
import { ChangeEvent, InvalidEvent, useState } from "react";
import styles from "./Form.module.css";

interface NewTaskProps {
  CreateNewTask: (title: string) => void;
}

export function Form({ CreateNewTask }: NewTaskProps) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  function handleCreateTask() {
    CreateNewTask(task);
    setTask("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  return (
    <form className={styles.form}>
      <input
        required
        onInvalid={handleNewTaskInvalid}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskChange}
      />
      <button type="submit" onClick={handleCreateTask}>
        Criar <PlusCircle size={32} />
      </button>
    </form>
  );
}
