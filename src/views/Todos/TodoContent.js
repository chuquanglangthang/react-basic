import React from 'react'
import { toast } from 'react-toastify';

class TodoContent extends React.Component {
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
        ],
        // define an empty obj to store the item when clicking Edit button because we want to specify which item is going to be edited

        // must check if this obj is empty or not
        listTodosToEdit: {},
    }

    handleDeleteTodo = (singleTodoItemId, singleTodoItemTitle) => {
        this.setState({
            listTodos: this.state.listTodos.filter(singleTodoItem => (singleTodoItem.id !== singleTodoItemId))
        })
        // this.props.deleteTodo(singleTodoItem.id)

        toast.success(`Delete '${singleTodoItemTitle}'`, {
            position: 'top-center',
            autoClose: 2000
        })
    }

    hanldeEditTodo = (singleTodoItem) => {

        let {listTodos,listTodosToEdit} = this.state
        let isEmptyObj = Object.keys(this.state.listTodosToEdit).length === 0

        // Save option

        // we can only save if our listTodosToEdit is not empty
        if (isEmptyObj === false) {

            /* 
                the goal is to change the title of edited todos then save. One way is to copy
                our initial listTodos and modify the copied array. After modifying, we put it back
                to our initial listToDos
            */
            let copyOfListTodos = [...listTodos]
            let objIndex = copyOfListTodos.findIndex(singleCopyOfListTodosItem => singleCopyOfListTodosItem.id === singleTodoItem.id )
            
            copyOfListTodos[objIndex].title = listTodosToEdit.title

            this.setState({
                listTodos: copyOfListTodos,
                listTodosToEdit: {}
            })
            toast.success("Updated!",{
                position: 'top-center',
                autoClose: 2000
            })
            return
        }

        // Edit option
        this.setState({
            listTodosToEdit: singleTodoItem
        })
    }

    handleChangeInputValue = (event) => {
        let copyOfListTodosToEdit = {...this.state.listTodosToEdit}
        copyOfListTodosToEdit.title = event.target.value
        this.setState({
            listTodosToEdit: copyOfListTodosToEdit
        })
    }

    render() {
        let { listTodos } = this.state
        let isEmptyObj = Object.keys(this.state.listTodosToEdit).length === 0
        let { listTodosToEdit } = this.state
        console.log("check empty obj: ", isEmptyObj)
        console.log(listTodosToEdit)
        return (
            <>
                <div className="todo-list-content">
                    {// render works list using map method
                        /* must check if listTodos has element inside or not and check its length,
                            otherwise, our map method does not run correctly
                        */
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((singleTodoItem, index) => {
                            return (
                                <div className="todo-child" key={singleTodoItem.id}>
                                    {
                                        isEmptyObj === true ?
                                            <span>{index + 1} - {singleTodoItem.title}</span>
                                            :
                                            <>
                                                {
                                                    /*
                                                        if the todo we store inside listTodosToEdit 
                                                        has the same id as the singleTodoItem 
                                                        we've mapped from listTodos, an input will appear and ready to be edited
                                                     */
                                                    listTodosToEdit.id === singleTodoItem.id ?
                                                        <span>
                                                            {index + 1} -
                                                            <input
                                                                value={listTodosToEdit.title}
                                                                onChange={(event) => this.handleChangeInputValue(event)} />
                                                        </span>
                                                        :
                                                        /*
                                                            other todos which have different id 
                                                            will be rendered as usual. 
                                                            If we don't have this line, only todo with same id will be rendered 
                                                         */
                                                        <span>{index + 1} - {singleTodoItem.title}</span>
                                                }
                                            </>
                                    }
                                    <div className="button">
                                        <button
                                            type="button"
                                            onClick={() => this.hanldeEditTodo(singleTodoItem)}>
                                            { 
                                                isEmptyObj === false && listTodosToEdit.id === singleTodoItem.id ? 
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button
                                            onClick={() => this.handleDeleteTodo(singleTodoItem.id, singleTodoItem.title)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default TodoContent
