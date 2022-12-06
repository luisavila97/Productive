import styles from "./Card.module.css";

import TaskTitle from "../TaskTitle/TaskTitle";

import { Link } from "react-router-dom";

const Card = ({ title, tasks }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div>
        <span>Title</span>
        <span>Priority</span>
      </div>
      {tasks &&
        tasks.map((task) => {
          let color = "red";
          switch (task.priority) {
            case "Low":
              color = "white";
              break;
            case "Medium":
              color = "#e7c42a";
              break;
            case "High":
              color = "#ee30309d";
              break;
            default:
              color = "transparent";
              break;
          }

          return (
            <div key={task.id} className={styles.btn}>
              <Link to={`/task/${task.id}`}>
                <TaskTitle title={task.title} priority={task.priority} color={color} />
              </Link>
            </div>
          );
        })}
      <Link className={styles.newPageBtn} to={`/newTask`}>
        + Add a card
      </Link>
    </div>
  );
};

export default Card;
