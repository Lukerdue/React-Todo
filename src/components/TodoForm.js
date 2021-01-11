import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            inputValue: ""
        }
    }

    handleChange = e =>{
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.handleItemAdd(this.state.inputValue);
        this.setState({inputValue:""})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" input="text" onChange={this.handleChange} value={this.state.inputValue}/>
                <button>Add</button>
            </form>
        )
    }
}
export default TodoForm;