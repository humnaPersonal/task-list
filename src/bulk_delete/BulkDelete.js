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

  const selectAll = (e) => {
    const tempTaskList = [...taskList];
    tempTaskList.forEach((task) => (task.selected = e.target.checked));
    setTaskList(tempTaskList);
    setItem("taskId", 0);
  };

  console.log(taskList)

  return (
    <div>
      {taskList.length > 0 && (
        <>
          <input type="checkbox" onChange={selectAll} />
          <button onClick={deleteTasks}>Delete All</button>
        </>
      )}
      {taskList?.length > 0
        ? taskList?.map((task, index) => (
            <div key={index} className="task">
              <input
                type="checkbox"
                checked={task.selected}
                onChange={(e) => handleCheckbox(e, index)}
              />
              <span>{task.id}:</span>
              <div>{task.name}</div>
            </div>
          ))
        : emptyList}
      {taskList.length > 0 && <button onClick={deleteTasks}>Delete</button>}
    </div>
  );
};
