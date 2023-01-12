import React, { useRef } from 'react'
import './Landing.css'
// import Todolist from './Todolist'
export default function TodoInput(props) {

    // const todolist = ['Learn Javascript', 'Learn React', 'Build React App']

    const todoRef = useRef()

    function submitHandler(event) {
        event.preventDefault()

        const enteredTodo = todoRef.current.value

        const todoData = {
            todo: enteredTodo
        }
        props.onAddTodo(todoData)
        console.log(todoData)
    }

    return (
        <section>
            <div className='container'>
                <h1>
                    THINGS TO DO
                </h1>
                <form onSubmit={submitHandler}>
                    <div className="input-group mb-3 my-5">
                        <input type="text" className="form-control" placeholder='Add New' id='todo' ref={todoRef} />
                    </div>
                    <button className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </section>
    )
}
