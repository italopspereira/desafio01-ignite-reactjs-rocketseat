import { RadioButton, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <label className={styles.tasksCount}>
          Tarefas criadas <span>0</span>
        </label>
        <label className={styles.tasksCompleted}>
          Concluidas <span>0 de 0</span>
        </label>
      </header>
      <div className={styles.tasksList}>
        <section>
          <div>
            <RadioButton />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et
            vitae aliquid laboriosam illum. Quibusdam a delectus
          </p>
          <div>
            <Trash />
          </div>
        </section>
      </div>
    </div>
  );
}
