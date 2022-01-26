import { useEffect, useState } from "react";
import { emptyList } from "../constants";
import { getItem } from "../utilities";
import "./ListTasks.css";

export const ListTasks = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(getItem("taskList"));
  }, []);

  return (
    <div>
      {taskList?.length > 0
        ? taskList?.map((task) => (
            <div key={task.id} className="task">
              <span>{task.id}:</span>
              <div>{task.name}</div>
            </div>
          ))
        : emptyList}
    </div>
  );
};
