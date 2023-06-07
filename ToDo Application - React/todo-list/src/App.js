import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext>
      <div className="App">
        <Header />
        <Content />
      </div>
    </DragDropContext>
  );
}

export default App;
