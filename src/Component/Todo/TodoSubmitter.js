import React, { useRef } from 'react'
import classes from './TodoSubmitter.module.css'

export default function TodoSubmitter(props) {
    const workInputRef = useRef()

    function onSubmitHandler(event) {
        event.preventDefault()

        const enteredWork = workInputRef.current.value

        const todoData = {
            work: enteredWork,
            status: 'pending'
        }
        
        // console.log('Post todo data',todoData)
        props.onAddTodo(todoData)
    }

    return (
        <section className={classes.text}>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group container'>
                    <h1>TODO LIST!</h1>
                    <input type="text" className="form-control" required id='work' ref={workInputRef} />
                    <button className="btn btn-primary btn-lg w-100">Add</button>
                </div>
            </form>
        </section>
    )
}
