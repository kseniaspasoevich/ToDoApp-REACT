import React from "react";
import "../Styles/EditForm.scss";

const EditForm = (props) => {
  const { editedTask, setEditedTask, updateHandler } = props;

  return (
    <div>
      <form className="edit-form" onSubmit={updateHandler}>
        <input
          type="text"
          placeholder="Task Title"
          value={editedTask.title}
          onChange={(event) => {
            setEditedTask({ ...editedTask, title: event.target.value });
          }}
        />
        <textarea
          placeholder="Task Description"
          value={editedTask.description}
          onChange={(event) => {
            setEditedTask({ ...editedTask, description: event.target.value });
          }}
        ></textarea>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditedTask(null)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
