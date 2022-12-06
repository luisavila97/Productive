import React from "react";
import styles from "./TaskModule.module.css";

const TaskModule = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  status,
  setStatus,
  handleDelete,
  handleCancel,
}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            placeholder="Enter a title for this card..."
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <textarea
            placeholder="Add a more detailed description..."
            required
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
      </div>

      <div>
        <label>
          <h2>Priority:</h2>

          <select name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          <h2>Status:</h2>
          <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </div>
      <div className={styles.btn}>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>

        {handleDelete && (
          <button type="button" id="btn-delete" onClick={() => handleDelete()}>
            Delete
          </button>
        )}

        <input type="submit" value="Save" />
      </div>
    </form>
  );
};

export default TaskModule;
