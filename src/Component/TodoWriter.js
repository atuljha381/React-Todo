import React from 'react'
import classes from './TodoWriter.module.css'
import TodoTable from './Todo/TodoTable'
export default function TodoWriter() {
    return (
        <>
            <section className={classes.text}>
                <form >
                    <div className='form-group container'>
                        <h1>TODO LIST!</h1>
                        <input type="text" className="form-control" />
                        <button type="button" class="btn btn-primary btn-lg w-100">Add</button>
                    </div>
                </form>
            </section>
            <section className={classes.mt10}>
                <TodoTable />
            </section>
        </>

    )
}
