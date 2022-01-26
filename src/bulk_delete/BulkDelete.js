import { useEffect, useState } from "react";
import { emptyList } from "../constants";
import { getItem, setItem } from "../utilities";
import "../list_task/ListTasks.css";

export const BulkDelete = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(getItem("taskList"));
  }, []);

  const handleCheckbox = (e, index) => {
    const tempTaskList = [...taskList];
    tempTaskList[index].selected = e.target.checked;
    setTaskList(tempTaskList);
  };

  const deleteTasks = () => {
    const filteredData = taskList.filter((task) => task.selected === false);
    setTaskList(filteredData);
    setItem("taskList", filteredData);
  };

  return (
    <div>
      {taskList?.length > 0
        ? taskList?.map((task, index) => (
            <div key={index} className="task">
              <input
                type="checkbox"
                value={task.selected}
                onChange={(e) => handleCheckbox(e, index)}
              />
              <span>{task.id}:</span>
              <div>{task.name}</div>
            </div>
          ))
        : emptyList}
      <button onClick={deleteTasks}>Delete</button>
    </div>
  );
};
