import React, { useState } from "react";
import InputForm from "./InputForm";
import "../Styles/TaskInput.scss";
import { addTaskHandler, changeTitleHandler, changeDescriptionHandler } from "./MutualTaskFunctions";

const TaskInput = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  return (
    <div className="input-form">
      <InputForm
        newTitle={newTitle}
        newDescription={newDescription}
        onTitleChange={(event) => changeTitleHandler(event, setNewTitle)}
        onDescriptionChange={(event) => changeDescriptionHandler(event, setNewDescription)}
        onClickIcon={(event) => addTaskHandler(event, props, newTitle, newDescription, setNewTitle, setNewDescription)}
      />
    </div>
  );
};

export default TaskInput;
