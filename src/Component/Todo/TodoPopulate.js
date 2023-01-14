import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { addTodoHandler } from '../TodoWriter'
//NLZSbECMSosC94f8Kdf
function updateTodoHandler(tododata, id) {
    return fetch(
        `https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata/${id}.json/`,
        {
            method: 'PUT',
            body: JSON.stringify(tododata),
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
            }
        }
    )
}

function deleteHttp(id) {
    return fetch(
        `https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata/${id}.json/`,
        {
            method: 'DELETE',
            // body: JSON.stringify(tododata,id),
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



    function toggleHandler(id) {
        setTodo(prev =>
            prev.map(item => {
                if (item.id === id) {
                    if (item.status === 'pending') {
                        item.status = 'done'
                    }
                    else {
                        item.status = 'pending'
                    }
                    updateTodoHandler(item, id)
                }
                return item
            })
        )
    }

    function deleteHandler(id) {
        deleteHttp(id).then(
            response => {
                console.log(response)
                if (response.status === 200) {
                    setTodo(prev => prev.filter(item => item.id !== id))
                }
            }
        ).catch(error => console.error(error))

        // setTodo(prev =>
        //     prev.map(item => {
        //         if (item.id === id) {
        //             console.log('delete if running')
        //             deleteHttp(item, id)
        //         }
        //         return item
        //     })
        // )
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
            {tododata?.map((data, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.work}</td>
                        <td>{data.status}</td>
                        <td><button className='btn btn-success' type='button' onClick={() => toggleHandler(data.id)}>Toggle</button></td>
                        <td><button className='btn btn-danger' onClick={() => deleteHandler(data.id)}>Delete</button></td>
                    </tr>
                </tbody>
            ))
            }
        </>
    )
}
