import styles from "./EmptyTask.module.css";
import Clipboard from "../assets/Clipboard.svg";
export function EmptyTask() {
  return (
    <div className={styles.emptyTask}>
      <img src={Clipboard} alt="" />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
