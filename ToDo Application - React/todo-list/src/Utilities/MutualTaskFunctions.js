export const addTaskHandler = (event, props, newTitle, newDescription, setNewTitle, setNewDescription) => {
  event.preventDefault();
  props.onAddTask(newTitle, newDescription);
  setNewTitle(" ");
  setNewDescription(" ");
};

export const changeTitleHandler = (event, setNewTitle) => {
  setNewTitle(event.target.value);
};

export const changeDescriptionHandler = (event, setNewDescription) => {
  setNewDescription(event.target.value);
};

