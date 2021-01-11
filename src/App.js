import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      list: [],
    }
  }

    handleItemAdd = (itemName) =>{
      const item= {
        name: itemName,
        id: uuid(),
        complete: false
      }

      const newList = [...this.state.list, item];

      this.setState({
        list: newList
      })
    }
    handleItemCompleted = (itemId)=>{
      this.setState({
        list: this.state.list.map(item=>{
          if(item.id === itemId) {
            return{...item, complete: !item.complete}
          }
          console.log(this.state.list)
          return(item);
        })
      });
    }
    handleClearComplete = ()=>{
      const newList = this.state.list.filter(item=>{
        return(!item.complete)
      })
      this.setState({
        list: newList
      })
    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleItemAdd={this.handleItemAdd}/>
        <TodoList handleItemCompleted={this.handleItemCompleted} list={this.state.list} handleClearComplete={this.handleClearComplete}/>
      </div>
    );
  }
}

export default App;
