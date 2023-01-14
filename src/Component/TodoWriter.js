import React from 'react'
import { useNavigate } from 'react-router-dom'

import TodoSubmitter from './Todo/TodoSubmitter'



export default function TodoWriter(props) {
    const navigate = useNavigate()
    function addTodoHandler(tododata) {
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
        ).then(() =>
            navigate('/')
        )
    }

    return (
        <section>
            <TodoSubmitter onAddTodo={addTodoHandler} />
        </section>

    )
}
