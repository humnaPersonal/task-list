import { useState } from "react";
import { setItem } from "../utilities";

export const CreateTasks = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(0);

  const createTask = () => {
    const tempTaskList = [...taskList];
    tempTaskList.push({
      taskId: taskId + 1,
      name: taskName,
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
