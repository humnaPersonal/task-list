import { useState } from "react";
import { emptyList } from "./constants";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      {taskList.length > 0
        ? taskList.map((list) => <div>{list.name}</div>)
        : emptyList}
    </div>
  );
}

export default App;
