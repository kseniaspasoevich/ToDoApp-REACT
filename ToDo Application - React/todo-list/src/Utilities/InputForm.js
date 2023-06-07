import React from "react";
import "../Styles/TaskInput.scss";
import { MdOutlineAddCircle } from "react-icons/md";

const InputForm = ({ newTitle, newDescription, onTitleChange, onDescriptionChange, onClickIcon }) => {
  return (
    <>
      <textarea
        placeholder="Enter task title..."
        className="input-title"
        value={newTitle}
        onChange={onTitleChange}
      ></textarea>
      <textarea
        placeholder="Enter task description..."
        className="input-description"
        value={newDescription}
        onChange={onDescriptionChange}
      ></textarea>
      <MdOutlineAddCircle className="icon-add-task" onClick={onClickIcon} />
    </>
  );
};

export default InputForm;
