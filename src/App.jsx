import React, { useState } from "react";
import "./index.css";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      const newArray = [...oldItems, inputList];
      return newArray;
    });
    setInputList('');
  };

  const deleteItems=(id)=>
  {
    setItems((oldItems)=>
    {
        return oldItems.filter((arr,index)=>
        {
           return index!==id;
        })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={itemEvent}
          value={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemVal,index) => {
              return <ToDoLists text={itemVal}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
