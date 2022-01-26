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
        ? taskList?.map((list) => (
            <div className="task">
              <span>{list.id}:</span>
              <div>{list.name}</div>
            </div>
          ))
        : emptyList}
    </div>
  );
};
