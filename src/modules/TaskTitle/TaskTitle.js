import styles from "./TaskTitle.module.css";

const TaskTitle = ({ title, priority, color }) => {
  return (
    <div draggable className={styles.taskTitle}>
      <p>{title}</p>
      <p style={{ background: color }}>{priority}</p>
    </div>
  );
};

export default TaskTitle;
