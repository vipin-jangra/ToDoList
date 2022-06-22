import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";

const ToDoList = (props) => {

    return (
    <>
    <div className="todo_style">
        <i 
        className="fa fa-items"
        aria-hidden ="true"
        onClick={()=>{
            props.onSelect(props.id);
        }
        }
        ></i>
        <li>{props.text}</li>
    </div>
    </>
    );

};

export default ToDoList;