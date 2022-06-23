import React from 'react'
import './TodoList.scss'
import AddTodo from './AddTodo'
import TodoContent from './TodoContent' 
import { toast } from 'react-toastify';


class TodoList extends React.Component {

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo] // copy array listTodos and push 'todo' 
        })

        toast.success("Successfully added!");
    }

    deleteTodo = (todo) => {
        console.log(todo)
    }
    render() {
        return (
            <>
                <div className="todo-list-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo} /> {/* passing function to child component as props` */}
                    <TodoContent
                        deleteTodo={this.deleteTodo} />
                </div>
            </>
        )
    }
}

export default TodoList