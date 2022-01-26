import { useState } from "react";
import { emptyList } from "../constants";

export const ListTasks = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      {taskList.length > 0
        ? taskList.map((list) => <div>{list.name}</div>)
        : emptyList}
    </div>
  );
};
