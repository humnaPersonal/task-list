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

  console.log(taskId, taskList);

  const createTask = () => {
    const tempTaskList = taskList.length > 0 ? [...taskList] : [];
    tempTaskList.push({
      id: taskId + 1,
      name: taskName,
      selected: false,
    });
    setTaskName("");
    setTaskId(taskId + 1);
    setTaskList(tempTaskList);
    setItem("taskList", tempTaskList);
    setItem("totalTasks", taskId);
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
