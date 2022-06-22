import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,Index)=>{
        return Index !== id;
      });
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="">To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={itemEvents}
            value={inputList}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemVal, index) => {
              return <ToDoList
                key = {index}
                id={index}
                text = {itemVal}
                onSelect = {deleteItems}
               />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;

// let time = new Date().toLocaleTimeString();
// const [ctime,setCtime] = useState(time);

// const UpdateTime = () =>{
//   time = new Date().toLocaleTimeString();
//   setCtime(time);
// }

// setInterval(UpdateTime,1000);
