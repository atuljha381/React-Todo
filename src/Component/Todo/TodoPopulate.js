import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { addTodoHandler } from '../TodoWriter'

function updateTodoHandler(tododata) {
    fetch(
        "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json/",
        {
            mode: 'no-cors',
            method: 'PUT',
            body: JSON.stringify(tododata),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
            }
        }
    )
}

export default function TodoPopulate(props) {

    // eslint-disable-next-line
    const [isLoaded, setIsLoaded] = useState(true)
    const [tododata, setTodo] = useState([])

    useEffect(() => {
        setIsLoaded(true)

        fetch(
            "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json"

        ).then((response) => {
            console.log({ response })
            return response.json()
        }
        ).then(
            (data) => {
                console.log('data', data)
                const todos = []

                for (const key in data) {
                    const todo = {
                        id: key,
                        ...data[key]
                    }
                    todos.push(todo)
                }

                setIsLoaded(false)
                setTodo(todos)
            }
        )
    }, [])



    function toggleHandler(id, index) {
        setTodo(prev => 
            prev.map(item => {
                if (item.id === id) {
                    if (tododata[index].status === 'pending') {
                        item.status = 'done'
                    }
                    else {
                        item.status = 'pending'
                    }
                    updateTodoHandler(tododata[index])
                }
                return item
            })
        )
    }

    if (isLoaded) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    // React.useEffect(() => { console.log({ tododata }) }, [tododata])

    return (
        <>
            {console.log('atul', tododata)}
            {tododata?.map((data, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.work}</td>
                        <td>{data.status}</td>
                        <td><button className='btn btn-success' type='button' onClick={() => toggleHandler(data.id, index)}>Toggle</button></td>
                        <td><button className='btn btn-danger' type='button'>Delete</button></td>
                    </tr>
                </tbody>
            ))
            }
        </>
    )
}
