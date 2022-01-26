import { useEffect, useState } from "react";
import { setItem, getItem } from "../utilities";

export const CreateTasks = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(0);

  useEffect(() => {
    setTaskList(getItem("taskList") ?? []);
    setTaskId(getItem("totalTasks") ?? 0);
  }, []);

  const createTask = () => {
    const id = taskId + 1;
    const tempTaskList = taskList.length > 0 ? [...taskList] : [];
    tempTaskList.push({
      id,
      name: taskName,
      selected: false,
    });
    setTaskName("");
    setTaskId(id);
    setTaskList(tempTaskList);
    setItem("taskList", tempTaskList);
    setItem("totalTasks", id);
  };

  return (
    <div>
      <div>Enter Task Name</div>
      <input
        value={taskName}
        name="task-list"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={createTask}>Create</button>
    </div>
  );
};
