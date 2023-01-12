import React, { useEffect, useState } from 'react'

import TodoList from './Todo/TodoList'
export default function AllTodos(props) {

    const [isLoaded, setIsLoaded] = useState(true)
    const [loadedTodos, setLoadedTodos] = useState([])

    useEffect(() => {
        setIsLoaded(true)
        fetch(
            "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todos.json"
        ).then((response) => {
            return response.json()
        }).then(
            (data) => {
                const todos = []
                for (const key in data) {
                    const todo = {
                        id: key,
                        ...data[key]
                    }
                    todos.push(todo)
                }
                setIsLoaded(false)
                setLoadedTodos(todos)
            }
        )
    }, [])

    if(isLoaded){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Todos</h1>
            <TodoList todos={loadedTodos}/>
        </section>
    )
}
