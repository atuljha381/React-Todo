import React, { useState } from 'react'



export default function TodoPopulate() {
    const todoData = {
        id: '1',
        work: 'react',
        status: 'pending'
    }

    const [todo, setTodo] = useState(todoData)

    function toggleHandler() {
        if (todo.status === 'pending') {
            setTodo((prevState) => ({
                ...prevState,
                status: 'done'
            }))
        } else {
            setTodo((prevState) => ({
                ...prevState,
                status: 'pending'
            }))
        }
    }
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.work}</td>
            <td>{todo.status}</td>
            <td><button className='btn btn-success' type='button' onClick={toggleHandler}>Toggle</button></td>
            <td><button className='btn btn-danger' type='button'>Delete</button></td>
        </tr>
    )
}
