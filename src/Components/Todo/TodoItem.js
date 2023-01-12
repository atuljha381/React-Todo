import React from 'react'
import TodoLayout from '../Layout/TodoLayout'
export default function TodoItem(props) {
    return (
        <li>
            <TodoLayout>
                <h3>{props.todo}</h3>
            </TodoLayout>
        </li>
    )
}
