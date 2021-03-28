import React from 'react';

const Form = ( {todos, setTodos, inputText, setInputText, setStatus} ) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== ''){
            setTodos([
                ...todos, {
                    text: inputText,
                    completed: false,
                    id: Math.random() * 1000
                }
            ]);
            setInputText("");
        }
        else return;
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Your todo here..."/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="far fa-plus fa-fw"></i>
            </button>
            <div className="todo-select">
                <select name="todos" className="todo-filter" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;