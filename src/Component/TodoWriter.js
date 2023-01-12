import React from 'react'

import TodoSubmitter from './Todo/TodoSubmitter'
export function addTodoHandler(tododata) {
    fetch(
        "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json",
        {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(tododata),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}


export default function TodoWriter(props) {

    return (
        <section>
            <TodoSubmitter onAddTodo={addTodoHandler} />
        </section>

    )
}
