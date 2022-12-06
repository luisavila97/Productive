import { useFetch } from "../../hooks/useFetch";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskModule from "../../modules/TaskModule/TaskModule";

const Task = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const url = `http://localhost:3000/tasks/${id}`;

  const { data: task, httpConfig } = useFetch(url);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title,
      description,
      priority,
      status,
    };

    await httpConfig(updatedTask, "PUT");

    navigate("/");
  };

  const handleDelete = async () => {
    await httpConfig("", "DELETE");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      {task && (
        <TaskModule
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
          handleDelete={handleDelete}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default Task;
