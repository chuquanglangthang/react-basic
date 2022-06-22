import React from 'react'
import './TodoList.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';

class TodoList extends React.Component {

    state = {
        listTodos: [
            {
                id: 'todo1',
                title: 'Doing homework',
            },
            {
                id: 'todo2',
                title: 'Making videos',
            },
            {
                id: 'todo3',
                title: 'Fixing bugs',
            },
            {
                id: 'todo4',
                title: 'PLaying games',
            },
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo] // copy array listTodos and push 'todo' 
        })

        toast.success("Successfully added!");
    }

    render() {
        let { listTodos } = this.state
        return (
            <>
                <div className="todo-list-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo} /> {/* passing function to child component as props` */}
                    <div className="todo-list-content">
                        {// render works list using map method
                            /* must check if listTodos has element inside or not and check its length,
                                otherwise, our map method does not run correctly
                            */
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <div className="button">
                                            <button>Edit</button>
                                            <button onClick={() => this.handleDelete}>Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default TodoList