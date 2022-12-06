import TaskModule from "../../modules/TaskModule/TaskModule";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const url = "http://localhost:3000/tasks";

const NewTask = () => {
  const navigate = useNavigate();

  const { httpConfig } = useFetch(url);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title,
      description,
      priority,
      status,
    };

    await httpConfig(updatedTask, "POST");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
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
      handleCancel={handleCancel}
    />
  );
};

export default NewTask;
