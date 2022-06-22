import React from 'react'
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddToDo = (item) => {
        // pass todo from child component to parent component

        if (!this.state.title) {
            toast.error("Missing title!", {
                position: "top-center",
                autoClose: 2000,
                draggable: false
            })
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo) // in case addNewTodo function is declared in both child and parent component
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button type="button" onClick={() => this.handleAddToDo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo