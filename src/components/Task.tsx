import styles from "./Task.module.css";
import { v4 as uuid } from "uuid";
import { Circle, Trash } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Form } from "./Form";
import { TaskContent } from "./TaskContent";
import { TaskInfo } from "./TaskInfo";
import { TypeTask } from "../types/TaskTypes";
import { EmptyTask } from "./EmptyTask";

export function Task() {
  const [tasks, setTasks] = useState<TypeTask[]>([]);

  function handleCreateNewTask(title: string) {
    event?.preventDefault();
    const newTask = {
      id: uuid(),
      title,
      isCompleted: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
  }
  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    console.log(newTasks);
    setTasks(newTasks);
  }

  const countAllTasks = tasks.length;
  const countCompletedTasks = tasks.reduce(
    (total, task) => (total += task.isCompleted ? 1 : 0),
    0
  );

  return (
    <div>
      <Form CreateNewTask={handleCreateNewTask} />;
      <div className={styles.tasks}>
        <TaskInfo
          countTasks={countAllTasks}
          countCompletedTasks={countCompletedTasks}
        />
        {tasks.length > 0 ? (
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <TaskContent
                key={task.id}
                task={task}
                onCheckTask={handleCheckTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        ) : (
          <EmptyTask />
        )}
      </div>
    </div>
  );
}
