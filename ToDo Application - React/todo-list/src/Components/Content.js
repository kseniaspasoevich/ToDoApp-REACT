import React, { useEffect } from "react";
import { useGetToLocalStorage } from "../Utilities/Hooks";
import TaskInput from "../Utilities/TaskInput";
import TasksList from "../Utilities/TasksList";
import "../Styles/Content.scss";

const Content = () => {
  const [tasksListToDo, setTasksListToDo] = useGetToLocalStorage("TODO");
  const [tasksListInProgress, setTasksListInProgress] = useGetToLocalStorage("INPROGRESS");
  const [tasksListFinished, setTasksListFinished] = useGetToLocalStorage("FINISHED");


  const addTaskHandler = (listIndex, title_, description_) => {
    switch (listIndex) {
      case 0:
        setTasksListToDo((prevTasksList) => [
          ...prevTasksList,
          { title: title_, description: description_, id: Math.random().toString() },
        ]);
        break;
      case 1:
        setTasksListInProgress((prevTasksList) => [
          ...prevTasksList,
          { title: title_, description: description_, id: Math.random().toString() },
        ]);
        break;
      case 2:
        setTasksListFinished((prevTasksList) => [
          ...prevTasksList,
          { title: title_, description: description_, id: Math.random().toString() },
        ]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    [tasksListToDo, tasksListInProgress, tasksListFinished].forEach((tasks, index) => {
      const key = ["TODO", "INPROGRESS", "FINISHED"][index];
      localStorage.setItem(key, JSON.stringify(tasks));
    });
  }, [tasksListToDo, tasksListInProgress, tasksListFinished]);

  return (
    <div className="columns">
      <div className="column1">
        <TaskInput onAddTask={(title, description) => addTaskHandler(0, title, description)} />
        <div className="column-header">
          <p className="column-title">To do: </p>
          <TasksList tasks={tasksListToDo} updateTasks={(updatedTasks) => setTasksListToDo(updatedTasks)} status={"to-do"} />
        </div>
      </div>

      <div className="column2">
        <TaskInput onAddTask={(title, description) => addTaskHandler(1, title, description)} />
        <div className="column-header">
          <p className="column-title">In progress: </p>
          <TasksList
            tasks={tasksListInProgress}
            updateTasks={(updatedTasks) => setTasksListInProgress(updatedTasks)}
            status={"in-progress"}
          />
        </div>
      </div>

      <div className="column3">
        <TaskInput onAddTask={(title, description) => addTaskHandler(2, title, description)} />
        <div className="column-header">
          <p className="column-title">Finsihed: </p>
          <TasksList
            tasks={tasksListFinished}
            updateTasks={(updatedTasks) => setTasksListFinished(updatedTasks)}
            status={"finished"}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
