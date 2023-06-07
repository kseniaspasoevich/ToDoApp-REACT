import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../Styles/Content.scss";
import ModalWindow from "./ModalWindow";
import EditForm from "./EditForm";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";

const TasksList = (props) => {
  const [modal, setModal] = useState();
  const [editedTask, setEditedTask] = useState(null);

  const modalHandler = () => {
    setModal(null);
  };

  const editHandler = (task) => {
    setEditedTask(task);
  };

  const deleteHandler = (id) => {
    const updatedTasks = props.tasks.filter((task) => task.id !== id);
    props.updateTasks(updatedTasks);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    props.updateTasks(props.tasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
    setEditedTask(null);
  };

  const handleSingleColumn = (result) => {
    const items = Array.from(props.tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    props.updateTasks(items);
  };

  const handleMultipleColumns = (result, sourceColumn_, destinationColumn_) => {
    const { sourceIndex, destinationIndex } = result;
    const sourceItems = Array.from(props.tasks.filter((task) => task.status === sourceColumn_));
    const [removedItem] = sourceItems.splice(sourceIndex, 1);
    const destinationItems = Array.from(props.tasks.filter((task) => task.status === destinationColumn_));
    destinationItems.splice(destinationIndex, 0, removedItem);

    const updatedTasks = [
      ...props.tasks.filter((task) => task.status !== sourceColumn_),
      ...props.tasks.filter((task) => task.status !== destinationColumn_),
      ...sourceItems,
      ...destinationItems,
    ];
    props.updateTasks(updatedTasks);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { sourceColumn, destinationColumn } = result;

    //drag and drop into the same column
    if (sourceColumn === destinationColumn) {
      handleSingleColumn(result);
    }

    //drag and drop between multiple columns
    if (sourceColumn !== destinationColumn) {
      handleMultipleColumns(result, sourceColumn, destinationColumn);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {modal && (
        <ModalWindow title={modal.title} description={modal.description} status={props.status} onClose={modalHandler} />
      )}
      <Droppable droppableId={props.status} key={props.status}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="task-container">
            <ul className="listOfTasks">
              {editedTask && (
                <EditForm editedTask={editedTask} setEditedTask={setEditedTask} updateHandler={updateHandler} />
              )}
              {props.tasks.map((task, index) => {
                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="main-container"
                      >
                        <TbEdit
                          className="icon-edit"
                          onClick={() => {
                            editHandler(task);
                          }}
                        />
                        <div
                          className="task"
                          onClick={() => {
                            setModal({
                              title: task.title,
                              description: task.description,
                              status: task.status,
                            });
                          }}
                        >
                          {task.title}
                        </div>
                        <AiOutlineDelete className="icon-delete" onClick={() => deleteHandler(task.id)} />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TasksList;
