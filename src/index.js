import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ListTasks } from './list_task/ListTasks';
import { CreateTasks } from './create_task/CreateTasks';
import { BulkDelete } from './bulk_delete/BulkDelete';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTasks />} />
        <Route path="list-tasks" element={<ListTasks />} />
        <Route path="create-task" element={<CreateTasks />} />
        <Route path="bulk-delete" element={<BulkDelete />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
