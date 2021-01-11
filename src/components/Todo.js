import React from 'react';
import './Todo.css'

function Todo (props){
    function handleClick(){
        props.handleToggle(props.item.id);
    }
    return(
        <div onClick={handleClick} key={props.item.id} className={`item${props.item.complete ? ' complete' : ""}`}>
            <p>{props.item.name}</p>
        </div>
    )
}
export default Todo