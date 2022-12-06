import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import Card from "../../modules/Card/Card";

const url = "http://localhost:3000/tasks";

const Home = () => {
  const { data: tasks } = useFetch(url);

  const [toDo, setToDo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    tasks &&
      tasks.map((task) => {
        switch (task.status) {
          case "To Do":
            return setToDo((current) => [...current, task]);
          case "Doing":
            return setDoing((current) => [...current, task]);
          case "Done":
            return setDone((current) => [...current, task]);
        }
      });
  }, [tasks]);

  return (
    <div className="cards">
      <Card title="To Do" tasks={toDo} />
      <Card title="Doing" tasks={doing} />
      <Card title="Done" tasks={done} />
    </div>
  );
};

export default Home;
