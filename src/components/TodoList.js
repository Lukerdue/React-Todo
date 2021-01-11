import React from 'react';
import Todo from './Todo';

function TodoList (props) {
    function handleClear(e){
        e.preventDefault();
        props.handleClearComplete();
    }
    return(
        <div>
            {props.list.map(item=>{
               return( <Todo handleToggle={props.handleItemCompleted} key={item.id} item={item} />)
            })}
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    )
}
export default TodoList