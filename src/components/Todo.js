import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteTodoHandler = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id))
    };

    const completeTodoHandler = () => {
        setTodos(todos.map( (item) => {
            if(item.id === todo.id){
                return{
                    ...todo, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            <button className="todo-complete" onClick={completeTodoHandler}>
                <i className={`fas ${todo.completed ? "fa-times" : "fa-check"} fa-fw`}></i>
            </button>
            <button className="todo-delete" onClick={deleteTodoHandler}>
                <i className="fas fa-trash fa-fw"></i>
            </button>
        </div>
    );
}

export default Todo;