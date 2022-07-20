import styles from "./Todo.module.css";
import { PlusCircle } from "phosphor-react";
export function Todo() {
  return (
    <main>
      <div className={styles.todo}>
        <form action="">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={32} />
          </button>
        </form>
      </div>
    </main>
  );
}
